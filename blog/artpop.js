var html = '<h3> contents </h3>';

var section1 = ['7_3_2020', '7_5_2020', '8_25_2020']
for (i = 0; i<section1.length; i++){
	html += '<div class="navlink"><a href="' + section1[i] + '.html">' + section1[i] + '</a></div>'
}


document.getElementById("sidebar").innerHTML = html;
			