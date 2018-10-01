import request from 'supertest'

import app from '../index'
import KnexBase from '../models/knexBase'

describe('user apis integration tests', () => {
  afterAll(() => KnexBase.destroy())

  test('get all user related expanses', done => {
    request(app)
      .get('/v1/users/1/expanses')
      .expect(200)
      .end((err, res) => {
        if (err) done(err)

        const expanse = res.body[0].expanses[0]

        expect(expanse.amount).toBe(123)
        expect(expanse.action).toBe('expanse')

        done()
      })
  })
})