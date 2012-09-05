$(document).ready(function(){
	PelicanExt = {
		init: function(){
			document.querySelector('button.add').addEventListener('click', function(){
				document.body.appendChild(document.createTextNode('It works!'));
				localStorage.setItem("testtest", "12341234");
			});
			return this;
		},
		add: function(){
			// $.ajax({
			//     url: 'http://127.0.0.1:3000/add',
			//     type: 'POST',
			//     data: {
			//         url: "http://www.youtube.com/watch?v=VfwQhuvFcKg"
			//     },
			//     success: function() {
			//     	alert("ok");
			//     }
			// });
		}	
	};

	window.pelicanExt = Object.create(PelicanExt).init();

});