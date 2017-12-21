const evn = process.env.NODE_ENV

module.exports = {
    getHost() {
        if (evn === 'production') {
            return 'http://localhost:1337'
        } else {
            return 'http://192.168.2.110:1337'
        }
    }
}

