class UserDto {
  constructor(userInfo) {
    this.name = userInfo.name
    this.email = userInfo.email
    this.password = userInfo.password
    this.role = userInfo.role
    this.orders = []
  }
}

module.exports = UserDto
