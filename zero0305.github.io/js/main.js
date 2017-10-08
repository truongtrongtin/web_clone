$(document).ready(function() {
	changeButton();
	offCanvas();
	shrinkMenu();
	toTop();
	toggleImage();
	currentSection();
	anchorScrolling();
});	

function changeButton() {
	$('.menu-btn').on('click touch', function() {
		$('.bar1, .bar2, .bar3').toggleClass('change');
	});
};

// Toggle menu
function offCanvas() {
	$('.menu-btn').on('click touch', function() {
		$('.menu').toggleClass('active');
		$('.menu a').on('click', function() {
			$('.menu').removeClass('active'); //Remove side menu when click link
			$('.bar1, .bar2, .bar3').removeClass('change'); //Change button back when click link
		});
	});
};


// Shrink menu on scrolling down
function shrinkMenu() {
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 50) {
			$('.header').addClass('shrink');
		} else {
			$('.header').removeClass('shrink');
		};
	});
};


// Back to top
function toTop() {
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 100) {
			$('.backtotop-btn').fadeIn();
		} else {
			$('.backtotop-btn').fadeOut();
		}
	});

	$('.backtotop-btn').on('click', function() {
		$('html, body').animate({scrollTop: 0}, 800);
	});
};


// Show image when click
function toggleImage() {
	$('.portfolio-item').on('click touch', function() {
		var el = $(this),
			get_image = el.attr('data-image'),
			get_content = el.attr('data-description');

		console.log(get_image, get_content);
		$('.image-popup').attr('src', get_image);
		$('.description-popup').text(get_content);
		$('.popup, body').addClass('popup-open');
		$('.popup').scrollTop(0); //Always show image page from top
	});

	$('.close-btn, .close-bottom-btn').on('click touch', function() {
		$('.popup, body').removeClass('popup-open');
	});
};

//Highlight link on current section
function currentSection() {
	$(window).on('scroll', function() {
		$('.menu a').each(function() {
			var el = $(this),
				get_anchor = el.attr('href'),
				section_position = $(get_anchor).offset().top - 54,
				current_position = $(window).scrollTop(),
				section_height = $(get_anchor).outerHeight();

			if (current_position >= section_position && current_position < section_position + section_height) {
				$('.menu a').removeClass('highlight'); //Remove all links' highlight
				el.addClass('highlight'); //Highlight this link
			} else {
				el.removeClass('highlight');
			};
		});
	});
};


// Click links to scroll to sections
function anchorScrolling() {
	$('.menu a').on('click touch', function(event) {
		event.preventDefault();
		var el = $(this),
			get_anchor = el.attr('href'),
			new_scroll_position = $(get_anchor).offset().top - 54;

		$('html, body').stop().animate({scrollTop: new_scroll_position}, 800);
	});
};