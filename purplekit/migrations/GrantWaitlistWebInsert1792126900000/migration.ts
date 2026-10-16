import type { MigrationInterface, QueryRunner } from 'typeorm';

// Lets the website's database user (see db/setup-roles.sql) add waitlist
// signups and nothing else. TypeORM doesn't track permissions, so this is
// written by hand. It does nothing when that user doesn't exist, which is the
// case on a local database.
//
// INSERT alone isn't enough: the id comes from a sequence, which the user
// needs permission to draw from.
export class GrantWaitlistWebInsert1792126900000 implements MigrationInterface {
  name = 'GrantWaitlistWebInsert1792126900000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DO $$ BEGIN IF EXISTS (SELECT FROM pg_roles WHERE rolname = 'transferlinkz_web') THEN GRANT INSERT ON "waitlist_signups" TO transferlinkz_web; GRANT USAGE ON SEQUENCE "waitlist_signups_id_seq" TO transferlinkz_web; END IF; END $$`,
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DO $$ BEGIN IF EXISTS (SELECT FROM pg_roles WHERE rolname = 'transferlinkz_web') THEN REVOKE USAGE ON SEQUENCE "waitlist_signups_id_seq" FROM transferlinkz_web; REVOKE INSERT ON "waitlist_signups" FROM transferlinkz_web; END IF; END $$`,
    );
  }
}
