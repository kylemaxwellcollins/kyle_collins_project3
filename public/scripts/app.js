(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var tunerApp = {};

$(function () {
  tunerApp.init();
});

tunerApp.init = function () {
  $.getJSON("../../assets/notes.json").then(function (res) {
    tunerApp.data = res.guitars;
    tunerApp.displayGuitar();
    tunerApp.getTuning();
  });
};

tunerApp.displayGuitar = function () {
  // get users choice of guitar ie. 6 string, 7 string, 8 string
  $("input").on("change", true, function () {
    tunerApp.guitarChoice = $(this).attr("id");
    // console.log(tunerApp.guitarChoice);

    // display correct GUI
    if (tunerApp.guitarChoice === "sixString") {
      $(".six-string").fadeIn();
    } else {
      $(".six-string").fadeOut(0);
    }
    if (tunerApp.guitarChoice === "sevenString") {
      $(".seven-string").fadeIn();
    } else {
      $(".seven-string").fadeOut(0);
    }
  });
};

// gets users tuning choice
tunerApp.getTuning = function () {
  $("select").on("change", function () {
    tunerApp.tuning = $(this).children("option:selected").val();

    // Display corresponding note names on fret board
    tunerApp.strings = $("." + tunerApp.guitarChoice + "-string");
    // find the index of chosen option
    tunerApp.indexOfTuning = $(this).children("option:selected").index();

    for (var i = 0; i < tunerApp.strings.length; i++) {
      $(tunerApp.strings[i]).html(tunerApp.data[tunerApp.guitarChoice][tunerApp.indexOfTuning]["notes"][i]);
    }
  });
};

// listen for string click
$(".string").on("click", function () {

  tunerApp.playedNote = $(this).html();
  // play correct sound clip
  var audio = new Audio("../../assets/music/" + tunerApp.playedNote + ".wav");
  // audio.addEventListener(
  //   "ended",
  //   function() {
  //     this.currentTime = 0;
  //     this.play();
  //   },
  //   false
  // );
  audio.play();

  // play sound clip until a different string is clicked
});

// stop button?? / if same sting if clicked again, the sound clip stops

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sV0FBVyxFQUFqQjs7QUFFQSxFQUFFLFlBQVc7QUFDWCxXQUFTLElBQVQ7QUFDRCxDQUZEOztBQUlBLFNBQVMsSUFBVCxHQUFnQixZQUFXO0FBQ3pCLElBQUUsT0FBRixDQUFVLHlCQUFWLEVBQXFDLElBQXJDLENBQTBDLGVBQU87QUFDL0MsYUFBUyxJQUFULEdBQWdCLElBQUksT0FBcEI7QUFDQSxhQUFTLGFBQVQ7QUFDQSxhQUFTLFNBQVQ7QUFDRCxHQUpEO0FBS0QsQ0FORDs7QUFRQSxTQUFTLGFBQVQsR0FBeUIsWUFBVztBQUNsQztBQUNBLElBQUUsT0FBRixFQUFXLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLElBQXhCLEVBQThCLFlBQVc7QUFDdkMsYUFBUyxZQUFULEdBQXdCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxJQUFiLENBQXhCO0FBQ0E7O0FBRUE7QUFDQSxRQUFJLFNBQVMsWUFBVCxLQUEwQixXQUE5QixFQUEyQztBQUN6QyxRQUFFLGFBQUYsRUFBaUIsTUFBakI7QUFDRCxLQUZELE1BRU87QUFDTCxRQUFFLGFBQUYsRUFBaUIsT0FBakIsQ0FBeUIsQ0FBekI7QUFDRDtBQUNELFFBQUksU0FBUyxZQUFULEtBQTBCLGFBQTlCLEVBQTZDO0FBQzNDLFFBQUUsZUFBRixFQUFtQixNQUFuQjtBQUNELEtBRkQsTUFFTztBQUNMLFFBQUUsZUFBRixFQUFtQixPQUFuQixDQUEyQixDQUEzQjtBQUNEO0FBQ0YsR0FmRDtBQWdCRCxDQWxCRDs7QUFvQkE7QUFDQSxTQUFTLFNBQVQsR0FBcUIsWUFBVztBQUM5QixjQUFZLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFlBQVc7QUFDbEMsYUFBUyxNQUFULEdBQWtCLEVBQUUsSUFBRixFQUNmLFFBRGUsQ0FDTixpQkFETSxFQUVmLEdBRmUsRUFBbEI7O0FBSUE7QUFDQSxhQUFTLE9BQVQsR0FBbUIsUUFBTSxTQUFTLFlBQWYsYUFBbkI7QUFDQTtBQUNBLGFBQVMsYUFBVCxHQUF5QixFQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLGlCQUFqQixFQUFvQyxLQUFwQyxFQUF6Qjs7QUFFQSxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBUyxPQUFULENBQWlCLE1BQXJDLEVBQTZDLEdBQTdDLEVBQWtEO0FBQ2hELFFBQUUsU0FBUyxPQUFULENBQWlCLENBQWpCLENBQUYsRUFBdUIsSUFBdkIsQ0FBNEIsU0FBUyxJQUFULENBQWMsU0FBUyxZQUF2QixFQUFxQyxTQUFTLGFBQTlDLEVBQTZELE9BQTdELEVBQXNFLENBQXRFLENBQTVCO0FBQ0Q7QUFDRixHQWJEO0FBY0QsQ0FmRDs7QUFpQkE7QUFDQSxFQUFFLFNBQUYsRUFBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFlBQVc7O0FBRWxDLFdBQVMsVUFBVCxHQUF1QixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQXZCO0FBQ0E7QUFDQSxNQUFJLFFBQVEsSUFBSSxLQUFKLHlCQUFnQyxTQUFTLFVBQXpDLFVBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTSxJQUFOOztBQUVBO0FBQ0QsQ0FoQkQ7O0FBa0JBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgdHVuZXJBcHAgPSB7fTtcblxuJChmdW5jdGlvbigpIHtcbiAgdHVuZXJBcHAuaW5pdCgpO1xufSk7XG5cbnR1bmVyQXBwLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgJC5nZXRKU09OKFwiLi4vLi4vYXNzZXRzL25vdGVzLmpzb25cIikudGhlbihyZXMgPT4ge1xuICAgIHR1bmVyQXBwLmRhdGEgPSByZXMuZ3VpdGFycztcbiAgICB0dW5lckFwcC5kaXNwbGF5R3VpdGFyKCk7XG4gICAgdHVuZXJBcHAuZ2V0VHVuaW5nKCk7XG4gIH0pO1xufTtcblxudHVuZXJBcHAuZGlzcGxheUd1aXRhciA9IGZ1bmN0aW9uKCkge1xuICAvLyBnZXQgdXNlcnMgY2hvaWNlIG9mIGd1aXRhciBpZS4gNiBzdHJpbmcsIDcgc3RyaW5nLCA4IHN0cmluZ1xuICAkKFwiaW5wdXRcIikub24oXCJjaGFuZ2VcIiwgdHJ1ZSwgZnVuY3Rpb24oKSB7XG4gICAgdHVuZXJBcHAuZ3VpdGFyQ2hvaWNlID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XG4gICAgLy8gY29uc29sZS5sb2codHVuZXJBcHAuZ3VpdGFyQ2hvaWNlKTtcblxuICAgIC8vIGRpc3BsYXkgY29ycmVjdCBHVUlcbiAgICBpZiAodHVuZXJBcHAuZ3VpdGFyQ2hvaWNlID09PSBcInNpeFN0cmluZ1wiKSB7XG4gICAgICAkKFwiLnNpeC1zdHJpbmdcIikuZmFkZUluKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIuc2l4LXN0cmluZ1wiKS5mYWRlT3V0KDApO1xuICAgIH1cbiAgICBpZiAodHVuZXJBcHAuZ3VpdGFyQ2hvaWNlID09PSBcInNldmVuU3RyaW5nXCIpIHtcbiAgICAgICQoXCIuc2V2ZW4tc3RyaW5nXCIpLmZhZGVJbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiLnNldmVuLXN0cmluZ1wiKS5mYWRlT3V0KDApO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBnZXRzIHVzZXJzIHR1bmluZyBjaG9pY2VcbnR1bmVyQXBwLmdldFR1bmluZyA9IGZ1bmN0aW9uKCkge1xuICAkKGBzZWxlY3RgKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICB0dW5lckFwcC50dW5pbmcgPSAkKHRoaXMpXG4gICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcbiAgICAgIC52YWwoKTtcbiAgICBcbiAgICAvLyBEaXNwbGF5IGNvcnJlc3BvbmRpbmcgbm90ZSBuYW1lcyBvbiBmcmV0IGJvYXJkXG4gICAgdHVuZXJBcHAuc3RyaW5ncyA9ICQoYC4ke3R1bmVyQXBwLmd1aXRhckNob2ljZX0tc3RyaW5nYCk7XG4gICAgLy8gZmluZCB0aGUgaW5kZXggb2YgY2hvc2VuIG9wdGlvblxuICAgIHR1bmVyQXBwLmluZGV4T2ZUdW5pbmcgPSAkKHRoaXMpLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpLmluZGV4KCk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0dW5lckFwcC5zdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAkKHR1bmVyQXBwLnN0cmluZ3NbaV0pLmh0bWwodHVuZXJBcHAuZGF0YVt0dW5lckFwcC5ndWl0YXJDaG9pY2VdW3R1bmVyQXBwLmluZGV4T2ZUdW5pbmddW1wibm90ZXNcIl1baV0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBsaXN0ZW4gZm9yIHN0cmluZyBjbGlja1xuJChcIi5zdHJpbmdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblxuICB0dW5lckFwcC5wbGF5ZWROb3RlID0gKCQodGhpcykuaHRtbCgpKTtcbiAgLy8gcGxheSBjb3JyZWN0IHNvdW5kIGNsaXBcbiAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKGAuLi8uLi9hc3NldHMvbXVzaWMvJHt0dW5lckFwcC5wbGF5ZWROb3RlfS53YXZgKTtcbiAgLy8gYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgLy8gICBcImVuZGVkXCIsXG4gIC8vICAgZnVuY3Rpb24oKSB7XG4gIC8vICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgLy8gICAgIHRoaXMucGxheSgpO1xuICAvLyAgIH0sXG4gIC8vICAgZmFsc2VcbiAgLy8gKTtcbiAgYXVkaW8ucGxheSgpO1xuXG4gIC8vIHBsYXkgc291bmQgY2xpcCB1bnRpbCBhIGRpZmZlcmVudCBzdHJpbmcgaXMgY2xpY2tlZFxufSk7XG5cbi8vIHN0b3AgYnV0dG9uPz8gLyBpZiBzYW1lIHN0aW5nIGlmIGNsaWNrZWQgYWdhaW4sIHRoZSBzb3VuZCBjbGlwIHN0b3BzXG4iXX0=
