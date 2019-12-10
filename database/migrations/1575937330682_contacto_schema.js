'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactoSchema extends Schema {
  up () {
    this.create('contactos', (table) => {
      table.increments()
      table.string('tipo',50)
      table.string('descripcion',50)
      table.timestamps()
    })
  }

  down () {
    this.drop('contactos')
  }
}

module.exports = ContactoSchema
