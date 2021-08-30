
exports.up = function (knex) {
    return knex('users')
        .then(function () {
            return knex('users').insert([
                {
                    username: 'admin',
                    password: '123'
                }
            ]);
        });
};

exports.down = function (knex) {

};
