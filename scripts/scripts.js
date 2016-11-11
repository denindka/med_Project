	$(function(){

		$("#menu-icon").on("click", function(){
			$("#nav").slideToggle(100);
			$(this).toggleClass("active");
		});

	});