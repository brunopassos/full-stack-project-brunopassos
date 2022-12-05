import { MigrationInterface, QueryRunner } from "typeorm";

export class createContactsTable1669917661642 implements MigrationInterface {
    name = 'createContactsTable1669917661642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL, "email" character varying(100) NOT NULL, "phone" character varying(20) NOT NULL, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
