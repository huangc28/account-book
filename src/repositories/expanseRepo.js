import curry from '../utils/curry'

export const getExpanseByID = curry(
  (expanseModel, ID) => {
    return expanseModel
      .query()
      .where('id', ID)
  }
)
