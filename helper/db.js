const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:movie1234@ds141720.mlab.com:41720/movie-api');
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected')
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};