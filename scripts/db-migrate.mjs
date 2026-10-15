// Applies db/schema.sql to the database in DATABASE_URL.
// Run with: npm run db:migrate
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import pg from "pg";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set. Add it to .env.local first.");
  process.exit(1);
}

const schema = await readFile(
  fileURLToPath(new URL("../db/schema.sql", import.meta.url)),
  "utf8",
);

const client = new pg.Client({ connectionString: url });
try {
  await client.connect();
  await client.query(schema);
  console.log("Database schema is up to date.");
} catch (error) {
  console.error("Migration failed:", error.message);
  process.exitCode = 1;
} finally {
  await client.end();
}
