var expect = require('expect.js');
var simpleTranslater = require('../routes/simpleTranslater.js');

describe('Testing translater.', function() {
	it('Testing simple translate function', function() {
		expect(simpleTranslater.translate("hello", "es")).to.be("hola");
	})
})