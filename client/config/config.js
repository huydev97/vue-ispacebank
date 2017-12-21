const env = process.env.NODE_ENV
const config = {
    "development": {
        host: 'http://192.168.2.110:1337',
        port: 3000
    },
    "production": {
        host: 'http://104.199.229.91:1337',
        port: 80
    }
}

module.exports = config[env]