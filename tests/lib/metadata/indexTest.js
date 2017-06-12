'use strict';

const expect = require('chai').expect;
const metadataModule = require('../../../lib/metadata');
const utils = require('../../../lib/utils');

describe('metadata', function() {
	it('should be a function', function() {
		expect(metadataModule).to.be.a('function');
	});

	var metadata = metadataModule(utils);

	var keys = [
		'export',
		'import'
	];

	it('should return an object with keys', function() {
		expect(metadata).to.be.an('object').that.has.keys(keys);
	});

	describe('#export', function() {
		it('should be a function', function() {
			expect(metadata.export).to.be.a('function');
		});
	});
	
	describe('#import', function() {
		it('should be a function', function() {
			expect(metadata.import).to.be.a('function');
		});
	});
});