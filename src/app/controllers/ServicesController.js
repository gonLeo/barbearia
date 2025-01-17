const { Appointment } = require('../models')
const { User } = require('../models')

class ServicesController {
  async index (req, res) {
    const providerId = req.params.provider
    const services = await Appointment.findAll({
      include: [{
        model: User,
        as: 'user'
      }],
      where: {
        providerId: providerId,
        date: '2019-10-29 21:00:00+00'
      }
    })
    return res.render('services/index', { services })
  }
}

module.exports = new ServicesController()
