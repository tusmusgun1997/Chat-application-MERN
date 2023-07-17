const express = require('express')
const { protect } = require('../middleware/AuthMiddleware')
const router = express.Router()
const { accessChat, fetchChats, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require('../controllers/chatControllers')

router.post('/', protect, accessChat)
router.get('/', protect, fetchChats)
router.post('/group', protect, createGroupChat)
router.put('/rename', protect, renameGroup)
router.put('/groupRemove', protect, removeFromGroup)
router.put('/groupAdd', protect, addToGroup)



module.exports = router