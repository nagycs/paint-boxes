$bgcolor = "white";

function createTable(selector){
	var $table = $(selector);
	var i,j;
	var $sorok = $('<table>');
	//$table.addClass('cells');

	for(i = 0; i<8; i++){
		var $tr = $('<tr id="'+i+'">');
		for(j = 0; j<8; j++){
			$tr.append(
				$('<td id="'+i+''+j+'" class="white">').click(
					function(event){
						$(this).toggleClass($bgcolor);
					}
				)
			);
		}
		$sorok.append($tr);
	}
	$table.append($sorok);
}

function createControls(selector){
	var $controls = $(selector);
	$red = $('<div class="red"></div>').click(
			function(event){
				//localStorage.setItem("color","red");
				$bgcolor = "red";
			}
		);
	$green = $('<div class="green"></div>').click(
			function(event){
				//localStorage.setItem("color","green");
				$bgcolor = "green";
			}
		);
	$blue = $('<div class="blue"></div>').click(
			function(event){
				//localStorage.setItem("color","blue");
				$bgcolor = "blue";
			}
		);
	
	$controls.append($red);
	$controls.append($green);
	$controls.append($blue);
}

function save(){
	var tds = $('#table tr td');
	alert("Your picture has been saved! :)");
	var pixels = [];
	for(var i in tds){
		var pixel = {};
		pixel.id = tds[i].id;
		pixel.color = tds[i].className;
		pixels.push(pixel);
	}
	localStorage.setItem("picture",JSON.stringify(pixels));
}

function load(){
	var pixels = JSON.parse(localStorage.getItem("picture"));
	for(var i in pixels){
		$('#'+pixels[i].id).attr('class',pixels[i].color);
	}
}

function createSaveLoad(selector){
	var $saveload = $(selector);
	$save = $('<button id="save">save</button>').click(
			function(){
				save();
			}
		);
	$load = $('<button id="load">load</button>').click(
			function(){
				load();
			}
		);
	$saveload.append($save);
	$saveload.append($load);
}


window.onload = function(){
	createTable("#table");
	createControls("#controls");
	createSaveLoad("#saveload");
}