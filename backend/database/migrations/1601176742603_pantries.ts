import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pantries extends BaseSchema {
  protected tableName = 'pantries'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('fk_user')
        .unsigned()
        .references('id')
        .inTable('user')

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
