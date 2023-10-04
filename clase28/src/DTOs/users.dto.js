class UserDTO {
  constructor(userInfo) {
    this.name = userInfo.name
    this.lastname = userInfo.lastName
    this.fullname = userInfo.name + ' ' + userInfo.lastname
    this.createdAt = new Date()
  }
}

module.exports = UserDTO
