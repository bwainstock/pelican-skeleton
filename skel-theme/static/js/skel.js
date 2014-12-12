var userFeed = new Instafeed({
        get: 'user',
        userId: 361018940,
        accessToken: '361018940.467ede5.ab481cfcaafd4454a1ea333429e3d3c7',
        // template: '<a href="" target="_blank"><img src="" /></a>',
        useHttp: true,
        limit: 30,
        sortBy: 'random',
        resolution: 'thumbnail',
        mock: true,
        links: false,
        custom: {
          images: [],
    	  data: {},
        },
        success: function (data) {
		
	  var insta = data.data;
	  this.options.custom.data = insta;
          for (var i=0, tot=insta.length; i < tot; i++) {
            var created_time = insta[i].created_time;
	    var images = insta[i].images;
	    properties = {'created_time': created_time, 'images': images};
	    this.options.custom.images.push(properties);
            };

	  var images = this.options.custom.images;
	  console.log(images);
	  $('.instagram-img').each(function (index) {
		console.log(images[index]);
	  	$(this).html("<img class='u-max-full-width' src='" + images[index].images.standard_resolution.url + "' />"); 
	    });
        }
    });
    userFeed.run();

$(document).ready(function() {
    var $nav = $('.navbar'),
        $body = $('body'),
        navOffsetTop = $nav.offset().top,
        $document = $(document),
        $window = $(window)

    function init() {
        $window.on('scroll', onScroll)
        $window.on('resize', resize)
        $('a[href^="#"]').on('click', smoothScroll)
    }

    function smoothScroll(e) {
        e.preventDefault();
        $(document).off("scroll");
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-40
        }, 0, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    }

    function resize() {
        $body.removeClass('has-docked-nav')
        navOffsetTop = $nav.offset().top
        onScroll()
    }

    function onScroll() {
        if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
          $body.addClass('has-docked-nav')
        }
        if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
          $body.removeClass('has-docked-nav')
        }
    }

    init();

});


