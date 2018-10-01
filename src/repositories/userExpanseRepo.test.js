import { getUserWithExpansesByID } from '../repositories/userExpanseRepo'
import UsersModel from '../models/users'
import KnexBase from '../models/knexBase'

describe('relationship operations between user and expanses', () => {
  afterAll(() => KnexBase.destroy())

  test('get user expanses by user id in FP fashion', async () => {
    const users = await getUserWithExpansesByID(UsersModel)(1)

    const expanse = users[0].expanses[0]

    expect(expanse.amount).toBe(123)
    expect(expanse.action).toBe('expanse')
  })
})