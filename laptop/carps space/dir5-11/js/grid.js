$(document).ready(function () {
    // $('.container').children().click(function() {
    //   var background = '#'+Math.floor(Math.random()*16777215).toString(16);
    //   $(this).css('background-color', background);
    //   $(this).find('h2').text(background);
    // });
    // $(window).resize(function () {
    //     $('div:not(.container)').each(function () {
    //         var background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    //         $(this).css('background-color', background);
    //         $(this).find('h1:nth-child(2)').text(background);
    //     });
    // });

    $(window).mousemove(function () {
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        $('footer .fab').css('color', color);
        $('footer .circle').css('background-color', color);
    });

});
//# sourceMappingURL=carp.js.map