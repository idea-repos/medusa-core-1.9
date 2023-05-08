import { MigrationInterface, QueryRunner } from "typeorm"

export class AddProductColumns1683289453022 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE "product" ADD "description_1" character varying;
        `)
    
        await queryRunner.query(`
        ALTER TABLE "product" ADD "description_2" character varying;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
    ALTER TABLE "product" DROP COLUMN "description_1";
    `)
    
    await queryRunner.query(`
    ALTER TABLE "product" DROP COLUMN "description_2";
    `)
    }

}
