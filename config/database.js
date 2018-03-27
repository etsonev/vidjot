if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://emil:emil@ds123799.mlab.com:23799/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}
