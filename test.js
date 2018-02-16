const assert = require('assert')
const thisModule = require('.')

try {
	assert.equal(thisModule.rules.constructor === Object, false)
	console.log('All good here!!')
} catch (e) {
	console.error(e)
}