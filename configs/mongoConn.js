var mongoose = require('mongoose');

var options = {
    useNewUrlParser: true
};

module.exports = function() {
    return mongoose.connect('mongodb://bp.creator:bhavesh12@ds119129.mlab.com:19129/node-example-app', options);
};

