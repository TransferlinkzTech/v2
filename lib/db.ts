import "server-only";
import { Pool } from "pg";

// One pool per server process. Kept on globalThis so that hot reloading in
// development doesn't open a new pool (and leak connections) on every edit.
const globalForPool = globalThis as unknown as { pgPool?: Pool };

export function getPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  // The connection string decides SSL (for example "?sslmode=require")
  globalForPool.pgPool ??= new Pool({
    connectionString,
    max: 5,
    connectionTimeoutMillis: 5_000,
  });
  return globalForPool.pgPool;
}
