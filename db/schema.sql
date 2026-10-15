-- TransferLinkz database schema. Safe to run more than once.
-- Apply it with: npm run db:migrate

create table if not exists waitlist_signups (
  id         bigint generated always as identity primary key,
  name       text        not null,
  -- Stored lower-cased, so one address can only join once
  email      text        not null,
  company    text,
  created_at timestamptz not null default now(),
  constraint waitlist_signups_email_key unique (email)
);
