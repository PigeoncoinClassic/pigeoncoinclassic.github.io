// http://youmightnotneedjquery.com/
// http://callbackhell.com/

var data = {}

now(function(){
  // as soon as possible, do this!
});


ready(function(){
  // when the DOM is ready, do this
  main();
  setInterval(function(){
      main();
  }, 1000*60*2);

  hamburgerHelper();
  menuHelper();
  widgetHelper();


});


////////////////////////////////////////
////////////////////////////////////////
// updateChart


function main(){
  getJSON("https://explorer.pigeoncoin.org:8000", function(result){

    data = result
    var stats = {}

    stats.price = result.price * 1e8 + " sat";
    stats.volume = result.volume.toPrecision(2) + " BTC";
    stats.supply = Number((result.supply / 1e6).toPrecision(2)) + "M PGN";
    stats.hashrate = result.hashrate.toPrecision(2) + " GH";
    stats.difficulty = Number(result.difficulty.toPrecision(2));
    // stats.height =
    stats.marketCap = result.marketCap.toPrecision(2) + " BTC";
    stats.blockTime = result.blockTime.toPrecision(2) + " min";
    stats.retarget = result.retarget + " blocks";

    var array = []
    for(item in data.history.price){
      array.push(data.history.price[item] * 1e8)
    }

    data.history.price = array;

    var array = []
    for(item in data.history.supply){
      array.push(data.history.supply[item] / 1e6)
    }

    data.history.supply = array;

    console.log(`stats: ${JSON.stringify(stats)}`)

    updateElements(stats);

    if(!myChart.data.datasets[0].data.length) updateChart(myChart, result.history.hashrate);
  });
}


function updateChart(chart, array){
  var count = 0
  var labels = []

  var array = array.filter(x => !!x); // filter falsy items

  for(item in array){
    labels.unshift(item);
  }

  chart.data.datasets[0].data = array
  chart.data.labels = labels;
  chart.update();
}



////////////////////////////////////////
////////////////////////////////////////
// menuHelper, hamburgerHelper

function widgetHelper(key){
  var els = document.querySelectorAll('#stats .notification');

  Array.from(els).forEach(item => {
      item.addEventListener('click', function(event) {
        // remove class "is-primary" from all "#stats .is-primary"
        var el = document.querySelector("#stats .is-primary");
        if(el) el.classList.remove("is-primary");

        // add class "is-primary" to this element
        var el = event.target;
        var key = null;

        if(Array.from(el.classList).includes('notification')){
          el.classList.add("is-primary");
          key = el.lastElementChild.id
        }
        else{
          el.parentElement.classList.add("is-primary");
          key = el.parentElement.lastElementChild.id
        }


        console.log(data.history[key])
        // updateChart
        //var key =
        updateChart(myChart, data.history[key])

      });
  });
}


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
        var text = el.innerText.toLowerCase().trim().split(" ").join("-");


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
// getJSON, updateElements

function updateElements(object){
  // pass me an object with
  // keys: ids to update
  // values: values to update
  // and I will update everything on the page!
    console.log(object)

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
// now, ready

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
