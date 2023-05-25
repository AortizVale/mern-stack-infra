const mongoose = require('mongoose');

const URI = process.env.URI || 'mongodb+srv://mabel:david@clusteroptica.e6pz8i0.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;