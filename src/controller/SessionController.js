// methods: index, show, update, store, destroy

/* 
index: list of sessions
store: create a new session
show: when we want to list a single session
destroy: when we want to remove a session
update: when we want to update a session
*/

import User from '../models/User'

class SessionController{
  async store(req, res){
    const { email } = req.body.email

    // Verifying if user already exists
    let user = await User.findOne({ email })

    if(!user){
      user = await User.create({ email })
    }

    return res.json(user)
  }
}

export default new SessionController()