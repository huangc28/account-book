import Knex from 'knex'

import config from '../knexfile'

const knex = Knex(config.test)

export default knex