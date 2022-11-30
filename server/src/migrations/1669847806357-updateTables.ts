import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTables1669847806357 implements MigrationInterface {
    name = 'updateTables1669847806357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "createdAt" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "createdAt"`);
    }

}
