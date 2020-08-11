const express = require('express');
const router = express.Router();

const Chat = require('../models/Chat');




router.get('/chat', async (req, res) => {
    const chats = await Chat.find();
    res.render('chat/chat_user', { chats });
});

router.post('/chat/chat_user', async (req, res) => {
    const { author, message } = req.body;
    console.log('este son los datos, no BD ' , req.body);

    /*const emailUser = await User.findOne({ email: author });
    if (emailUser) {
        req.flash('error_msg', 'Algo inesperado ocurrio, intente otra vez');
        res.redirect('/chat/chat');
    } else {*/
    const newChat = new Chat({ author, message });
    await newChat.save();
    req.flash('error_msg', 'Algo inesperado ocurrio, intente otra vez');
    //}
    const chats = await Chat.find();
    res.render('chat/chat_user', { chats });
    
});



module.exports = router; 