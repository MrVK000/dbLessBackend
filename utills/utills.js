
const { getClientFromPool } = require('./pgconfig')

const connectClient = async (data, callback) => {
    let Client = null;
    try {
        Client = await getClientFromPool();
    } catch (error) {
        throw error;
    }

    try {
        let result = {};
        result = await callback(data, Client);
        Client.release();
        return result;
    } catch (error) {
        Client.release();
        throw error;
    }
};

const contactsTable = `CREATE TABLE IF NOT EXISTS contact_links (
    id SERIAL PRIMARY KEY,
    link_title VARCHAR(255) NOT NULL,
    link_url VARCHAR(255) DEFAULT ''
);`

module.exports = {
    connectClient,
}


