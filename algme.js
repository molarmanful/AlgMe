(function(){
  //get jQuery
  var jq = document.createElement('script');
  jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js";
  document.head.appendChild(jq);
  
  //preliminary functions
  function getSelectionText() {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
    }
    return text;
  }

  //get cube visualizer script
  $.getScript('http://molarmanful.github.io/gCube/gcube.js').done(function(){
    $('body').children().select(function(){
      var alg = getSelectionText();
      if(alg != ''){
        if($('#gcubeviz').length){
          $('#gcubeviz').setalg(alg);
        } else {
          $('body').append('<g-cube id="gcubeviz"><g-algorithm>' + alg + '</g-algorithm></g-cube>');
          $('#gcubeviz').css({
              'position': 'fixed',
              'height': '10%',
              'width': '10%',
              'top': '5%',
              'right': '5%',
              'background-color': '#ffffff',
              'z-index': '1000'
          });
        }
      }
    });
  });
})();
