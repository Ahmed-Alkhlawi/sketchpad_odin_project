
var color_picked = "red";

$(document).ready(function()
{


	// start of spectrum script (color picker) 
$("#color_picker").spectrum({
    color: "#ECC",
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function(color) {
    	        color_picked = color.toHexString();
    	        document.getElementById("myCheck").checked = false;

        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});

// ---- end of spectrum script (color picker)

	createdivs(10, 10);


	$(".inner_div").mouseenter(function()
	{	
		var x = document.getElementById("myCheck").checked;
		if (x) {
		var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$(this).css("background-color", newColor);
		}
		else
		{
			$(this).css("background-color", color_picked);
		}

		});
	

	

});

$('#first').click(function()
{

		$(".inner_div").css( "background-color" ,"");
		
	
	
});
$('#second').click(function()
{

		createdivs(20, 20);

	$(".inner_div").mouseenter(function()
	{	
		var x = document.getElementById("myCheck").checked;
		if (x) {
		var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$(this).css("background-color", newColor);
		}
		else
		{
			$(this).css("background-color", color_picked);
		}

		});
		
	
	
});
$('#third').click(function()
{

		createdivs(30, 30);
			$(".inner_div").mouseenter(function()
	{	
		var x = document.getElementById("myCheck").checked;
		if (x) {
		var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$(this).css("background-color", newColor);
		}
		else
		{
			$(this).css("background-color", color_picked);
		}

		});
		
	
	
});
$('#fourth').click(function()
{

		createdivs(40, 40);

		$(".inner_div").mouseenter(function()
		{	
		var x = document.getElementById("myCheck").checked;
		if (x) {
		var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$(this).css("background-color", newColor);
		}
		else
		{
			$(this).css("background-color", color_picked);
		}

		});
		
	
	
});
$('#fifth').click(function()
{

		createdivs(10, 10);

		$(".inner_div").mouseenter(function()
		{	
		var x = document.getElementById("myCheck").checked;
		if (x) {
		var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$(this).css("background-color", newColor);
		}
		else
		{
			$(this).css("background-color", color_picked);
		}

		});
		
	
	
});

function createdivs(num1, num2)
{
	cleardivs();
	var countx = num1;
	var county = num2;
	var container_width = $( "#container" ).innerWidth();
	var container_height = $( "#container" ).innerHeight();
	var inner_div_width  = container_width  / num1;
	var inner_div_height = container_height / num2;
	console.log(container_width);
	// loop to create all the x and y divs needed
	for (var i = 0; i < [num1 * num2] ; i++) {
		
		$( "#container" ).append( "<div id=\"#"+ i +"\" class='inner_div'></div>" );

	
	}



	//give correct size to those divs
	$(".inner_div").css("width", inner_div_width  );
	$(".inner_div").css("height", inner_div_height );
	
};
function cleardivs()
{
	$(".inner_div").detach();
}



