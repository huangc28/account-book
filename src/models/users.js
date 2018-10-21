import { Model } from 'objection'
import { resolve } from 'path'

import knexBase from './knexBase'

Model.knex(knexBase)

class Users extends Model {
  static tableName = 'users'

  static relationMappings = {
    expanses: {
      relation: Model.HasManyRelation,
      modelClass: resolve(__dirname, 'expanses.js'),
      join: {
        from: 'users.id',
        to: 'expanses.user_id',
      }
    }
  }
}

export default Users
