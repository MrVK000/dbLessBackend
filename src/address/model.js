
const getAddress = async (req, client) => {
    try {
        // console.log('l]]]',req);
        // const response = await client.query(`SELECT * FROM address`);
        const response = [
            {
                "id": 1,
                "title": "Wonderla Kochi",
                "email": "mail.cok@wonderla.com",
                "primary_contact": "048 426 84001",
                "secondary_contact": "+91 75938 53107",
                "third_contact": null
            },
            {
                "id": 2,
                "title": "Wonderla Bengaluru",
                "email": "mail.blr@wonderla.com",
                "primary_contact": "080 372 30333",
                "secondary_contact": "080 350 73966",
                "third_contact": null
            },
            {
                "id": 3,
                "title": "Wonderla Hyderabad",
                "email": "mail.hyd@wonderla.com",
                "primary_contact": "084 146 76333",
                "secondary_contact": "+91 91000 63636",
                "third_contact": null
            },
            {
                "id": 4,
                "title": "Wonderla Bhubaneswar",
                "email": "mail.bhu@wonderla.com",
                "primary_contact": "+91 6755 350 200",
                "secondary_contact": "+91 67466 40300",
                "third_contact": "+91 91248 27114"
            },
            {
                "id": 5,
                "title": "Wonderla Resort, Bengaluru",
                "email": "resort.blr@wonderla.com",
                "primary_contact": "080 350 73993",
                "secondary_contact": "+91 99455 00011",
                "third_contact": null
            }
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
    getAddress,
};