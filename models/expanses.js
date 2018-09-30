import { Model } from 'objection'

import Users from './users'
import knexBase from './knexBase'

Model.knex(knexBase)

class Expanses extends Model {
  static tableName = 'expanses'

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: Users,
      join: {
        from: 'expanses.user_id',
        to: 'user.id',
      }
    }
  }
}

export default Expanses