import { Model } from 'objection'
import { resolve } from 'path'

import knexBase from './knexBase'

Model.knex(knexBase)

class Expanses extends Model {
  static tableName = 'expanses'

  static relationMappings = {
    users: {
      relation: Model.BelongsToOneRelation,
      modelClass: resolve(__dirname, './users.js'),
      join: {
        from: 'expanses.user_id',
        to: 'users.id',
      }
    },
    account_book: {
      relation: Model.BelongsToOneRelation,
      modelClass: resolve(__dirname, './accountBook.js'),
    },
    join: {
      from: 'expanses.account_book_id',
      to: 'account_book.id',
    },
  }
}

export default Expanses
