import UnitTest from '../src/unit-test';
import { expect } from 'chai';

describe('Unit Tests module', () => {
	
	it('Should sum 2 given numbers', () => {
		let a = 1;
		let b = 2;
		const ut = new UnitTest();
		let res = ut.sum(a, b);
		expect(res).to.be.equal(3);
	});

	it('Should multiply 2 given numbers', () => {
		let a = 2;
		let b = 3;

		let res = UnitTest.multiply(a, b);

		expect(res).to.be.equal(6);
	});
});