import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1669840451022 implements MigrationInterface {
    name = 'createTables1669840451022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL, "name" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "phone" character varying(20) NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
