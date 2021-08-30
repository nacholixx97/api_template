const router = require('express').Router();
const { authValidator } = require('../middlewares/authValidator')

const {
    getAll,
    getById
} = require('../controllers/users');

// api/users
router.get('/', authValidator, getAll);

// api/users/{id}
router.get('/:id', authValidator, getById);

module.exports = router;
