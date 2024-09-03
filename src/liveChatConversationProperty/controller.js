const userModel = require('./model');
const responsehandler = require('../../utills/responseHandler');

const get = async (req, res) => {
    try {
        const result = [
            {
                "id": 0,
                "property": "Wonderla Kochi"
            },
            {
                "id": 1,
                "property": "Wonderla Bengaluru"
            },
            {
                "id": 2,
                "property": "Wonderla Hydarbad"
            },
            {
                "id": 3,
                "property": "Wonderla Bhubaneswar"
            },
            {
                "id": 4,
                "property": "Wonderla Resort"
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