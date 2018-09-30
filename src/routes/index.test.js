import request from 'supertest'

import app from '../index'

describe('user apis integration tests', () => {
  test('get all user related expanses', done => {
    request(app)
      .get('/v1/users/1/expanses')
      .expect(200)
      .end((err, res) => {
        if (err) done(err)

        expect(res.body.msg).toBe('expanse api')

        done()
      })
  })
})