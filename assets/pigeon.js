// http://youmightnotneedjquery.com/
// http://callbackhell.com/


now(function(){
  // as soon as possible, do this!
  getJSON("https://explorer.pigeoncoin.org/ext/summary", function(result){

    var stats = {},
        data = result.data[0];

        stats.difficulty = Number(data.difficulty.toPrecision(3)),
        stats.supply = Number((data.supply / 1e6).toPrecision(2)) + "M PGN",
        stats.hashrate = Math.round(Number(data.hashrate).toPrecision(2)) + " GH",
        stats.lastPrice = Number((data.lastPrice * 1e8).toPrecision(2)) + " sats",
        stats.blockcount = Number(data.blockcount).toLocaleString(),
        stats.nextblock = Number((2016-data.blockcount%2016)) + " blocks",
        stats.marketcap = Number((data.supply * data.lastPrice).toPrecision(2)) + " BTC";

      console.log(`stats: ${JSON.stringify(stats)}`)

    updateElements(stats);
  });

  getJSON("https://api.crypto-bridge.org/api/v1/ticker",function(result){
    for(i in result){
      if(result[i].id == "PGN_BTC"){
        var stats = {};
        //stats.volume = "thing";

        stats.volume = Number(Number(result[i].volume).toPrecision(2)) + " BTC";

        updateElements(stats);
      }
    }


  });

});


ready(function(){
  // when the DOM is ready, do this
  hamburgerHelper();
  menuHelper();

});



////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

function menuHelper(){
  // Bulma is really fast and simple
  // its menu needs help.
  // I am the menu helper

  var els = document.querySelectorAll('.menu-list a');

  Array.from(els).forEach(link => {
      link.addEventListener('click', function(event) {
        // remove class "is-active" from all ".menu-list a"
        var el = document.querySelector(".menu-list .is-active");

        if (el.classList)
          el.classList.remove("is-active");
        else
          el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');


        // add class "is-active" to this element
        var el = event.target;

        if (el.classList)
          el.classList.add("is-active");
        else
          el.className += ' ' + "is-active";


        // add class "is-hidden-desktop" to all '#content-holder div'

        var els = document.querySelectorAll('#content-holder .notification');

        Array.from(els).forEach(el => {

            if (el.classList)
              el.classList.add("is-hidden-desktop");
            else
              el.className += ' ' + "is-hidden-desktop";
          });


        // get element text, make lowercase, replace space with "-"

        var el = event.target;
        var text = el.innerText.toLowerCase().replace(" ","-").replace("\n","");


        // remove class "is-hidden-desktop" to all '#content-holder link-text'

        var el = document.querySelector("#" + text);

        if (el.classList)
          el.classList.remove("is-hidden-desktop");
        else
          el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

      });
  });
}

function hamburgerHelper(){
  // Bulma is really fast and simple
  // its hamburger needs help.
  // I am the hamburger helper

    document.querySelector('.navbar-burger').addEventListener("click", toggleNav);

    function toggleNav() {
            var nav = document.querySelector('.navbar-menu');

            if(nav.className == "navbar-menu") {
                nav.className = "navbar-menu is-active";
            } else {
                nav.className = "navbar-menu";
            }
    }
}



////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

function updateElements(object){
  // pass me an object with
  // keys: ids to update
  // values: values to update
  // and I will update everything on the page!

    var keys = Object.keys(object),
        values = Object.values(object)

    for(i in keys){
      try{document.querySelector('#'+ keys[i]).innerHTML = values[i];}
      catch(error){
        console.log(`error! key: "${keys[i]}", value: "${values[i]}" \n ${error}`)
      }
    }
}



function getJSON(URL,callback){
  // I pick up JSON
  // and put him down

  var request = new XMLHttpRequest();
  request.open('GET', URL, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      return callback(JSON.parse(request.responseText));
    } else {
      return null;
    }
  };

  request.onerror = function() {
    return null;
  };

  request.send();
}



////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

function now(callback){
  callback();
};


function ready(callback) {

  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}
