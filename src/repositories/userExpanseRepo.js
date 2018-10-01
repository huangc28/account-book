import curry from '../utils/curry'

/**
 * Eager loads expanses with user information.
 *
 * @param {Model} userModel
 * @param {String} userID
 * @returns {Function}
 */
export const getUserWithExpansesByID = curry(
  (userModel, userID) => {
    return userModel
      .query()
      .where('id', userID)
      .eager('expanses')
  }
)
