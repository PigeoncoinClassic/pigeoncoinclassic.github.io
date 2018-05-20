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
  //    state change
  //    latestData firebase
  latestDataListener(db)
  //    historyData firebase
  historyDataListener(db)

  // set up helpers
  //    widget click
  graphHelper()
  //    hamburger click
  hamburgerHelper()
  //    roadmap menu click
  menuHelper()
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
//      save to localStorage
function stateListener(){
  // new state!
  console.log(state)


}

//    latestData (value) firebase
//      set state
function latestDataListener(db){
  const ref = db.ref('latestData')

  ref.on('value', snap => {
    const latestData = snap.val()
    setState({
      latestData
    })
  })
}

//    historyData (value) firebase
//      set state
function historyDataListener(db){
  const ref = db.ref('historyData')

  ref.on('value', snap => {
    const historyData = snap.val()
    setState({
      historyData
    })
  })
}



// updaters

//    set state

function setState(object){
  state = Object.assign(state, object)  // set state
  localStorage.state = (JSON.stringify(state)) // persist state

  // trigger the stateListener
  stateListener()
}


//    update widgets

//    update graph

//    update roadmap
//      hide all visible items .is-hidden-desktop
//      show matching item
//      remove all .is-active






// helpers

//    widget click
//      set state.graphSelected

function graphHelper(){
  var els = document.querySelectorAll('#graph-widgets .notification');

  Array.from(els).forEach(el => {
    el.addEventListener('click', function() {
      let graphState = this.getAttribute('data-id')
      setState({
        graphState
      })
    })
  })
}


//    roadmap menu
//      set state.roadmapMenu

function menuHelper(){
  var els = document.querySelectorAll('#roadmap-menu .menu-list a');

  Array.from(els).forEach(el => {
    el.addEventListener('click', function() {
      let roadmapState = this.getAttribute('data-id')
      setState({
        roadmapState
      })
    })
  })
}


//   // remove class "is-active" from all ".menu-list a"
//   var el = document.querySelector("#roadmap-menu .menu-list .is-active");
//
//   if (el.classList)
//     el.classList.remove("is-active");
//   else
//     el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
//
//
//   // add class "is-active" to this element
//   var el = event.target;
//
//   if (el.classList)
//     el.classList.add("is-active");
//   else
//     el.className += ' ' + "is-active";
//
//
//   // add class "is-hidden-desktop" to all '#content-holder div'
//
//   var els = document.querySelectorAll('#content-holder .notification');
//
//   Array.from(els).forEach(el => {
//
//       if (el.classList)
//         el.classList.add("is-hidden-desktop");
//       else
//         el.className += ' ' + "is-hidden-desktop";
//     });
//
//
//   // get element text, make lowercase, replace space with "-"
//
//   var el = event.target;
//   var text = el.innerText.toLowerCase().trim().split(" ").join("-");
//
//
//   // remove class "is-hidden-desktop" to all '#content-holder link-text'
//
//   var el = document.querySelector("#" + text);
//
//   if (el.classList)
//     el.classList.remove("is-hidden-desktop");
//   else
//     el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');






//    hamburger helper
//      toggle hide/show mobile menu
function hamburgerHelper(){
  document.querySelector('.navbar-burger').addEventListener("click", toggleNav)

  function toggleNav() {
    const nav = document.querySelector('.navbar-menu')

    if(nav.className == "navbar-menu") {
      nav.className = "navbar-menu is-active"
    } else {
      nav.className = "navbar-menu"
    }
  }
}

//    onReady
function onReady(callback) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}
