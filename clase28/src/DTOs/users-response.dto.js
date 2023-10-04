class UserResponseDTO {
  constructor(userInfo) {
    this.response = {
      status: 'success',
      payload: {
        id: userInfo._id,
      },
    }
  }
}

module.exports = UserResponseDTO
