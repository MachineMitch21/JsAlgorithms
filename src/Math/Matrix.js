
const Matrix = function(rows, cols, elements) {
	this._elements = (elements !== undefined ? elements.map((el) => el) : new Array(rows * cols));
	this._rows = rows;
	this._cols = cols;

	this.getNumRows = () => this._rows;
	this.getNumCols = () => this._cols;

	this.set = (i, j, val) => { this._elements[i * this._cols + j] = val }
	this.get = (i, j) => this._elements[i * this._cols + j];

	this.getData = () => this._elements.map((el) => el);

	this.transpose = function() {
		let temp = new Matrix(this.getNumRows(), this.getNumCols());
		for (let i = 0; i < this.getNumRows(); i++) {
			for (let j = 0; j < this.getNumCols(); j++) {
				temp.set(i, j, this.get(j, i));
			}
		}
		return temp;
	}

	this.determinant = function() {
		let temp = new Matrix(this.getNumRows(), this.getNumCols());
		return temp;
	}

	this.add = function(other) {
		let temp = new Matrix(this.getNumRows(), other.getNumCols());
		for (let i = 0; i < this.getNumRows(); i++) {
			for (let j = 0; j < other.getNumCols(); j++) {
				temp.set(i, j, this.get(i, j) + other.get(i, j));
			}
		}
		return temp;
	}

	this.sub = function(other) {
		let temp = new Matrix(this.getNumRows(), other.getNumCols());
		for (let i = 0; i < this.getNumRows(); i++) {
			for (let j = 0; j < other.getNumCols(); j++) {
				temp.set(i, j, this.get(i, j) + other.get(i, j));
			}
		}
		return temp;
	}

	this.mult = function(other) {
		let temp = new Matrix(this.getNumRows(), other.getNumCols());
		for (let i = 0; i < this.getNumRows(); i++) {
			for (let j = 0; j < other.getNumCols(); j++) {
				let sum = 0;
				for (let k = 0; k < other.getNumCols(); k++) {
					sum += this.get(i, k) * other.get(k, j);
				}
				temp.set(i, j, sum);
			}
		}
		return temp;
	}
}

Matrix.identity = function(rows, cols) {
	let temp = new Matrix(rows, cols);
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			temp.set(i, j, (i + 1) / (j + 1) === 1 ? 1 : 0);
		}
	}
	return temp;
};

Matrix.isIdentity = function(matrix) {
	for (let i = 0; i < matrix.getNumRows(); i++) {
		for (let j = 0; j < matrix.getNumCols(); j++) {
			if ((i + 1) / (j + 1) === 1 && matrix.get(i, j) !== 1) {
				return false;
			} 
		}
	}
	return true;
}

Matrix.isEqual = function(m1, m2) {
	if (m1._rows !== m2._rows || m1._cols !== m2._cols || m1._elements.length !== m2._elements.length) return false;

	for (let i = 0; i < m1._rows; i++) {
		for (let j = 0; j < m1._cols; j++) {
			if (m1.get(i, j) !== m2.get(i, j)) {
				return false;
			}
		}
	}

	return true;
}

export default Matrix;