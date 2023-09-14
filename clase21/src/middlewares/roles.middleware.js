const roles = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return res.json({ status: 'error', error: 'Role not found' })
    }
    next()
  }
}

module.exports = roles
