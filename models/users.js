import { Model } from 'objection'

import knexBase from './knexBase'

Model.knex(knexBase)

export default class Users extends Model {
  static get tableName () {
    return 'users'
  }
}