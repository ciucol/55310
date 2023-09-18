import {Router} from 'express'
import { UserInfo } from '../interfaces/user-info.interface'
import { UsersDAO} from '../DAO/users.dao'

const Users = new UsersDAO()

const router: Router = Router({caseSensitive: true})


router.post('/', async (req, res) => {
  const userInfo: UserInfo = req.body

  const newUserInfo: UserInfo = {
    name: userInfo.name,
    lastname: userInfo.lastname
  }

  const newUser = Users.insert(newUserInfo)
  
  res.json({message: newUser})
})

export default router