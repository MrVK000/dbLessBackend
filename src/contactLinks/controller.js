const userModel = require('./model');
const responsehandler = require('../../utills/responseHandler');

const get = async (req, res) => {
    try {
        const result = [
            {
                "id": 1,
                "link_title": "Home",
                "link_url": "#"
            },
            {
                "id": 2,
                "link_title": "Wonderla Kochi",
                "link_url": "#"
            },
            {
                "id": 3,
                "link_title": "Wonderla Bengaluru",
                "link_url": "#"
            },
            {
                "id": 4,
                "link_title": "Wonderla Hyderabad",
                "link_url": "#"
            },
            {
                "id": 5,
                "link_title": "Wonderla Bhubaneswar",
                "link_url": "#"
            },
            {
                "id": 6,
                "link_title": "Resort",
                "link_url": "#"
            },
            {
                "id": 7,
                "link_title": "Park Timings and Tickets",
                "link_url": "#"
            },
            {
                "id": 8,
                "link_title": "Offers",
                "link_url": "#"
            },
            {
                "id": 9,
                "link_title": "Dress Code",
                "link_url": "#"
            },
            {
                "id": 10,
                "link_title": "Getting to wonderla",
                "link_url": "#"
            },
            {
                "id": 11,
                "link_title": "Foods & Beverages",
                "link_url": "#"
            },
            {
                "id": 12,
                "link_title": "Merchandise",
                "link_url": "#"
            },
            {
                "id": 13,
                "link_title": "Tour Operator's Portal",
                "link_url": "#"
            },
            {
                "id": 14,
                "link_title": "Rules and Regulations",
                "link_url": "#"
            },
            {
                "id": 15,
                "link_title": "Safety and Hygiene",
                "link_url": "#"
            },
            {
                "id": 16,
                "link_title": "Cancellation and Reschedule",
                "link_url": "#"
            },
            {
                "id": 17,
                "link_title": "Wonderlab",
                "link_url": "#"
            },
            {
                "id": 18,
                "link_title": "Green Initiatives",
                "link_url": "#"
            },
            {
                "id": 19,
                "link_title": "CSR Initiatives",
                "link_url": "#"
            },
            {
                "id": 20,
                "link_title": "FAQ",
                "link_url": "#"
            },
            {
                "id": 21,
                "link_title": "Investor Relations",
                "link_url": "#"
            },
            {
                "id": 22,
                "link_title": "Careers",
                "link_url": "#"
            },
            {
                "id": 23,
                "link_title": "Tender",
                "link_url": "#"
            },
            {
                "id": 24,
                "link_title": "About Us",
                "link_url": "#"
            },
            {
                "id": 25,
                "link_title": "Our People",
                "link_url": "#"
            },
            {
                "id": 26,
                "link_title": "Contact Us",
                "link_url": "#"
            },
            {
                "id": 27,
                "link_title": "Press",
                "link_url": "#"
            },
            {
                "id": 28,
                "link_title": "Event",
                "link_url": "#"
            },
            {
                "id": 29,
                "link_title": "Special Activities",
                "link_url": "#"
            },
            {
                "id": 30,
                "link_title": "Privacy Policy",
                "link_url": "#"
            },
            {
                "id": 31,
                "link_title": "Quick Links",
                "link_url": "#"
            },
            {
                "id": 32,
                "link_title": "Terms & Conditions",
                "link_url": "#"
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