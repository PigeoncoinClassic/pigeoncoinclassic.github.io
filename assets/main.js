// global state object
var state = {}

// var myChart is defined in the body of chart.html

// firebase config
const config = {
  apiKey: "AIzaSyDSb7CJlXlzJjQPE9IRVRTZpCjeJwAgk54",
  authDomain: "pigeoncoin-api.firebaseapp.com",
  databaseURL: "https://pigeoncoin-api.firebaseio.com",
  projectId: "pigeoncoin-api",
  storageBucket: "pigeoncoin-api.appspot.com",
  messagingSenderId: "16957585674"
};


//////////////////////////////

onReady(()=>{
  // on load
  console.log(`DOM is ready!`)

  // initialize firebase
  firebase.initializeApp(config);
  const db = firebase.database()

  // set up listeners
  latestDataListener(db)
  historyDataListener(db)

  // set up helpers
  statsWidgetHelper()
  roadmapMenuHelper()
  hamburgerHelper()

  // set state to localStorage state
  if(localStorage.state){
    setState(JSON.parse(localStorage.state))
  }

})



// listeners

//    state change
//      update widgets
//      update graph
//      update roadmap menu
//      update progress bars

function stateListener(){
  // new state!
  console.log(state)

  updateAllWidgets()


}

function latestDataListener(db){
  // listen for latestData
  const ref = db.ref('latestData')

  ref.on('value', snap => {
    const latestData = snap.val()
    // setState
    setState({
      latestData
    })
  })
}

function historyDataListener(db){
  // listen for historyData
  const ref = db.ref('historyData')

  ref.on('value', snap => {
    const historyData = snap.val()
    // setState
    setState({
      historyData
    })
  })
}



// updaters

function updateAllWidgets(){
  // update all widgets with proper data format
  updateWidget('chain-hashrate', +(state.latestData.chain.hashrate / 1e9).toPrecision(2) + ' GH')
  updateWidget('chain-difficulty', +state.latestData.chain.difficulty.toPrecision(3) )
  updateWidget('chain-blockTime', (state.latestData.chain.blockTime / 60).toFixed(1) + ' min' )
  updateWidget('chain-retarget', state.latestData.chain.retarget)
  updateWidget('market-priceBtc', Math.round(state.latestData.market.priceBtc * 1e8) + ' sats')
  updateWidget('market-volumeBtc', state.latestData.market.volumeBtc.toFixed(1) + ' BTC')
  updateWidget('market-marketCapBtc', Math.round(state.latestData.market.marketCapBtc) + ' BTC')
  updateWidget('chain-supply', +(state.latestData.chain.supply / 1e6).toPrecision(2) + 'M PGN')

  function updateWidget(dataId, newData){
    // find a widget by dataId, give it newData!
    const el = document.querySelector(`[data-id=${dataId}] .title`)
    if(el){
      el.innerHTML = newData
    }
  }
}

//    update graph

//      highlight widget

//    update roadmap
//      hide all visible items .is-hidden-desktop
//      show matching item
//      remove all .is-active


// helpers

function statsWidgetHelper(){
  // find all graph widgets
  var els = document.querySelectorAll('#graph-widgets .notification');

  // tell them all to wait for a click
  Array.from(els).forEach(el => {
    el.addEventListener('click', function() {
      let graphState = this.getAttribute('data-id')
      // then set graphState
      setState({
        graphState
      })
    })
  })
}

function roadmapMenuHelper(){
  // find all roadmap menu items
  var els = document.querySelectorAll('#roadmap-menu .menu-list a');

  // tell them all to wait for a click
  Array.from(els).forEach(el => {
    el.addEventListener('click', function() {
      let roadmapState = this.getAttribute('data-id')
      // then set roadmapState
      setState({
        roadmapState
      })
    })
  })
}

function hamburgerHelper(){
  // find the hamburger and tell them to toggleNav
  document.querySelector('.navbar-burger').addEventListener("click", toggleNav)

  function toggleNav() {
    // find the menu
    const nav = document.querySelector('.navbar-menu')

    // toggle is-active
    if(nav.className == "navbar-menu") {
      nav.className = "navbar-menu is-active"
    } else {
      nav.className = "navbar-menu"
    }
  }
}


// core utilities

function setState(object){
  // set global state
  state = Object.assign(state, object)

  // persist global state
  localStorage.state = (JSON.stringify(state))

  // trigger stateListener
  stateListener()
}

function onReady(callback) {
  // when the document is ready, callback
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    callback;
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}
