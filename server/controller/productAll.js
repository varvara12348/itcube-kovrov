const databaseConfig = require('../config/knexfile');
var knex = require('knex')(databaseConfig);

exports.getAllProducts = (req, res) => {
    knex('products')
        .select()
        .then(products => {
            res.send({
                count: products.length,
                products: products
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Внутренняя ошибка сервера' });
        });
};