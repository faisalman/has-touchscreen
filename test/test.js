const { hasTouchscreen } = require('../dist/cjs');
const assert = require('assert');

describe('hasTouchscreen()', () => {
    describe('Check for matchMedia', () => {

        it('Returns `true` if matches (any-pointer:coarse)', () => {
            globalThis.window = {
                matchMedia : () => { return { matches : true }}
            };
            assert.equal(hasTouchscreen(), true);
        });
        
        it('Returns `false` otherwise', () => {
            globalThis.window = undefined;
            assert.equal(hasTouchscreen(), false);
        });
    });
});