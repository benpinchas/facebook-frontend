const ChatService = require('./chat.service.js')

module.exports = {
    loadChat
}


async function loadChat(req, res) {
    let loggedInUserId = req.session.user._id
    let user2Id = req.query.userId 
    try {
        let chat = await ChatService.loadChat(loggedInUserId, user2Id)
        res.json(chat)
    }catch(err) {
        console.log('ERROR: loadChat controller', err)
    }
    console.log('user1Id user2Id', loggedInUserId, user2Id)
  
}





