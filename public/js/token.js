// Define values.
const api_key = 'db8xhmmgngy9'
const api_secret = 'wggurguuukcqxdajyfqamqwcm5z8qc5zjmh7rty3ag33cramkqgsw5467z9f28cp'

// Initialize a Server Client
const serverClient = StreamChat.getInstance( api_key, api_secret);
// Create User Token
const token = (user_id) => {
    serverClient.createToken(user_id)
};

module.exports = {api_key, token };