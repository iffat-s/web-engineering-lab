/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
export class CreateResultsTable1776752157731 {

    async up(queryRunner) {
        await queryRunner.query(`
          CREATE TABLE "results" (
            "id" SERIAL NOT NULL,
            "student_name" character varying NOT NULL,
            "subject" character varying NOT NULL,
            "marks" integer NOT NULL,
            "grade" character varying,
            CONSTRAINT "PK_e8f2a9191c61c15b627c117a678" PRIMARY KEY ("id")
          )
        `);
      }
    
      async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "results"`);
      }

}
