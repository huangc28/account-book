import { Model } from 'objection'
import { resolve } from 'path'

/**
 * User can have one AccountBook
 * AccountBook can only belong to 1 person
 *
 * An AccountBook can have multiple Expanses
 * An Expanse can only belong to one account books.
 *
 */
class AccountBook extends Model {
  static tableName = 'account_book'

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: resolve(__dirname, './users.js'),
      join: {
        from: 'account_book.user_id',
        to: 'user.id',
      },
    },
    expanses: {
      relation: Model.HasManyRelation,
      modelClass: resolve(__dirname, './expanses.js'),
      join: {
        from: 'account_book.id',
        to: 'expanses.account_book_id',
      },
    },
  }
}

export default AccountBook
