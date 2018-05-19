// Initialize Firebase

onReady(main)

function main(){

  const config = {
    apiKey: "AIzaSyDSb7CJlXlzJjQPE9IRVRTZpCjeJwAgk54",
    authDomain: "pigeoncoin-api.firebaseapp.com",
    databaseURL: "https://pigeoncoin-api.firebaseio.com",
    projectId: "pigeoncoin-api",
    storageBucket: "pigeoncoin-api.appspot.com",
    messagingSenderId: "16957585674"
  };

  firebase.initializeApp(config);
  const db = firebase.database()


  // retreive any saved data
  try{
    updateElements(JSON.parse(localStorage.latestData))
  }catch(e){/*we haven't stored any data yet*/}


  // setup latestData listener
  const latestRef = db.ref('latestData');

  latestRef.on('value', snap => {
    const latestData = snap.val()
    updateElements(latestData)

    localStorage.latestData = JSON.stringify(latestData)
    console.log(latestData)
  })


  // setup historyData listener
  const historyRef = db.ref('historyData')

  historyRef.limitToLast(24).on('value', snap => {
    const historyData = snap.val()
    parseHistoryData(historyData)
    localStorage.historyData = JSON.stringify(historyData)
  })
}


// switch
// widget id >> historyData key
// create data array and label array
// pass to updateChart

function parseHistoryData(historyData, key){

  console.log(historyData)
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



////////////////////

function updateElements(result){

  // widgets
  updateElement('#priceBtc', Number((result.market.priceBtc*1e8).toPrecision(2)) + " sats")
  updateElement('#marketCapBtc', Number((result.market.marketCapBtc).toPrecision(2)) + " BTC")
  updateElement('#supply', Number((result.chain.supply/1e6).toPrecision(2)) + "M PGN")
  updateElement('#hashrate', Number((result.chain.hashrate/1e9).toPrecision(2)) + " GH")
  updateElement('#difficulty', Number(result.chain.difficulty.toPrecision(3)))
  updateElement('#blockTime', Number((result.chain.blockTime/60).toFixed(1)) + " min")
  updateElement('#retarget', Number((2016 - result.chain.height % 2016)) + " blocks")
  updateElement('#volumeBtc', Number(result.market.volumeBtc.toPrecision(2)) + " BTC")

  // progress bars
    // poolMiners value, max=1000
  updateProgressBar('#poolMiners', result.pool.miners, 1000)
  updateElement('#poolMinersTag', Number(Math.round(result.pool.miners)))

    // poolPayout
  const lastPayout = Date.now()/1000/60-60
  updateProgressBar('#poolPayout', lastPayout % 180, 180)
  updateElement('#poolPayoutTag', `in ${Math.round(180 - lastPayout % 180)}m`)

    // poolLastBlock value=minutesAgo, max=timeToFind*2
  let minutesAgo = (Date.now()/1000 - result.pool.lastBlockTime)/60
  updateProgressBar('#poolLastBlock', minutesAgo, result.pool.timeToFind/60 * 2)
  updateElement('#poolLastBlockTag', `${Math.round(minutesAgo)}m ago`)

  // charts


}

function updateElement(selector, htmlValue){
  const element = document.querySelector(selector)
  if(element){
    element.innerHTML = htmlValue
  }
}

function updateProgressBar(selector, value, max){
  const element = document.querySelector(selector)
  if(element){
    element.value = value
    element.max = max
  }
}




////////////////
//
// function updateElements(object){
//   // pass me an object with
//   // keys: ids to update
//   // values: values to update
//   // and I will update everything on the page!
//     console.log(object)
//
//     var keys = Object.keys(object),
//         values = Object.values(object)
//
//     for(i in keys){
//       try{document.querySelector('#'+ keys[i]).innerHTML = values[i];}
//       catch(error){
//         console.log(`error! key: "${keys[i]}", value: "${values[i]}" \n ${error}`)
//       }
//     }
// }


////////////////

function onReady(callback) {

  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}



// var data = {}
//
// now(function(){
//   // as soon as possible, do this!
// });
//
//
// ready(function(){
//   // when the DOM is ready, do this
//   main();
//   setInterval(function(){
//       main();
//   }, 1000*60*2);
//
//   hamburgerHelper();
//   menuHelper();
//   widgetHelper();
//
//
// });
//
//
// ////////////////////////////////////////
// ////////////////////////////////////////
// // updateChart
//
//
// function main(){
//   getJSON("https://explorer.pigeoncoin.org:8000", function(result){
//
//     data = result
//     var stats = {}
//
//     stats.price = result.price * 1e8 + " sats";
//     stats.volume = Number(result.volume.toPrecision(2)) + " BTC";
//     stats.supply = Number((result.supply / 1e6).toPrecision(2)) + "M PGN";
//     stats.hashrate = Number(result.hashrate.toPrecision(2)) + " GH";
//     stats.difficulty = Number(result.difficulty.toPrecision(2));
//     // stats.height =
//     stats.marketCap = Number(result.marketCap.toPrecision(2)) + " BTC";
//     stats.blockTime = Number(result.blockTime.toFixed(1)) + " min";
//     stats.retarget = result.retarget + " blocks";
//
//     var array = []
//     for(item in data.history.price){
//       array.push(data.history.price[item] * 1e8)
//     }
//
//     data.history.price = array;
//
//     var array = []
//     for(item in data.history.supply){
//       array.push(data.history.supply[item] / 1e6)
//     }
//
//     data.history.supply = array;
//
//     console.log(`stats: ${JSON.stringify(stats)}`)
//
//     updateElements(stats);
//
//     if(!myChart.data.datasets[0].data.length) updateChart(myChart, result.history.hashrate);
//   });
// }
//
//
// function updateChart(chart, array){
//   var count = 0
//   var labels = []
//
//   var array = array.filter(x => !!x); // filter falsy items
//
//   for(item in array){
//     labels.unshift(item);
//   }
//
//   chart.data.datasets[0].data = array
//   chart.data.labels = labels;
//   chart.update();
// }
//
//
//
// ////////////////////////////////////////
// ////////////////////////////////////////
// // menuHelper, hamburgerHelper
//
// function widgetHelper(key){
//   var els = document.querySelectorAll('#stats .notification');
//
//   Array.from(els).forEach(item => {
//       item.addEventListener('click', function(event) {
//         // remove class "is-primary" from all "#stats .is-primary"
//         var el = document.querySelector("#stats .is-primary");
//         if(el) el.classList.remove("is-primary");
//
//         // add class "is-primary" to this element
//         var el = event.target;
//         var key = null;
//
//         if(Array.from(el.classList).includes('notification')){
//           el.classList.add("is-primary");
//           key = el.lastElementChild.id
//         }
//         else{
//           el.parentElement.classList.add("is-primary");
//           key = el.parentElement.lastElementChild.id
//         }
//
//
//         console.log(data.history[key])
//         // updateChart
//         //var key =
//         updateChart(myChart, data.history[key])
//
//       });
//   });
// }
//
//
// function menuHelper(){
//   // Bulma is really fast and simple
//   // its menu needs help.
//   // I am the menu helper
//
//   var els = document.querySelectorAll('.menu-list a');
//
//   Array.from(els).forEach(link => {
//       link.addEventListener('click', function(event) {
//         // remove class "is-active" from all ".menu-list a"
//         var el = document.querySelector(".menu-list .is-active");
//
//         if (el.classList)
//           el.classList.remove("is-active");
//         else
//           el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
//
//
//         // add class "is-active" to this element
//         var el = event.target;
//
//         if (el.classList)
//           el.classList.add("is-active");
//         else
//           el.className += ' ' + "is-active";
//
//
//         // add class "is-hidden-desktop" to all '#content-holder div'
//
//         var els = document.querySelectorAll('#content-holder .notification');
//
//         Array.from(els).forEach(el => {
//
//             if (el.classList)
//               el.classList.add("is-hidden-desktop");
//             else
//               el.className += ' ' + "is-hidden-desktop";
//           });
//
//
//         // get element text, make lowercase, replace space with "-"
//
//         var el = event.target;
//         var text = el.innerText.toLowerCase().trim().split(" ").join("-");
//
//
//         // remove class "is-hidden-desktop" to all '#content-holder link-text'
//
//         var el = document.querySelector("#" + text);
//
//         if (el.classList)
//           el.classList.remove("is-hidden-desktop");
//         else
//           el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
//
//       });
//   });
// }
//

// help bulma's hamburger
function hamburgerHelper(){
  document.querySelector('.navbar-burger').addEventListener("click", toggleNav);

  function toggleNav() {
    const nav = document.querySelector('.navbar-menu');

    if(nav.className == "navbar-menu") {
      nav.className = "navbar-menu is-active";
    } else {
      nav.className = "navbar-menu";
    }
  }
}

//
//
//
// ////////////////////////////////////////
// ////////////////////////////////////////
// // getJSON, updateElements
//
// function updateElements(object){
//   // pass me an object with
//   // keys: ids to update
//   // values: values to update
//   // and I will update everything on the page!
//     console.log(object)
//
//     var keys = Object.keys(object),
//         values = Object.values(object)
//
//     for(i in keys){
//       try{document.querySelector('#'+ keys[i]).innerHTML = values[i];}
//       catch(error){
//         console.log(`error! key: "${keys[i]}", value: "${values[i]}" \n ${error}`)
//       }
//     }
// }
//
//
//
// function getJSON(URL,callback){
//   // I pick up JSON
//   // and put him down
//
//   var request = new XMLHttpRequest();
//   request.open('GET', URL, true);
//
//   request.onload = function() {
//     if (request.status >= 200 && request.status < 400) {
//       // Success!
//       return callback(JSON.parse(request.responseText));
//     } else {
//       return null;
//     }
//   };
//
//   request.onerror = function() {
//     return null;
//   };
//
//   request.send();
// }
//
//
//
// ////////////////////////////////////////
// ////////////////////////////////////////
// // now, ready
//
// function now(callback){
//   callback();
// };
//
//
// function ready(callback) {
//
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', callback);
//   }
// }
