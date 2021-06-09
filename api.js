const express = require('express');

const router = express.Router();
const { addUser, getUser, getAllUsers, deleteUser, renderUserProfile } = require('./controllers/usersController');

router.route('/api/developers').post(addUser);
router.route('/api/developers').get(getAllUsers);
router.route('/api/developers/:id').get(getUser);
router.route('/api/developers/:id').delete(deleteUser);
router.route('/:id').get(renderUserProfile);

module.exports = router;
