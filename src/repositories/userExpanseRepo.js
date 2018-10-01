import curry from '../utils/curry'

/**
 * @param {Model} userModel
 * @param {String} userID
 */
export const getExpansesByUserID = curry(
  (userModel, userID) => {
    console.log('userModel', userModel)
    console.log('userID', userID)

    return userModel.$relatedQuery('expanses')
  }
)
