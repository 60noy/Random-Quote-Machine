$(document).ready(function() {

  
  $("#btnNextQuote").hover(function(){
    $(this).css("color", "#555555");
    }, function(){
    $(this).css("color", "#fff");
});
  var firstColor = getRandomColor();

function generateNewQuote(isFirst) {
    $.ajax({ 
                    type: 'GET', 
                    url: 'http://api.icndb.com/jokes/random', 
                    data: { get_param: 'value' }, 
                    dataType:'json',
                    success: function (data) { 
                                JSON.stringify(data);
                        // $('#quote').html(data.value.joke);
                        // $("#quote").animate({
                        // text : data.value.joke ,                  
                        // },1000);

      //                   $( "#centerBox" ).animate({
      //                   color: "green",
      //                  backgroundColor: "rgb( 20, 20, 20 )"
      // var decodedquote =  decodeURIComponent(data.value.joke);
      if(isFirst === true){
              var color = getRandomColor();
                      $("html body").css("background-color", firstColor);
        // Animation complete.
                         $( "#quote" ).css("color",firstColor);
                         $(".designedButton").css("background-color",firstColor);
                        var quote = '"' +  data.value.joke + '"';

    $('#quote').html(quote);

     
      }

      else{
                      var color = getRandomColor();
                      $( "#quote" ).fadeOut( "slow", function() {
                      $("html body").animate({ backgroundColor: color }, 1000);
                      $(".designedButton").animate({ backgroundColor: color }, 1000);
                         $( "#quote" ).css("color",color);
                        var quote = '"' +  data.value.joke + '"';

    $('#quote').html(quote);
         $( "#quote" ).fadeIn("slow");

      });
      }
      

      // },1000);
                    }
                }); 

                 }
generateNewQuote(true);


  var color;
  var quote;

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  // Handler for .ready() called.
  $("#btnNextQuote").click(function () {
    //
    // $(body).css("background-color","red !important");
    // $(this).css("color", "green !important");

getRandomColor();
  generateNewQuote(false);

  



  // $.getJSON( "http://quotes.stormconsultancy.co.uk/random.json", function( result ) {
  //
  //   var id = result.results[0];
  //   var author = result.results[1];
  //   var quote = result.results[2];
  //   var permalink = result.results[3];
  //   console.log( result);
  //
  //  });


//   $.ajax({
//     url: "http://quotes.stormconsultancy.co.uk/random.json",
//     dataType: 'jsonp',
//     success: function(results){
//         console.log(results);
//     }
// });
//   $.getJSON( "http://quotes.stormconsultancy.co.uk/random.json", function( data ) {
//
//
// });
  // I need to fade out the current text, fade in the generated text and switch them and again again




  });
});
