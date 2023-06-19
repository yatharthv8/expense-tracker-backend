import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'expenses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary();
      table.string('group_id').nullable();
      table.integer('amount').notNullable();
      table.string('description').notNullable();
      table.string('details').nullable();
      table.timestamp('date', { useTz: true }).nullable();
      table.string('currency_code').notNullable().defaultTo('INR');
      table.boolean('from_splitwise').notNullable().defaultTo(false);
      table.string('receipt_img_url').nullable();


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
