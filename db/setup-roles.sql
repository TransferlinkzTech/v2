-- One-time setup of two limited users for the website, in its own database.
-- Run it ONCE, as the database admin (avnadmin on Aiven), with psql:
--
--   psql "<admin connection URL>" \
--     -v owner_pw='<new password for the owner>' \
--     -v web_pw='<new password for the website>' \
--     -f db/setup-roles.sql
--
-- (On Aiven, add sslmode=verify-full to the URL and set PGSSLROOTCERT to the
-- path of the CA certificate file.) Generate each password with:
--   openssl rand -hex 24   (hex keeps it safe to put in a connection URL)
--
-- What it creates:
--   transferlinkz_owner  creates and owns the tables. Used only to run
--                        `npm run db:migrate` (DATABASE_MIGRATE_URL).
--   transferlinkz_web    what the live site connects as (DATABASE_URL). It can
--                        insert waitlist signups and nothing else: it cannot
--                        read, change or delete rows, or touch the schema.
-- Both live in their own database, `waitlist`, apart from any other
-- application's data. Create that database first (the Aiven console's
-- Databases tab does it), as this file expects it to exist.

\set ON_ERROR_STOP on

create role transferlinkz_owner login password :'owner_pw';
create role transferlinkz_web login password :'web_pw';

-- Only the people named here can connect or create temporary tables
revoke connect, temporary on database waitlist from public;
grant connect on database waitlist
  to current_user, transferlinkz_owner, transferlinkz_web;

\connect waitlist

-- Nobody gets the public schema by default; hand it out one role at a time
revoke all on schema public from public;
grant usage on schema public to transferlinkz_web;
grant usage, create on schema public to transferlinkz_owner;

-- If the tables already exist (the migrations ran before this file), give the
-- website user its permissions now. The grants migration does the same when it
-- runs after this file, so the order doesn't matter.
do $$
begin
  if to_regclass('public.waitlist_signups') is not null then
    grant insert on public.waitlist_signups to transferlinkz_web;
    grant usage on sequence public.waitlist_signups_id_seq to transferlinkz_web;
  end if;
end
$$;
