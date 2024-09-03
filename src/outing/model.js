
const getOuting = async (req, client) => {
    try {
        // console.log('l]]]',req);
        // const response = await client.query(`SELECT * FROM outing`);
        const response = [
            {
                "id": 0,
                "label": "Bengaluru Resort - Day Outing"
            }
        ];
        if (response) {
            return { error: false, data: response, message: "Outing data read successfully" };
        } else {
            return { error: true, message: "Outing data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getOuting,
};