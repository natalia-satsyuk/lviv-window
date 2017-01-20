// slide-menu

$(".toggle-button").click(function() {
	$(".nav-list").slideToggle(400);
});



// slider

$(".offer-slider-wrap").slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},

		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$(".windows-slider-wrap").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 780,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$(".stuff-slider-wrap").slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$(".news-slider-wrap").slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

