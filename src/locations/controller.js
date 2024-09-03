const userModel = require('./model');
const responsehandler = require('../../utills/responseHandler');

const get = async (req, res) => {
    try {
        const result = [
            {
                "id": 0,
                "label": "Parks"
            },
            {
                "id": 1,
                "label": "Resorts"
            },
            {
                "id": 2,
                "label": "Day Outing"
            }
        ];
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result);
        } else {
            responsehandler.sentErrorResponse(res, result);
        }
    } catch {
        responsehandler.sentInternalServerErrorResponse(res);
    }
}

module.exports = {
    get,
};