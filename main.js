$( document ).ready(function() {
    let $firstDiv = $('div:first-of-type');
    let $secondDiv = $('div+div');

    // Поиск и замена с поомщью регулярного выражения
    const $beelineText = $firstDiv.html().replace(/\([a-zA-Z^\)]+\)/gm, '<span style="display: none">$&</span>');
    $firstDiv.html($beelineText);

    const $hours = $secondDiv.html().replace(/[0-9^]+/gm, '<span style="color: green">$&</span>');
    $secondDiv.html($hours);

    // Применение стилей и маски для firstDiv
    $firstDiv.css('font-size','10px');
    $firstDiv.mask('+0 (000) 00-00-000');

    //Применение стилей для secondDiv
    $secondDiv.css('border','1px solid pink');
});