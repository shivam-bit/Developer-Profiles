const express = require('express');

const router = express.Router();
const { addUser, getUser, getAllUsers, deleteUser } = require('./controllers/usersController');

router.route('/developers').post(addUser);
router.route('/developers').get(getAllUsers);
router.route('/developers/:id').get(getUser);
router.route('/developers/:id').delete(deleteUser);

module.exports = router;
