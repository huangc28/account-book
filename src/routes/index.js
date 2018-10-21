import express from 'express'

import users from '../controllers/users'

const Router = express.Router()

/**
 * @TODO, we should aggregate routes by category instead of having
 * all routes specified in this script. For example:
 *
 * Router.use('/user', users)
 * Router.use('/account-books', accountBooks)
 *
 * export default Router
 */
Router.get('/users/:userID(\\d+)/expanses', users.expanses)
Router.get('/users/:userID(\\d+)/account-book', (req, res) => {
  res.send('hello account-book')
})

export default Router
