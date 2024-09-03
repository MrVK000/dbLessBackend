
const getMobileMenu = async () => {
    try {
        // console.log('l]]]',req);
        // const response = await client.query(`SELECT * FROM mobile_menu`);
        const response = [
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
        ];
        if (response) {
            return { error: false, data: response, message: "Mobile menu data read successfully" };
        } else {
            return { error: true, message: "Mobile menu data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getMobileMenu,
};