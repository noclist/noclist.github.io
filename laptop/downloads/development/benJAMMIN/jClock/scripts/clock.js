$(document).ready(function(){
	$('#Clock').Clock();
});

var vars = {};

$.fn.Clock = function(){
	var colors = ['orange','blue','green'];
	
	var clock;
	
	for(var i=0;i<3;i++)
	{
		clock = $('<div>').attr('class',colors[i]+' clock').html(
			'<div class="display"></div>'+
			
			'<div class="front left"></div>'+
			
			'<div class="rotate left">'+
				'<div class="bg left"></div>'+
			'</div>'+
			
			'<div class="rotate right">'+
				'<div class="bg right"></div>'+
			'</div>'
		);
		
		$(this).append(clock);
		
		clock.rotateLeft = clock.find('.rotate.left');
		clock.rotateRight = clock.find('.rotate.right');
		clock.display = clock.find('.display');
		
		vars[colors[i]] = clock;
	}
	
	setInterval(function(){
	
		var currentTime = new Date();
		var h = currentTime.getHours();
		var m = currentTime.getMinutes();
		var s = currentTime.getSeconds();
		
		animation(vars.green, s, 60);
		animation(vars.blue, m, 60);
		animation(vars.orange, h, 24);
	
	},1000);
}

function animation(clock, current, total)
{
	var angle = (360/total)*(current+1);

	var element;

	if(current==0)
	{
		clock.rotateRight.hide()
		rotateElement(clock.rotateLeft,0);
	}
	
	if(angle<=180)
	{
		element = clock.rotateLeft;
	}
	else
	{
		clock.rotateRight.show();
		clock.rotateLeft.show();
		
		rotateElement(clock.rotateLeft,180);
		
		element = clock.rotateRight;
		angle = angle-180;
	}

	rotateElement(element,angle);
	
	clock.display.html(current<10?'0'+current:current);
}

function rotateElement(element,angle)
{
	var rotate = 'rotate('+angle+'deg)';
	
	if(element.css('MozTransform')!=undefined)
		element.css('MozTransform',rotate);
		
	else if(element.css('WebkitTransform')!=undefined)
		element.css('WebkitTransform',rotate);

	else if(element.css("filter")!=undefined)
	{
		var cos = Math.cos(Math.PI * 2 / 360 * angle);
		var sin = Math.sin(Math.PI * 2 / 360 * angle);
		
		element.css("filter","progid:DXImageTransform.Microsoft.Matrix(M11="+cos+",M12=-"+sin+",M21="+sin+",M22="+cos+",SizingMethod='auto expand',FilterType='nearest neighbor')");

		element.css("left",-Math.floor((element.width()-200)/2));
		element.css("top",-Math.floor((element.height()-200)/2));
	}

}