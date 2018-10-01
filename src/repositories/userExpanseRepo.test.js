import { getExpansesByUserID } from '../repositories/userExpanseRepo'
import UsersModel from '../../models/users'

describe('relationship operations between user and expanses', () => {
  test('get user expanses by user id in FP fashion', async () => {
    // console.log('user model', UsersModel.tableName)

    const expanses = await getExpansesByUserID(UsersModel)(1)

    console.log('expanses', expanses)
  })
})