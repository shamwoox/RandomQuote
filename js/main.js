$(document).ready(function() {

  var quote;
  var author;

  //function used to generate new quotes
  function getNewQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        format: 'jsonp',
        lang: 'en'
      },
      //if success, save quote and author data into variable and print
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;

        $('.message').text(quote + " - " + author);

      }
    });
  }
  getNewQuote();
  //generate new quote when button is clicked
  $('#get-message').on('click', function(event) {
    event.preventDefault();
    getNewQuote();
  })
});
