
const getLocations = async (req, client) => {
    try {
        // console.log('l]]]',req);
        // const response = await client.query(`SELECT * FROM locations`);
        const response = [
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
        if (response) {
            return { error: false, data: response, message: "Locations data read successfully" };
        } else {
            return { error: true, message: "Locations data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getLocations,
};