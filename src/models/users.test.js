import knexBase from './knexBase'
import Users from './users'

describe('user ORM operations', () => {
  afterAll(() => knexBase.destroy())

  test('get all users', async () => {
    const users = await Users.query()

    expect(users.length).toBe(3)
    expect(users[0].name).toBe('Bryan Huang')
  })

  test('get all expanses by user id', async () => {
    const res = await Users.query().eager('expanses')

    console.log('Users', res)
  })
})