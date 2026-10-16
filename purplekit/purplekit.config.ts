import { writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { PURPLEKIT_CONFIGURATIONS } from "purplekit";
import { normalisePem } from "../lib/pem";

// Purplekit wants the connection as separate settings, so this takes them from
// the same URL variables the app uses. The scripts in package.json load .env
// and .env.local before running it.
//
// DATABASE_MIGRATE_URL is the owner user (it can create tables); DATABASE_URL,
// the website's limited user, is the fallback.
const raw = process.env.DATABASE_MIGRATE_URL ?? process.env.DATABASE_URL;
if (!raw) {
  throw new Error(
    "DATABASE_MIGRATE_URL (or DATABASE_URL) is not set. Add it to .env.local first.",
  );
}

const url = new URL(raw);
const database = decodeURIComponent(url.pathname.slice(1));

// Purplekit records what it has run in a table called "migrations". Shared
// databases usually have one already, belonging to another application, so
// refuse to touch them. The site's tables live in their own database.
const SHARED_DATABASES = ["defaultdb", "postgres", "template1"];
if (SHARED_DATABASES.includes(database)) {
  throw new Error(
    `Refusing to run migrations in "${database}": it is a shared database that may belong to another application. Point DATABASE_MIGRATE_URL at the site's own database ("waitlist").`,
  );
}

// Purplekit reads the CA certificate from a file, so the text in
// DATABASE_CA_CERT is written to a temporary one
const ca = normalisePem(process.env.DATABASE_CA_CERT);
let caFile = "./";
if (ca) {
  caFile = join(tmpdir(), "transferlinkz-db-ca.pem");
  writeFileSync(caFile, `${ca}\n`, { mode: 0o600 });
}

const sslmode = url.searchParams.get("sslmode");
const ssl = Boolean(ca) || (sslmode !== null && sslmode !== "disable");

const config: PURPLEKIT_CONFIGURATIONS = {
  ENTITIES: ["db/entities/*.schema.ts"],
  SEEDS: [],

  TYPE: "postgres",
  DATABASE_HOST: url.hostname,
  DATABASE_PORT: Number(url.port || 5432),
  DATABASE_USERNAME: decodeURIComponent(url.username),
  DATABASE_PASSWORD: decodeURIComponent(url.password),
  DATABASE_NAME: database,
  // The site's user can only reach its own database, so connect straight to it
  INITIAL_DATABASE: database,

  SSL_MODE: ssl,
  SSL_TYPE: ca ? "heavy" : "light",
  DATABASE_CA_CERT: caFile,
  SYNCHRONIZE: false,
  LOGGING: false,
};

export default config;
