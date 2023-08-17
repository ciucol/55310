const handler = async event => {
  try {
    const users = await Users.find({ status: true }, { status: 0, __v: 0 })
    res.json({ message: users })
  } catch (error) {
    res.json({ error })
  }
}
