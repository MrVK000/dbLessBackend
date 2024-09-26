const userModel = require('./model');
const responsehandler = require('../../utills/responseHandler');

const get = async (req, res) => {
    try {
        const result = [
            {
                label: '1',
                id: 0
            },
            {
                label: '2',
                id: 1
            },
            {
                label: '3',
                id: 2
            },
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