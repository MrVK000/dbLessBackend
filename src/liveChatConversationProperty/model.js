
const getLiveChatConversationProperty = async (req, client) => {
    try {
        // console.log('l]]]',req);
        // const response = await client.query(`SELECT * FROM livechat`);
        const response = [
            {
                "id": 0,
                "property": "Wonderla Kochi"
            },
            {
                "id": 1,
                "property": "Wonderla Bengaluru"
            },
            {
                "id": 2,
                "property": "Wonderla Hydarbad"
            },
            {
                "id": 3,
                "property": "Wonderla Bhubaneswar"
            },
            {
                "id": 4,
                "property": "Wonderla Resort"
            }
        ];
        if (response) {
            return { error: false, data: response, message: "Live chat conversation property data read successfully" };
        } else {
            return { error: true, message: "Live chat conversation property data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getLiveChatConversationProperty,
};