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


function initMyApp(){
    try {
        throwUIError();
    } catch(e) {
        Raven.captureException(e)
    }

    var error_cards = document.getElementsByClassName("card");
    try {
        error_cards[0].addEventListener('click', function (event) {
            throwCardError();
        });
        error_cards[1].addEventListener('click', function (event) {
            throwCardError();
        });
        error_cards[2].addEventListener('click', function (event) {
            throwCardError();
        });
        error_cards[3].addEventListener('click', function (event) {
            throwCardError();
        });
    } catch(e) {
        Raven.captureException(e)
    }
    
    console.log("fin");
}

