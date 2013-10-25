var headerHeight;
headerHeight = 220;

$(window).scroll(function() {
  var scTop;//get the scroll pos
  if(window.pageYOffset>headerHeight){
  	$('#navPrinc').css('top','0px');
  	$('#menuIco').css('display','block');
  }else{
  	scTop = headerHeight-window.pageYOffset;
  	$('#navPrinc').css('top',scTop);
  	$('#menuIco').css('display','none');
  }
  
  
  
});


function checkWindowSize() {

    if ( $(window).width() < 940){
    	if($(window).width() > 800) {
    	    $('.container').addClass('huit');
    	   
    	    $('#navPrinc').removeClass('navN');
    	    $('#navPrinc').addClass('navS');
    	}else {
    			$('.container').removeClass('huit');
    	    $('.container').addClass('six');
    	    
    	    $('#navPrinc').removeClass('navN');
    	    $('#navPrinc').addClass('navS');
    	}
    }else {
    		$('.container').removeClass('huit');
        $('.container').removeClass('six');
        
        $('#navPrinc').removeClass('navS');
    	  $('#navPrinc').addClass('navN');
    }
}

$(window).load(checkWindowSize);
$(window).resize(checkWindowSize);



function scrollToAnchor(aid){
    var aTag = $("#"+aid);
    $('html,body').animate({scrollTop: aTag.offset().top-75},'slow');
}

