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

    // Display corresponding note names on fret board
    tunerApp.strings = $("." + tunerApp.guitarChoice + "-string");
    for (var i = 0; i < tunerApp.strings.length; i++) {
      // console.log(tunerApp.strings[i]);
      console.log(tunerApp.data[tunerApp.guitarChoice][1]["notes"][i]);
      // tunerApp.Strings[i].text(tunerApp.data[tunerApp.guitarChoice][0]["notes"][i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sV0FBVyxFQUFqQjs7QUFFQSxFQUFFLFlBQVc7QUFDWCxXQUFTLElBQVQ7QUFDRCxDQUZEOztBQUlBLFNBQVMsSUFBVCxHQUFnQixZQUFXO0FBQ3pCLElBQUUsT0FBRixDQUFVLHlCQUFWLEVBQXFDLElBQXJDLENBQTBDLGVBQU87QUFDL0MsYUFBUyxJQUFULEdBQWdCLElBQUksT0FBcEI7QUFDQSxhQUFTLGFBQVQ7QUFDQSxhQUFTLFNBQVQ7QUFDRCxHQUpEO0FBS0QsQ0FORDs7QUFRQSxTQUFTLGFBQVQsR0FBeUIsWUFBVztBQUNsQztBQUNBLElBQUUsT0FBRixFQUFXLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLElBQXhCLEVBQThCLFlBQVc7QUFDdkMsYUFBUyxZQUFULEdBQXdCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxJQUFiLENBQXhCO0FBQ0E7O0FBRUE7QUFDQSxRQUFJLFNBQVMsWUFBVCxLQUEwQixXQUE5QixFQUEyQztBQUN6QyxRQUFFLGFBQUYsRUFBaUIsTUFBakI7QUFDRCxLQUZELE1BRU87QUFDTCxRQUFFLGFBQUYsRUFBaUIsT0FBakIsQ0FBeUIsQ0FBekI7QUFDRDtBQUNELFFBQUksU0FBUyxZQUFULEtBQTBCLGFBQTlCLEVBQTZDO0FBQzNDLFFBQUUsZUFBRixFQUFtQixNQUFuQjtBQUNELEtBRkQsTUFFTztBQUNMLFFBQUUsZUFBRixFQUFtQixPQUFuQixDQUEyQixDQUEzQjtBQUNEO0FBQ0YsR0FmRDtBQWdCRCxDQWxCRDs7QUFvQkE7QUFDQSxTQUFTLFNBQVQsR0FBcUIsWUFBVztBQUM5QixjQUFZLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFlBQVc7QUFDbEMsYUFBUyxNQUFULEdBQWtCLEVBQUUsSUFBRixFQUNmLFFBRGUsQ0FDTixpQkFETSxFQUVmLEdBRmUsRUFBbEI7QUFHQTs7QUFFQTtBQUNBLGFBQVMsT0FBVCxHQUFtQixRQUFNLFNBQVMsWUFBZixhQUFuQjtBQUNBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxTQUFTLE9BQVQsQ0FBaUIsTUFBckMsRUFBNkMsR0FBN0MsRUFBa0Q7QUFDaEQ7QUFDQSxjQUFRLEdBQVIsQ0FBWSxTQUFTLElBQVQsQ0FBYyxTQUFTLFlBQXZCLEVBQXFDLENBQXJDLEVBQXdDLE9BQXhDLEVBQWlELENBQWpELENBQVo7QUFDQTtBQUNEOztBQUVEO0FBQ0QsR0FmRDtBQWdCRCxDQWpCRDs7QUFtQkE7QUFDQSxFQUFFLFNBQUYsRUFBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFlBQVc7QUFDbEMsVUFBUSxHQUFSLENBQVksWUFBWjtBQUNBO0FBQ0EsTUFBTSxRQUFRLElBQUksS0FBSixDQUFVLG9DQUFWLENBQWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTSxJQUFOO0FBQ0E7QUFDRCxDQWREOztBQWdCQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHR1bmVyQXBwID0ge307XG5cbiQoZnVuY3Rpb24oKSB7XG4gIHR1bmVyQXBwLmluaXQoKTtcbn0pO1xuXG50dW5lckFwcC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICQuZ2V0SlNPTihcIi4uLy4uL2Fzc2V0cy9ub3Rlcy5qc29uXCIpLnRoZW4ocmVzID0+IHtcbiAgICB0dW5lckFwcC5kYXRhID0gcmVzLmd1aXRhcnM7XG4gICAgdHVuZXJBcHAuZGlzcGxheUd1aXRhcigpO1xuICAgIHR1bmVyQXBwLmdldFR1bmluZygpO1xuICB9KTtcbn07XG5cbnR1bmVyQXBwLmRpc3BsYXlHdWl0YXIgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IHVzZXJzIGNob2ljZSBvZiBndWl0YXIgaWUuIDYgc3RyaW5nLCA3IHN0cmluZywgOCBzdHJpbmdcbiAgJChcImlucHV0XCIpLm9uKFwiY2hhbmdlXCIsIHRydWUsIGZ1bmN0aW9uKCkge1xuICAgIHR1bmVyQXBwLmd1aXRhckNob2ljZSA9ICQodGhpcykuYXR0cihcImlkXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHR1bmVyQXBwLmd1aXRhckNob2ljZSk7XG5cbiAgICAvLyBkaXNwbGF5IGNvcnJlY3QgR1VJXG4gICAgaWYgKHR1bmVyQXBwLmd1aXRhckNob2ljZSA9PT0gXCJzaXhTdHJpbmdcIikge1xuICAgICAgJChcIi5zaXgtc3RyaW5nXCIpLmZhZGVJbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiLnNpeC1zdHJpbmdcIikuZmFkZU91dCgwKTtcbiAgICB9XG4gICAgaWYgKHR1bmVyQXBwLmd1aXRhckNob2ljZSA9PT0gXCJzZXZlblN0cmluZ1wiKSB7XG4gICAgICAkKFwiLnNldmVuLXN0cmluZ1wiKS5mYWRlSW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5zZXZlbi1zdHJpbmdcIikuZmFkZU91dCgwKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gZ2V0cyB1c2VycyB0dW5pbmcgY2hvaWNlXG50dW5lckFwcC5nZXRUdW5pbmcgPSBmdW5jdGlvbigpIHtcbiAgJChgc2VsZWN0YCkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgdHVuZXJBcHAudHVuaW5nID0gJCh0aGlzKVxuICAgICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXG4gICAgICAudmFsKCk7XG4gICAgLy8gY29uc29sZS5sb2codHVuZXJBcHAudHVuaW5nKTtcblxuICAgIC8vIERpc3BsYXkgY29ycmVzcG9uZGluZyBub3RlIG5hbWVzIG9uIGZyZXQgYm9hcmRcbiAgICB0dW5lckFwcC5zdHJpbmdzID0gJChgLiR7dHVuZXJBcHAuZ3VpdGFyQ2hvaWNlfS1zdHJpbmdgKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHR1bmVyQXBwLnN0cmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHR1bmVyQXBwLnN0cmluZ3NbaV0pO1xuICAgICAgY29uc29sZS5sb2codHVuZXJBcHAuZGF0YVt0dW5lckFwcC5ndWl0YXJDaG9pY2VdWzFdW1wibm90ZXNcIl1baV0pO1xuICAgICAgLy8gdHVuZXJBcHAuU3RyaW5nc1tpXS50ZXh0KHR1bmVyQXBwLmRhdGFbdHVuZXJBcHAuZ3VpdGFyQ2hvaWNlXVswXVtcIm5vdGVzXCJdW2ldKTtcbiAgICB9XG5cbiAgICAvLyBjdWVzIG5vdGVzIGZyb20gY2hvc2VuIHR1bmluZ1xuICB9KTtcbn07XG5cbi8vIGxpc3RlbiBmb3Igc3RyaW5nIGNsaWNrXG4kKFwiLnN0cmluZ1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZyhcInBsYXkgc291bmRcIik7XG4gIC8vIHBsYXkgY29ycmVjdCBzb3VuZCBjbGlwXG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi4vLi4vYXNzZXRzL211c2ljL3Rlc3Qtc2FtcGxlLndhdlwiKTtcbiAgLy8gYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgLy8gICBcImVuZGVkXCIsXG4gIC8vICAgZnVuY3Rpb24oKSB7XG4gIC8vICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgLy8gICAgIHRoaXMucGxheSgpO1xuICAvLyAgIH0sXG4gIC8vICAgZmFsc2VcbiAgLy8gKTtcbiAgYXVkaW8ucGxheSgpO1xuICAvLyBwbGF5IHNvdW5kIGNsaXAgdW50aWwgYSBkaWZmZXJlbnQgc3RyaW5nIGlzIGNsaWNrZWRcbn0pO1xuXG4vLyBzdG9wIGJ1dHRvbj8/IC8gaWYgc2FtZSBzdGluZyBpZiBjbGlja2VkIGFnYWluLCB0aGUgc291bmQgY2xpcCBzdG9wc1xuIl19
