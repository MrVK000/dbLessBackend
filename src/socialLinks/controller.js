const userModel = require('./model');
const responsehandler = require('../../utills/responseHandler');

const get = async (req, res) => {
    try {
        const result = [
            {
                "icon": "fa-brands fa-facebook-f",
                "background": "#395593",
                "url": "https://www.facebook.com/Wonderla?_gl=1*lpwfoh*_ga*MTk0NTMxMTYxMy4xNzIyNTc4MDQx*_ga_DMYPKC176S*MTcyMzYzMzU4NS41My4xLjE3MjM2MzM4OTIuMTMuMC4w&_ga=2.32395326.1852035800.1723440547-1945311613.1722578041"
            },
            {
                "icon": "fa-brands fa-x-twitter",
                "background": "#029def",
                "url": "https://x.com/Wonder_La?_gl=1*2mzkg5*_ga*MTk0NTMxMTYxMy4xNzIyNTc4MDQx*_ga_DMYPKC176S*MTcyMzYzMzU4NS41My4wLjE3MjM2MzM4NDUuNjAuMC4w&_ga=2.138368688.1852035800.1723440547-1945311613.1722578041"
            },
            {
                "icon": "fa-brands fa-instagram",
                "background": "#f733a1",
                "url": "https://www.instagram.com/wonderla_in/?_gl=1*1t9c3j7*_ga*MTk0NTMxMTYxMy4xNzIyNTc4MDQx*_ga_DMYPKC176S*MTcyMzYzMzU4NS41My4wLjE3MjM2MzM1ODUuNjAuMC4w&_ga=2.71742227.1852035800.1723440547-1945311613.1722578041"
            },
            {
                "icon": "fa-brands fa-youtube",
                "background": "#f60100",
                "url": "https://www.youtube.com/user/wonderlabangalore"
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