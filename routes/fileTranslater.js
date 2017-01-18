var fs = require('fs');
var simpleTranslater = require('./simpleTranslater.js');

exports.translate = function(fileName, lang, callback) {
	fs.readFile(fileName, function(err, data) {
		if(err) {
			throw err;
		}

		var translated = [];
		try{
			data = JSON.parse( data.toString() );

			for(var i = 0; i < data.length; i++) {
				translated.push(simpleTranslater.translate(data[i], "en"));
			}

			callback(null, translated);
		}
		catch(error) {
			callback(true);
		}

	})
}