function pythagorean() {
		let a = document.getElementsByName('A')[0].value;
		let b = document.getElementsByName('B')[0].value;
		let c = document.getElementsByName('C')[0].value;

		console.log(a)
		console.log(b)
		console.log(c)

		let xhttp = new XMLHttpRequest();

		let path = "geometry2.php/pyth";

		let data = new FormData();

		data.append("a", a);

		console.log(data);
		
		xhttp.open("POST", path, true);
		
		xhttp.send(a);
		xhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	            console.log(this.responseText);
	       }
	    };
	}