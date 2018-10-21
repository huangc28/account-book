import { getUserWithExpansesByID } from '../repositories/userExpanseRepo'
import Users from '../models/users'
import compose from '../utils/compose'

// retrieve all expanses for a given user
async function expanses (req, res) {
  // retrieve user id from URL param
  const getUserIDFromRequest = req => req.params.userID

  const getExpanses = compose(
    getUserWithExpansesByID(Users),
    getUserIDFromRequest,
  )

  const result = await getExpanses(req)

  res.status(200).json(result)
}

export default {
  expanses,
}
