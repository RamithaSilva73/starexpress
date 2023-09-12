const stylemaster = require('./stylemaster');
const express = require('express');
const router = express.Router();

class stylemasterController {
    constructor(app) {
        router.get('/', stylemaster.getAllstyles);
        router.post('/', stylemaster.addstyle);
        router.put('/', stylemaster.updatestyle);
        router.delete('/:id', stylemaster.deletestyle);
        app.use('/api/v1/stylemaster', router);
    }
}
module.exports = stylemasterController;