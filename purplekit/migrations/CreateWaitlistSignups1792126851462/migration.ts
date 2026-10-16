import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateWaitlistSignups1792126851462 implements MigrationInterface {
  name = 'CreateWaitlistSignups1792126851462';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "waitlist_signups" ("id" BIGSERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "company" text, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "waitlist_signups_email_key" UNIQUE ("email"), CONSTRAINT "PK_2c25d8edf518162f06c849c5fb3" PRIMARY KEY ("id"))`,
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "waitlist_signups"`);
  }
}
