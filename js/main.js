$(document).ready(function() {
    $(document).on('click', '.hide-nav', function() {
        var nav = $('.nav-list')
        $('.hide-nav').toggleClass('active');
        if (nav.is(':visible')) {
            nav.slideUp();
        } else {
            nav.slideDown();
        }
    })

    $( "#left-persona" ).mouseover(function(){
      $('#sql').addClass('sql')
              .removeClass('sql-r');
    }).mouseout(function(){
      $('#sql').addClass('sql-r')
              .removeClass('sql');
    })

    $( "#left-persona" ).mouseover(function(){
      $('#java').addClass('java')
              .removeClass('java-r');
    }).mouseout(function(){
      $('#java').addClass('java-r')
              .removeClass('java');
    })

    $( "#left-persona" ).mouseover(function(){
      $('#php').addClass('php')
              .removeClass('php-r');
    }).mouseout(function(){
      $('#php').addClass('php-r')
              .removeClass('php');
    })

    $( "#center-persona" ).mouseover(function(){
      $('#weblogo').addClass('weblogo')
              .removeClass('weblogo-r');
    }).mouseout(function(){
      $('#weblogo').addClass('weblogo-r')
              .removeClass('weblogo');
    })

    $( "#center-persona" ).mouseover(function(){
      $('#xlogo').addClass('xlogo')
              .removeClass('xlogo-r');
    }).mouseout(function(){
      $('#xlogo').addClass('xlogo-r')
              .removeClass('xlogo');
    })

    $( "#center-persona" ).mouseover(function(){
      $('#andlogo').addClass('andlogo')
              .removeClass('andlogo-r');
    }).mouseout(function(){
      $('#andlogo').addClass('andlogo-r')
              .removeClass('andlogo');
    })

    $( "#right-persona" ).mouseover(function(){
      $('#ps').addClass('ps')
              .removeClass('ps-r');
    }).mouseout(function(){
      $('#ps').addClass('ps-r')
              .removeClass('ps');
    })

    $( "#right-persona" ).mouseover(function(){
      $('#ai').addClass('ai')
              .removeClass('ai-r');
    }).mouseout(function(){
      $('#ai').addClass('ai-r')
              .removeClass('ai');
    })

    $( "#right-persona" ).mouseover(function(){
      $('#ae').addClass('ae')
              .removeClass('ae-r');
    }).mouseout(function(){
      $('#ae').addClass('ae-r')
              .removeClass('ae');
    })



var waypoint = new Waypoint({
  element: document.getElementsByClassName('box'),
  handler: function(dir) {
    if (dir == 'down'){
      $('.box').addClass('scaleCustomUp').removeClass('scaleCustomDown');
    } else {
      $('.box').removeClass('scaleCustomUp').addClass('scaleCustomDown');
    }
  },
  offset: '80%'
})

var waypoint2 = new Waypoint({
  element: document.getElementsByClassName('box2'),
  handler: function(dir) {
    if (dir == 'down'){
      $('.box2').addClass('scaleCustomUp').removeClass('scaleCustomDown');
    } else {
      $('.box2').removeClass('scaleCustomUp').addClass('scaleCustomDown');
    }
  },
  offset: '80%'
})

var waypoint3 = new Waypoint({
  element: document.getElementsByClassName('box1'),
  handler: function(dir) {
    if (dir == 'down'){
      $('.box1').addClass('boxViseble').removeClass('boxHidden');
    } else {
      $('.box1').removeClass('boxViseble').addClass('boxHidden');
    }
  },
  offset: '95%'
})

  var waypoint4= new Waypoint({
    element: document.getElementsByClassName('box3'),
    handler: function(dir) {
      if (dir == 'down'){
        $('.box3').addClass('boxViseble').removeClass('boxHidden');
      } else {
        $('.box3').removeClass('boxViseble').addClass('boxHidden');
      }
    },
    offset: '95%'
  })
});