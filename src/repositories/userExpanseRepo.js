import curry from '../utils/curry'

/**
 * @param {Model} userModel
 * @param {String} userID
 */
export const getExpansesByUserID = curry(
  (userModel, userID) => {
    console.log(userModel)

    return userModel
      .$relatedQuery('expanses')
  }
)
