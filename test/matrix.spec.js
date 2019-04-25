import assert from 'assert';
import Matrix from '../src/Math/Matrix';

it('Should return true because Matrix.identity should create an identity matrix', () => {
	let matrix = Matrix.identity(6, 6);
	assert.equal(true, Matrix.isIdentity(matrix));
});

it('Should return true because matrices should be equal', () => {
	let matrix1 = Matrix.identity(3, 3);
	let matrix2 = Matrix.identity(3, 3);
	assert.equal(true, Matrix.isEqual(matrix1, matrix2));
});