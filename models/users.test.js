import knexBase from './knexBase'
import Users from './users'

describe('user ORM operations', () => {
  afterAll(() => knexBase.destroy())

  test('get all users', async () => {
    const users = await Users.query()

    expect(users.length).toBe(3)
    expect(users[0].name).toBe('Bryan Huang')
  })
})