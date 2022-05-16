$(document).ready(function() {
    $('#underline').click(function() {
        $('#underline').is(':checked') ? $('header').css('text-decoration', 'underline') : $('header').css('text-decoration', '');
    });
    $('#overline').click(function() {
        $('#overline').is(':checked') ? $('header').css('text-decoration', 'overline') : $('header').css('text-decoration', '');
    });
    $('#linethrough').click(function() {
        $('#linethrough').is(':checked') ? $('header').css('text-decoration', 'line-through') : $('header').css('text-decoration', '');
    });
    $('#lowercase').click(function() {
        $('#lowercase').is(':checked') ? $('header').css('text-transform', 'lowercase') : $('header').css('text-transform', '');
    });
    $('#uppercase').click(function() {
        $('#uppercase').is(':checked') ? $('header').css('text-transform', 'uppercase') : $('header').css('text-transform', '');
    });
    $('#capitalize').click(function() {
        $('#capitalize').is(':checked') ? $('header').css('text-transform', 'capitalize') : $('header').css('text-transform', '');
    });
    $('#normal').click(function() {
        $('#normal').is(':checked') ? $('header').css('font-style', 'normal') : $('header').css('font-style', '');
    });
    $('#italic').click(function() {
        $('#italic').is(':checked') ? $('header').css('font-style', 'italic') : $('header').css('font-style', '');
    });
    $('#oblique').click(function() {
        $('#oblique').is(':checked') ? $('header').css('font-style', 'oblique') : $('header').css('font-style', '');
    });
    $('#lighter').click(function() {
        $('#lighter').is(':checked') ? $('header').css('font-weight', 'lighter') : $('header').css('font-weight', '');
    });
    $('#normal-weight').click(function() {
        $('#normal-weight').is(':checked') ? $('#output').css('font-weight', 'normal') : $('header').css('font-weight', '');
    });
    $('#bold').click(function() {
        $('#bold').is(':checked') ? $('header').css('font-weight', 'bold') : $('header').css('font-weight', '');
    });
    $('#bolder').click(function() {
        $('#bolder').is(':checked') ? $('header').css('font-weight', 'bolder') : $('header').css('font-weight', '');
    });
    $('#shadow').click(function() {
        $('header').css('text-shadow', '5px 5px ' + $('#shadowcolor').val());
    });
    $('#no-shadow').click(function() {
        $('header').css('text-shadow', '');
    });
    $('#color').on('change', function(){
        $('header').css('color',$('#color').val());
    });
    $('#shadowcolor').on('change', function() {
        $('header').css('text-shadow', '5px 5px ' + $('#shadowcolor').val());
    });
    $('#boxcolor').on('change', function() {
        $('header').css('background-color', $('#boxcolor').val());
    });
    $('#bordercolor').on('change', function() {
        $('header').css('border-color', $('#bordercolor').val());
    });
    $('#boxshadowcolor').on('change', function() {
        $('header').css('box-shadow', '10px 10px 5px ' + $('#boxshadowcolor').val());
    });
    $('#face').change(function() {
        $('header').css('font-family', $('#face').val());    
    });
    $('#size').keyup(function() {
        $('header').css('font-size', $('#size').val() + 'px');    
    });
    $('#text').keyup(function() {
        $('header').html($('#text').val());
    });
});