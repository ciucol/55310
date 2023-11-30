import { convertDate } from './utils/convert-date.util'

class UserDTO {
  constructor(user) {
    name = user.name
    lastname = user.lastname
    fullname = user.name + user.lastname
    email = user.email
    password = user.password
    bithdate = convertDate(user.birthdate)
  }
}

const mockUser = {}

const user = new UserDTO(mockUser)

expect(user).to.have.property(user.name).to
