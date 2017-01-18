var expect = require('expect.js');
var fileTranslater = require('../routes/fileTranslater.js');

describe('Testing translater', function() {
	it('Testing file translater', function(done) {
		fileTranslater.translate(__dirname +'/data.json', "en", function(err, data) {
			if(err)
				done(err)

			expect(data).to.be.an('array')
			expect(data.length).to.be(2)
			expect(data).to.eql(["hello", "beer"])
			done();
		})
	})
})