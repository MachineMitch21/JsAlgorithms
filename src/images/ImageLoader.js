
import { ImageEditor, GreyScaleMode } from './ImageEditor';

const ImageLoader = function() {

	this.getBase64FromImageUrl = function(url) {
		return new Promise(function(resolve, reject) {
			var img = new Image();

			let imgEditor = new ImageEditor();

			img.setAttribute("crossOrigin", "anonymous");

			img.onload = function() {
				var canvas = document.createElement("canvas");
				canvas.width = this.width;
				canvas.height = this.height;

				var ctx = canvas.getContext("2d");
				ctx.drawImage(this, 0, 0);

				document.body.appendChild(canvas);

				let imgData = ctx.getImageData(
					0,
					0,
					canvas.width,
					canvas.height
				);

				imgEditor.convertToGreyScale(imgData, GreyScaleMode.Luma);

				ctx.putImageData(
					imgData,
					0,
					0
				);

				resolve(ctx.getImageData(0, 0, canvas.width, canvas.height));
			};

			img.onerror = function() {
				reject("Could not load the image url provided");
			}

			img.src = url;
		});
	}
}

export default ImageLoader;