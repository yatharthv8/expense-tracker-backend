import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.boolean('email_verification_status').notNullable().defaultTo(false);
      table.string('image_url').notNullable().defaultTo(false);
      table.string('default_currency').notNullable().defaultTo('INR');
      table.string('password').notNullable();

      //expense details
      table.string('group_id').nullable();
      table.string('expense_id').nullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
