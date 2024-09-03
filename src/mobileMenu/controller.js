const userModel = require('./model');
const responsehandler = require('../../utills/responseHandler');

const get = (req, res) => {
    try {
        const result = [
            {
                "id": 1,
                "label": "MENU",
                "icon": "fa-solid fa-list-ul"
            },
            {
                "id": 2,
                "label": "BOOK NOW",
                "icon": "fa-solid fa-calendar-days"
            },
            {
                "id": 3,
                "label": "CALL",
                "icon": "fa-solid fa-phone-flip"
            }
        ]

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