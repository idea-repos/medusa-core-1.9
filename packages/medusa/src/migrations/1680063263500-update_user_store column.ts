import { MigrationInterface, QueryRunner } from "typeorm"

export class storeColumns1680063263500 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(`
    ALTER TABLE user_store_products DROP COLUMN id;
    `)

    await queryRunner.query(`ALTER TABLE user_store_products
    ADD COLUMN id SERIAL PRIMARY KEY;`);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE "department";
    `)
    
    await queryRunner.query(`
      DROP TABLE "user_store_products";
    `)
  }
}