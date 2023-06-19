import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'groups'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary();
      table.string('name').notNullable();
      table.string('group_type').notNullable();
      table.boolean('is_simplified').notNullable().defaultTo(false);
      table.string('user_id').notNullable();
      table.string('image_url').notNullable().defaultTo(false);
      table.string('default_currency').notNullable().defaultTo('INR');
      table.integer('total_group_spending').notNullable().defaultTo(0);

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
