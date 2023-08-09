const order = require('./order');
const express = require('express');
const router = express.Router();

class OrderController {
    constructor(app) {
        router.get('/', order.getAllOrders);
        router.post('/', order.addOrder);
        router.put('/', order.updateOrder);
        router.delete('/:id', order.deleteOrder);
        app.use('/api/v1/order', router);
    }
}
module.exports = OrderController;