$(document).ready(function() {

    $('#filter-btn').hide();

    $('form').on('submit', function(event) {
        event.preventDefault();
        $('#results').empty();
        var keyword = $('input').val();
        searchMovie(keyword);
        $('input').val('');
    });

    function searchMovie (keyword) {
        var url = 'https://www.omdbapi.com/?s=' + keyword;
        $.get(url).done(function(res) {
            res.Search.forEach(function(obj) {
                // $('#results').append('<img src="' + obj.Poster + '">');
                $('#results').append('<li>' + obj.Title + '&nbsp;-&nbsp;' + obj.Year + '</li>');
                $('#filter-btn').show();
            });
            console.log(res);
        });
    };

    // on button click....
        // get all movies from the dom
        // isolate the year
        // logic to find if year >= 2000
        // add those movies back to the dom

    $('#filter-btn').on('click', function() {
        var domElementArray = $('li').val('');
        $('#results').empty();
        for (var i = 0; i < domElementArray.length; i++) {
            var innerText = domElementArray[i].innerText;
            var year = innerText.substr(innerText.length - 4);
            if (parseInt(year) >= 2000) {
                $('#results').append('<li>' + innerText + '</li>');
            };
        };

    });


});



