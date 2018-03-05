import { expect } from 'chai';

describe('object A', () => {
    describe('function A', () => {
        let a = 5;

        beforeEach(() => {
            a = 6;
        });

        it('should do something', () => {
            expect(a).to.equal(6);
        });
    })
});