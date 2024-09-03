
const getPark = async (req, client) => {
    try {
        // console.log('l]]]',req);
        // const response = await client.query(`SELECT * FROM park`);
        const response = [
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
        if (response) {
            return { error: false, data: response, message: "Park data read successfully" };
        } else {
            return { error: true, message: "Park data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getPark,
};