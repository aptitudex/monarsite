var html = '<h3> contents </h3>';

var section1 = ['kuma', 'arrl_jarl', '17_now']
for (i = 0; i<section1.length; i++){
	html += '<div class="navlink"><a href="' + section1[i] + '.png">' + section1[i] + '</a></div>'
}


document.getElementById("sidebar").innerHTML = html;
			