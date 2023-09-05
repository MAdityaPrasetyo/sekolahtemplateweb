$(document).ready(function() {
    $('.navbar-toggler').click(function() {
      if ($('.navbar').hasClass('expanded')) {
        $('.navbar').removeClass('expanded');
      } else {
        $('.navbar').addClass('expanded');
      }
    });
  
    $(window).scroll(function() {
      if ($('.navbar-collapse').hasClass('show')) {
        $('.navbar-collapse').removeClass('show');
        $('.navbar').removeClass('expanded');
      }
    });
  });

  $(document).ready(function() {
    $('.navbar .nav-item.dropdown').hover(
      function() {
        $(this).find('.dropdown-menu').stop(true, true).slideDown('fast');
      },
      function() {
        $(this).find('.dropdown-menu').stop(true, true).slideUp('fast');
      }
    );
  });

// Mengubah interval pergantian slide menjadi 8 detik (8000 milidetik)




  