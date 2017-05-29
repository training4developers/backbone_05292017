'use strict';

// console.dir($('ul'));

// $('li#fav-color.iraq.usa').addClass('selected');

// // console.dir(document.querySelectorAll('li'));

// var domObject = $('ul')[0];

// register the click event handler for the button

document.querySelector('[data-add-color-action]').addEventListener('click', function() {

$('[data-add-color-action]').on('click', function() {

    // select element
    var newColorInput = $('#new-color-input');

    // retrieving the color from the input
    var newColor = newColorInput.val();

    // creating and populate the new list item
    var newListItem = $('<li>');
    newListItem.text(newColor);

    // $('ul').append($('<li>').text(newColorInput.val()));

    // appending the new list item to the list
    $('ul').append(newListItem);

    // do this cause Dave would do it...
    newColorInput.val('');
});

