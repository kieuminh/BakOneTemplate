$(function(){
	//Check back to top button
	toggleBackToTop();

	//Portfolio button animation
	$(".portfolio button").click(function(event) {
		/* Act on the event */
		var data = $(this).attr("data");

		//Remove class active của tất cả các nút (button)
		$(".portfolio button").removeClass("active");
		//Add class active vào nút được click
		$(this).addClass('active');

		if (typeof(data) == "undefined") {
			//show het
			$(".portfolio .row > div").show(500);
		}
		else {
			//Ẩn những cột mà không thuộc giá trị data của nút được click
			$(".portfolio .row > div").not(".portfolio .row > div[data=" + data + "]").hide(500);
			//CHo hiển div tương ứng với nút click
			$(".portfolio .row > div[data=" + data + "]").show(500);
			
		}
	});

	//Back to top 
	$(".back-to-top").click(function(event) {
		/* Act on the event */
		$("html,body").animate({scrollTop: 0}, 500);
	});

	//Tạo hiệu ứng menu
	// alert($(window).scrollTop());
	// 
	$(window).scroll(function(event) {
		/* Act on the event */
		//Code chạy khi scroll chuột (kéo thanh cuộn dọc)
		// console.log($(window).scrollTop());
		console.log($("#portfolio").offset().top);
		if ($(window).scrollTop() >= $("#portfolio").offset().top) {
			//thêm cái class navbar-fixed-top vào cái menu
			$("header nav").addClass('navbar-fixed-top');
			$("#home").addClass('body-dummy-padding-top');
		}
		else {
			$("header nav").removeClass('navbar-fixed-top');
			$("#home").removeClass('body-dummy-padding-top');
		}

		toggleBackToTop();

	});

	//Click trên menu, sẽ target đến id tương ứng
	$('header nav ul li a').on('click',function (e) {
	    e.preventDefault();//ngăn chạn chạy đến vùng có id
	    var target = this.hash;//#portfolio
	    if (target) {
		    var targetObj = $(target);//$("#portfolio");

		    $('html, body').stop().animate({
		        'scrollTop': targetObj.offset().top
		    }, 500, 'swing', function () {
		        window.location.hash = target;
		    });
	    }
	});

});

function toggleBackToTop(){
	if ($(window).scrollTop() == 0) {
			//Ẩn nút back to top
		$(".back-to-top").hide("slow");
	}
	else {
		//Hiện lên back to top
		$(".back-to-top").show("slow");
	}
}