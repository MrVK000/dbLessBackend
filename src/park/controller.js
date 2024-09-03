const userModel = require('./model');
const responsehandler = require('../../utills/responseHandler');

const get = async (req, res) => {
    try {
        const result = [
            {
                "id": 0,
                "label": "Wonderla Kochi"
            },
            {
                "id": 1,
                "label": "Wonderla Bengaluru"
            },
            {
                "id": 2,
                "label": "Wonderla Hydarbad"
            },
            {
                "id": 3,
                "label": "Wonderla Bhubaneswar"
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