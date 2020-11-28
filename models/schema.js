const mongoose = require('mongoose');

const schema = mongoose.Schema;

const movieDetails = new schema({name:String},
   {collection:'movie'}
);

module.exports = MovieItem = mongoose.model('details',movieDetails);