import House from '../models/House'
import User from '../models/User'

class HouseController{
  async index(req, res){
    const { status } = req.query

    const houses = await House.find({ status: status })

    return res.json({ houses })
  }

  async store(req, res){
    const { filename } = req.file
    const { description, price, location, status } = req.body
    const { user_id } = req.headers

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description: description,
      price: price,
      location: location,
      status: status,
    })

    return res.json(house)
  }

  async update(req, res) {
    const { filename } = req.file
    const { user_id } = req.headers
    const { house_id } = req.params
    const { description, price, location, status } = req.body

    // Checking if logged user is the same of the one whos trying to update house
    const user = await User.findById(user_id)
    const houses = await House.findById(house_id)

    if(String(user._id) !== String(houses.user)){
      return res.status(401).json({ error: 'Not authorized to update this house' })
    }

    await House.updateOne({ _id: house_id }, {
      user: user_id,
      thumbnail: filename,
      description: description,
      price: price,
      location: location,
      status: status,
    })

    return res.send()
  }
}

export default new HouseController()