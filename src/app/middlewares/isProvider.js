const { User } = require('../models')

module.exports = async (req, res, next) => {
  const { email } = req.body
  const valueProvider = await User.findOne({
    where: { email: email }
  })

  console.log(valueProvider.provider)

  if (valueProvider.provider === true) {
    return res.redirect('/listServices')
  } else {
    return next()
  }
}
