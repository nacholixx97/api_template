const db = require('../database/config');
const { catchAsync } = require('../helpers/catchAsync');
const ErrorHandler = require('../helpers/errorHandler');
const { sendOK } = require('../helpers/sendOK');

const usersController = {};

usersController.getAll = catchAsync(async (req, res, next) => {
    const users = await db('users').orderBy('id', 'asc');

    sendOK(res, users);
});

usersController.getById = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const user = await db('users')
        .where({
            id: id
        }).first();

    if (!user)
        next(new ErrorHandler(`No existe usuario de ID: ${id}`));
    else
        sendOK(res, user);
});

module.exports = usersController;
