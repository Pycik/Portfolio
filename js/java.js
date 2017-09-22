$(document).ready(function (){

	$(".top_block .logo").hover(function(){
		$(".top_block .nav_menu .myname").toggle();		
	});

	$(".top_block .circle-transparent").hover(function(){
		$(".top_block .nav_menu .clickMe").toggle();
		$(".top_block .nav_menu .myname").toggle();
		$(".top_block .myjobs").toggle();	
		
	});	

	$(".top_block .menu-item2").hover(function(){
		$(".top_block .nav_menu .myname").toggle();		
		$(".top_block .books").toggle();	

	});

	$(".top_block .menu-item3").hover(function(){
		$(".top_block .nav_menu .myname").toggle();		
		$(".top_block .writeme").toggle();	

	});

});


$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;


  $('.circle-transparent').on('click', function() {
  	var circleMenu = $(".menu-circle");
  
  if (!active1) $(circleMenu).find('.menu-item1').css({
    
    'border': '4px solid  #D9EF34',  
    'transform': 'translate(0px,125px)'
  });
  else $(circleMenu).find('.menu-item1').css({  
    'transform': 'none'
  }); 
  
  if (!active2) $(circleMenu).find('.menu-item2').css({
    
    'border': '3px solid  #D9EF34', 
    'transform': 'translate(80px,90px)'
  });
  else $(circleMenu).find('.menu-item2').css({    
    'transform': 'none'
  });

  if (!active3) $(circleMenu).find('.menu-item3').css({
   
    'border': '2px solid  #D9EF34',
    'transform': 'translate(125px,25px)'
  });
  else $(circleMenu).find('.menu-item3').css({    
    'transform': 'none'
  });

  active1 = !active1;
  active2 = !active2;
  active3 = !active3;
  
    
  });
});