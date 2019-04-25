
import Matrix from '../Math/Matrix';

let m = new Matrix(3, 3, [
	1, 2, 0, 
	0, 1, 0,
	0, 0, 1
]);

let n = new Matrix(3, 3, [
	4, 0, 2,
	5, 2, 1,
	4, 1, 2
]);

let o = m.mult(n);
console.log(o.transpose());
console.log(Matrix.identity(8, 8));

export const GreyScaleMode = Object.freeze({
	Mean: 0,
	Max: 2,
	Min: 4,
	Median: 8,
	Luma: 16
});

export const ImageEditor = function() {

	// median grey scale func
	function getMedianPixelVal(r, g, b) {
		let sortedPixel = [r, g, b];
		sortedPixel.sort();
		return sortedPixel[1];
	}

	function lumaGreyScale(r, g, b) {
		return (
			r * 0.2126 +
			g * 0.7152 +
			b * 0.0722
		);
	}

	const greyScaleFuncs = new Map([
		[undefined, 			(r, g, b) => (r + g + b) / 3],
		[GreyScaleMode.Mean, 	(r, g, b) => (r + g + b) / 3],
		[GreyScaleMode.Max, 	(r, g, b) => Math.max(r, g, b)],
		[GreyScaleMode.Min, 	(r, g, b) => Math.min(r, g, b)],
		[GreyScaleMode.Median, 	(r, g, b) => getMedianPixelVal(r, g, b)],
		[GreyScaleMode.Luma, 	(r, g, b) => lumaGreyScale(r, g, b)]
	]);

	this.convertToGreyScale = function(imgData, mode) {
		for (let i = 0; i < imgData.data.length; i += 4) {
			let r, g, b;
			r = imgData.data[i];
			g = imgData.data[i + 1];
			b = imgData.data[i + 2];

			let gsFunc = greyScaleFuncs.get(mode);

			let gsVal = gsFunc(r, g, b);

			imgData.data[i] = gsVal;
			imgData.data[i + 1] = gsVal;
			imgData.data[i + 2] = gsVal;
		}
	}

	this.invertColors = function(imgData) {
		for (let i = 0; i < imgData.data.length; i += 4) {
			imgData.data[i] = 255 - imgData.data[i];
			imgData.data[i + 1] = 255 - imgData.data[i + 1];
			imgData.data[i + 2] = 255 - imgData.data[i + 2];
			imgData.data[i + 3] = 255;
		}
	}
};