import "server-only";
import { Pool } from "pg";
import { normalisePem } from "./pem";

// Hosts such as Aiven sign their database certificates with their own authority,
// which Node doesn't trust by default. Put that CA certificate in
// DATABASE_CA_CERT (the PEM text, with "\n" for line breaks if it has to fit on
// one line) and the connection stays fully verified. pg lets the URL's sslmode
// override the ssl option, so it is dropped from the URL when a CA is given.
function connectionOptions(connectionString: string) {
  const ca = normalisePem(process.env.DATABASE_CA_CERT);
  if (!ca) return { connectionString };

  const url = new URL(connectionString);
  url.searchParams.delete("sslmode");
  return {
    connectionString: url.toString(),
    ssl: { ca, rejectUnauthorized: true },
  };
}

// One pool per server process. Kept on globalThis so that hot reloading in
// development doesn't open a new pool (and leak connections) on every edit.
const globalForPool = globalThis as unknown as { pgPool?: Pool };

export function getPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  // Without a CA certificate the connection string decides SSL (for example
  // "?sslmode=require")
  globalForPool.pgPool ??= new Pool({
    ...connectionOptions(connectionString),
    max: 5,
    connectionTimeoutMillis: 5_000,
  });
  return globalForPool.pgPool;
}
