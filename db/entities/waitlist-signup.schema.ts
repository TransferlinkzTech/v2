import { EntitySchema } from "typeorm";

// The waitlist table. `npm run db:gen` compares this with the database and
// writes a migration for the difference. The website itself doesn't use this
// file: it inserts with plain SQL (features/waitlist/actions.ts).
export const WaitlistSignup = new EntitySchema({
  name: "WaitlistSignup",
  tableName: "waitlist_signups",
  columns: {
    // A bigserial: its numbers come from a sequence, which the website's
    // database user needs permission to use (see the grants migration)
    id: { type: "bigint", primary: true, generated: "increment" },
    name: { type: "text" },
    // Stored lower-cased, so one address can only join once
    email: { type: "text" },
    company: { type: "text", nullable: true },
    createdAt: { name: "created_at", type: "timestamptz", createDate: true },
  },
  uniques: [{ name: "waitlist_signups_email_key", columns: ["email"] }],
});
