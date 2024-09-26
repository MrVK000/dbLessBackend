
const getMobileMenuOption = async (req, client) => {
    try {
        // console.log('l]]]',req);
        // const response = await client.query(`SELECT * FROM address`);
        const response = [
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
        if (response) {
            return { error: false, data: response, message: "Address data read successfully" };
        } else {
            return { error: true, message: "Address data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getMobileMenuOption,
};