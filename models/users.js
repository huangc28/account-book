import { Model } from 'objection'

import Expanses from './expanses'
import knexBase from './knexBase'

Model.knex(knexBase)

class Users extends Model {
  static tableName = 'users'

  static relationMappings = {
    expanses: {
      relation: Model.HasManyRelation,
      modelClass: Expanses,
      join: {
        from: 'users.id',
        to: 'expanses.user_id',
      }
    }
  }
}

export default Users