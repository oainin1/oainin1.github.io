var video = document.getElementById('pv'), canvas = document
				.getElementById('pca'), img = document.getElementById('pim'), videourl = window.URL
				|| window.webkitURL, index;

		//媒体对象
		navigator.getMedia = navigator.getUserMedia
				|| navagator.webkitGetUserMedia || navigator.mozGetUserMedia
				|| navigator.msGetUserMedia;
		navigator.getMedia({
			video : true,
			audio : false
		}, function(strem) {
			
			video.src = videourl.createObjectURL(strem);
		}, function(error) {
			console.log(error);
		});