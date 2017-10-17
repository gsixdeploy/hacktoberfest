$(document).ready(function(){
	  // This is a functions that scrolls to #{blah}link
		function goToByScroll(id){
		      // Remove "link" from the ID

		      console.log(id);
		    id = id.replace("link", "");
		      // Scroll
		    $('html,body').animate({
		        scrollTop: $("#"+id).offset().top},
		        'slow');
		}

		$(".scroll").click(function(e) { 
		      // Prevent a page reload when a link is pressed
		    e.preventDefault(); 
		    goToByScroll(this.id);           
		});

		$(".middle button").click(function(e) { 
		      // Prevent a page reload when a link is pressed
		    e.preventDefault(); 
		    goToByScroll($(this).attr('data-link'));           
		});
});