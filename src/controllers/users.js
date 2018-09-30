import UserExpanseRepo from '../repositories/userExpanseRepo'
import Users from '../../models/users'

// const curry(UserExpanseRepo.getExpanse, Users)(userID)

// retrieve all expanses for a given user
function expanses (req, res) {
  // retrieve user id from URL param
  const getUserIDFromRequest = req =>req.params.userID

  const getExpanses = compose(
    UserExpanseRepo.getExpansesByUserID(Users),
    getUserIDFromRequest,
  )

  const result = await getExpanses(req)

  console.log(result)

  res.status(200).json({
    msg: 'expanse api'
  })
}

export default {
  expanses,
}