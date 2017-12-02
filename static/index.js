var ERROR_COUNT = 0
var ERROR_NUM =  document.getElementsByClassName("bug-num")[0];
//Sentry
Raven.config('https://b2a850da2e9c4ec0af5ea60c4faecbe4@sentry.io/253513').install()
Raven.context(function () {
    initMyApp();
});

function throwUIError() {
    throw "I'm a UI Error! ^.^ ";
  }

  function throwCardError(){
      throw "CARD ERROR :P";
  }

function update_error_count(){
    ERROR_COUNT += 1;
    ERROR_NUM.innerHTML = ERROR_COUNT;
}
function initMyApp(){
    var error_cards = document.getElementsByClassName("error-btn");
    try {
        error_cards[0].addEventListener('click', function (event) {
            update_error_count();
            console.log(ERROR_COUNT);
            throwUIError();
        });
    } catch(e) {
        Raven.captureException(e);
    }
}

