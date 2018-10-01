import { Model } from 'objection'
import { resolve } from 'path'

import knexBase from './knexBase'

Model.knex(knexBase)

class Expanses extends Model {
  static tableName = 'expanses'

  static relationMappings = {
    users: {
      relation: Model.BelongsToOneRelation,
      modelClass: resolve(__dirname, 'users.js'),
      join: {
        from: 'expanses.userId',
        to: 'user.id',
      }
    }
  }
}

export default Expanses