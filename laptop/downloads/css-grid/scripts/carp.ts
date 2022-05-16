$(document).ready(function() {
  // $('.container').children().click(function() {
  //   var background = '#'+Math.floor(Math.random()*16777215).toString(16);
  //   $(this).css('background-color', background);
  //   $(this).find('h2').text(background);
  // });
  $(window).resize(function() {
    if ($(window).width() == 769 || $(window).width() == 993 || $(window).width() == 1201 || $(window).width() == 1501 || $(window).width() == 1801) {
      $('div:not(.container)').each(function() {
        var background = '#'+Math.floor(Math.random()*16777215).toString(16);
        $(this).css('background-color', background);
        $(this).find('h1:nth-child(2)').text(background);
      }); 
    } 
  });
});