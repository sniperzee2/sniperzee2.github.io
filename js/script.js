$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

  // const options = {
  //   bottom: '64px', // default: '32px'
  //   left: 'unset', // default: '32px'
  //   right: '32px', // default: 'unset'
  //   time: '0.5s', // default: '0.3s'
  //   mixColor: '#fff', // default: '#fff'
  //   backgroundColor: '#fff',  // default: '#fff'
  //   buttonColorDark: '#100f2c',  // default: '#100f2c'
  //   buttonColorLight: '#fff', // default: '#fff'
  //   saveInCookies: false, // default: true,
  //   label: '🌓', // default: ''
  //   autoMatchOsTheme: true // default: true
  // }
  
  // const darkmode = new Darkmode(options);
  // darkmode.showWidget();

  var _CONTENT = [ 
    "Hey! I'm Shivansh Joshi.", 
    "I am a Web Developer.", 
    "I am a Competitive Coder.", 
  
  ];
  
  // Current sentence being processed
  var _PART = 0;
  
  // Character number of the current sentence being processed 
  var _PART_INDEX = 0;
  
  // Holds the handle returned from setInterval
  var _INTERVAL_VAL;
  
  // Element that holds the text
  var _ELEMENT = document.querySelector("#text");
  
  // Cursor element 
  var _CURSOR = document.querySelector("#cursor");
  
  // Implements typing effect
  function Type() { 
    // Get substring with 1 characater added
    var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;
  
    // If full sentence has been displayed then start to delete the sentence after some time
    if(text === _CONTENT[_PART]) {
      // Hide the cursor
      _CURSOR.style.display = 'none';
  
      clearInterval(_INTERVAL_VAL);
      setTimeout(function() {
        _INTERVAL_VAL = setInterval(Delete, 50);
      }, 1000);
    }
  }
  
  // Implements deleting effect
  function Delete() {
    // Get substring with 1 characater deleted
    var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;
  
    // If sentence has been deleted then start to display the next sentence
    if(text === '') {
      clearInterval(_INTERVAL_VAL);
  
      // If current sentence was last then display the first one, else move to the next
      if(_PART == (_CONTENT.length - 1))
        _PART = 0;
      else
        _PART++;
      
      _PART_INDEX = 0;
  
      // Start to display the next sentence after some time
      setTimeout(function() {
        _CURSOR.style.display = 'inline-block';
        _INTERVAL_VAL = setInterval(Type, 100);
      }, 200);
    }
  }
  
  // Start the typing effect on load
  _INTERVAL_VAL = setInterval(Type, 100);



  