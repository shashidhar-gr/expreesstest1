var express = require('express');
var router = express.Router();

var mapping = {
	'hello': {
		'en': 'hello',
		'es': 'hola'
	},
	'beer': {
		'en': 'beer',
		'es': 'cervesa'
	}
}

exports.translate = function translate(phrase, lang) {
	var phraseMap = mapping[phrase]

	if(!phraseMap) {
		return phrase;
	}

	return phraseMap[lang]
}

