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
    // console.log(tunerApp.tuning);
    // find the index of chosen option
    tunerApp.indexOfTuning = $(this).children("option:selected").index();
    // console.log(tunerApp.indexOfTuning);

    // Display corresponding note names on fret board
    tunerApp.strings = $("." + tunerApp.guitarChoice + "-string");

    for (var i = 0; i < tunerApp.strings.length; i++) {
      // console.log(tunerApp.strings[i]);
      $(tunerApp.strings[i]).html(tunerApp.data[tunerApp.guitarChoice][tunerApp.indexOfTuning]["notes"][i]);
      // console.log(tunerApp.data[tunerApp.guitarChoice][tunerApp.indexOfTuning]["notes"][i]);
    }

    // cues notes from chosen tuning
  });
};

// listen for string click
$(".string").on("click", function () {
  console.log("play sound");
  // play correct sound clip
  var audio = new Audio("../../assets/music/test-sample.wav");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sV0FBVyxFQUFqQjs7QUFFQSxFQUFFLFlBQVc7QUFDWCxXQUFTLElBQVQ7QUFDRCxDQUZEOztBQUlBLFNBQVMsSUFBVCxHQUFnQixZQUFXO0FBQ3pCLElBQUUsT0FBRixDQUFVLHlCQUFWLEVBQXFDLElBQXJDLENBQTBDLGVBQU87QUFDL0MsYUFBUyxJQUFULEdBQWdCLElBQUksT0FBcEI7QUFDQSxhQUFTLGFBQVQ7QUFDQSxhQUFTLFNBQVQ7QUFDRCxHQUpEO0FBS0QsQ0FORDs7QUFRQSxTQUFTLGFBQVQsR0FBeUIsWUFBVztBQUNsQztBQUNBLElBQUUsT0FBRixFQUFXLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLElBQXhCLEVBQThCLFlBQVc7QUFDdkMsYUFBUyxZQUFULEdBQXdCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxJQUFiLENBQXhCO0FBQ0E7O0FBRUE7QUFDQSxRQUFJLFNBQVMsWUFBVCxLQUEwQixXQUE5QixFQUEyQztBQUN6QyxRQUFFLGFBQUYsRUFBaUIsTUFBakI7QUFDRCxLQUZELE1BRU87QUFDTCxRQUFFLGFBQUYsRUFBaUIsT0FBakIsQ0FBeUIsQ0FBekI7QUFDRDtBQUNELFFBQUksU0FBUyxZQUFULEtBQTBCLGFBQTlCLEVBQTZDO0FBQzNDLFFBQUUsZUFBRixFQUFtQixNQUFuQjtBQUNELEtBRkQsTUFFTztBQUNMLFFBQUUsZUFBRixFQUFtQixPQUFuQixDQUEyQixDQUEzQjtBQUNEO0FBQ0YsR0FmRDtBQWdCRCxDQWxCRDs7QUFvQkE7QUFDQSxTQUFTLFNBQVQsR0FBcUIsWUFBVztBQUM5QixjQUFZLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFlBQVc7QUFDbEMsYUFBUyxNQUFULEdBQWtCLEVBQUUsSUFBRixFQUNmLFFBRGUsQ0FDTixpQkFETSxFQUVmLEdBRmUsRUFBbEI7QUFHQTtBQUNBO0FBQ0EsYUFBUyxhQUFULEdBQXlCLEVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsaUJBQWpCLEVBQW9DLEtBQXBDLEVBQXpCO0FBQ0E7O0FBRUE7QUFDQSxhQUFTLE9BQVQsR0FBbUIsUUFBTSxTQUFTLFlBQWYsYUFBbkI7O0FBRUEsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFNBQVMsT0FBVCxDQUFpQixNQUFyQyxFQUE2QyxHQUE3QyxFQUFrRDtBQUNoRDtBQUNBLFFBQUUsU0FBUyxPQUFULENBQWlCLENBQWpCLENBQUYsRUFBdUIsSUFBdkIsQ0FBNEIsU0FBUyxJQUFULENBQWMsU0FBUyxZQUF2QixFQUFxQyxTQUFTLGFBQTlDLEVBQTZELE9BQTdELEVBQXNFLENBQXRFLENBQTVCO0FBQ0E7QUFDRDs7QUFFRDtBQUNELEdBbkJEO0FBb0JELENBckJEOztBQXVCQTtBQUNBLEVBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBVztBQUNsQyxVQUFRLEdBQVIsQ0FBWSxZQUFaO0FBQ0E7QUFDQSxNQUFNLFFBQVEsSUFBSSxLQUFKLENBQVUsb0NBQVYsQ0FBZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFNLElBQU47QUFDQTtBQUNELENBZEQ7O0FBZ0JBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgdHVuZXJBcHAgPSB7fTtcblxuJChmdW5jdGlvbigpIHtcbiAgdHVuZXJBcHAuaW5pdCgpO1xufSk7XG5cbnR1bmVyQXBwLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgJC5nZXRKU09OKFwiLi4vLi4vYXNzZXRzL25vdGVzLmpzb25cIikudGhlbihyZXMgPT4ge1xuICAgIHR1bmVyQXBwLmRhdGEgPSByZXMuZ3VpdGFycztcbiAgICB0dW5lckFwcC5kaXNwbGF5R3VpdGFyKCk7XG4gICAgdHVuZXJBcHAuZ2V0VHVuaW5nKCk7XG4gIH0pO1xufTtcblxudHVuZXJBcHAuZGlzcGxheUd1aXRhciA9IGZ1bmN0aW9uKCkge1xuICAvLyBnZXQgdXNlcnMgY2hvaWNlIG9mIGd1aXRhciBpZS4gNiBzdHJpbmcsIDcgc3RyaW5nLCA4IHN0cmluZ1xuICAkKFwiaW5wdXRcIikub24oXCJjaGFuZ2VcIiwgdHJ1ZSwgZnVuY3Rpb24oKSB7XG4gICAgdHVuZXJBcHAuZ3VpdGFyQ2hvaWNlID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XG4gICAgLy8gY29uc29sZS5sb2codHVuZXJBcHAuZ3VpdGFyQ2hvaWNlKTtcblxuICAgIC8vIGRpc3BsYXkgY29ycmVjdCBHVUlcbiAgICBpZiAodHVuZXJBcHAuZ3VpdGFyQ2hvaWNlID09PSBcInNpeFN0cmluZ1wiKSB7XG4gICAgICAkKFwiLnNpeC1zdHJpbmdcIikuZmFkZUluKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIuc2l4LXN0cmluZ1wiKS5mYWRlT3V0KDApO1xuICAgIH1cbiAgICBpZiAodHVuZXJBcHAuZ3VpdGFyQ2hvaWNlID09PSBcInNldmVuU3RyaW5nXCIpIHtcbiAgICAgICQoXCIuc2V2ZW4tc3RyaW5nXCIpLmZhZGVJbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiLnNldmVuLXN0cmluZ1wiKS5mYWRlT3V0KDApO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBnZXRzIHVzZXJzIHR1bmluZyBjaG9pY2VcbnR1bmVyQXBwLmdldFR1bmluZyA9IGZ1bmN0aW9uKCkge1xuICAkKGBzZWxlY3RgKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICB0dW5lckFwcC50dW5pbmcgPSAkKHRoaXMpXG4gICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcbiAgICAgIC52YWwoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0dW5lckFwcC50dW5pbmcpO1xuICAgIC8vIGZpbmQgdGhlIGluZGV4IG9mIGNob3NlbiBvcHRpb25cbiAgICB0dW5lckFwcC5pbmRleE9mVHVuaW5nID0gJCh0aGlzKS5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKS5pbmRleCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHR1bmVyQXBwLmluZGV4T2ZUdW5pbmcpO1xuXG4gICAgLy8gRGlzcGxheSBjb3JyZXNwb25kaW5nIG5vdGUgbmFtZXMgb24gZnJldCBib2FyZFxuICAgIHR1bmVyQXBwLnN0cmluZ3MgPSAkKGAuJHt0dW5lckFwcC5ndWl0YXJDaG9pY2V9LXN0cmluZ2ApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0dW5lckFwcC5zdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0dW5lckFwcC5zdHJpbmdzW2ldKTtcbiAgICAgICQodHVuZXJBcHAuc3RyaW5nc1tpXSkuaHRtbCh0dW5lckFwcC5kYXRhW3R1bmVyQXBwLmd1aXRhckNob2ljZV1bdHVuZXJBcHAuaW5kZXhPZlR1bmluZ11bXCJub3Rlc1wiXVtpXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0dW5lckFwcC5kYXRhW3R1bmVyQXBwLmd1aXRhckNob2ljZV1bdHVuZXJBcHAuaW5kZXhPZlR1bmluZ11bXCJub3Rlc1wiXVtpXSk7XG4gICAgfVxuXG4gICAgLy8gY3VlcyBub3RlcyBmcm9tIGNob3NlbiB0dW5pbmdcbiAgfSk7XG59O1xuXG4vLyBsaXN0ZW4gZm9yIHN0cmluZyBjbGlja1xuJChcIi5zdHJpbmdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coXCJwbGF5IHNvdW5kXCIpO1xuICAvLyBwbGF5IGNvcnJlY3Qgc291bmQgY2xpcFxuICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4uLy4uL2Fzc2V0cy9tdXNpYy90ZXN0LXNhbXBsZS53YXZcIik7XG4gIC8vIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXG4gIC8vICAgXCJlbmRlZFwiLFxuICAvLyAgIGZ1bmN0aW9uKCkge1xuICAvLyAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gIC8vICAgICB0aGlzLnBsYXkoKTtcbiAgLy8gICB9LFxuICAvLyAgIGZhbHNlXG4gIC8vICk7XG4gIGF1ZGlvLnBsYXkoKTtcbiAgLy8gcGxheSBzb3VuZCBjbGlwIHVudGlsIGEgZGlmZmVyZW50IHN0cmluZyBpcyBjbGlja2VkXG59KTtcblxuLy8gc3RvcCBidXR0b24/PyAvIGlmIHNhbWUgc3RpbmcgaWYgY2xpY2tlZCBhZ2FpbiwgdGhlIHNvdW5kIGNsaXAgc3RvcHNcbiJdfQ==
