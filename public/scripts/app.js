(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var tunerApp = {};

$(function () {
  tunerApp.init();
});

tunerApp.init = function () {
  $.getJSON("../../assets/notes.json").then(function (res) {
    tunerApp.data = res.guitars;
    tunerApp.openSettings();
    tunerApp.displayGuitar();
    tunerApp.getTuning();
    tunerApp.playNote();
  });
};

tunerApp.displayGuitar = function () {
  // get users choice of guitar ie. 6 string, 7 string, 8 string
  // defaults to six string
  tunerApp.guitarChoice = "sixString";
  $(".six-string").fadeIn();
  tunerApp.setNotes("sixString", 0);
  $(".guitar-option").on("change", true, function () {
    tunerApp.guitarChoice = $(this).attr("id");

    // defaults to standard tuning
    tunerApp.tuning = "Standard";
    $("select").val("Standard");
    // display correct GUI
    if (tunerApp.guitarChoice === "sixString") {
      $(".six-string").fadeIn();
      tunerApp.setNotes("sixString", 0);
    } else {
      $(".six-string").fadeOut(0);
    }
    if (tunerApp.guitarChoice === "sevenString") {
      $(".seven-string").fadeIn();
      tunerApp.setNotes("sevenString", 0);
    } else {
      $(".seven-string").fadeOut(0);
    }
  });
};

// ques notes
tunerApp.setNotes = function (stringCount, indexOfTuning) {
  tunerApp.strings = $("." + stringCount + "-string");
  tunerApp.indexOfTuning = indexOfTuning;
  for (var i = 0; i < tunerApp.strings.length; i++) {
    $(tunerApp.strings[i]).html(tunerApp.data[tunerApp.guitarChoice][tunerApp.indexOfTuning]["notes"][i]);
  }
};

// gets users tuning choice
tunerApp.getTuning = function () {
  $("select").on("change", function () {
    tunerApp.tuning = $(this).children("option:selected").val();

    tunerApp.strings = $("." + tunerApp.guitarChoice + "-string");

    // find the index of chosen option
    tunerApp.indexOfTuning = $(this).children("option:selected").index();

    // Display corresponding note names on fret board
    for (var i = 0; i < tunerApp.strings.length; i++) {
      $(tunerApp.strings[i]).html(tunerApp.data[tunerApp.guitarChoice][tunerApp.indexOfTuning]["notes"][i]);
    }
  });
};

var audio = new Audio();

// listen for string click
tunerApp.playNote = function () {
  $(".string").on("click", function () {
    // play correct sound clip
    tunerApp.playedNote = $(this).html();

    // play sound clip until a different string is clicked
    if (!audio.paused) {
      audio.pause();
    }
    audio = new Audio("../../assets/music/" + tunerApp.playedNote + ".wav");

    if ($(".loop-option").is(":checked")) {
      audio.addEventListener("ended", function () {
        this.currentTime = 0;
        this.play();
      }, false);
      audio.play();
    }
    audio.play();
  });
};

tunerApp.openSettings = function () {
  $(".settings").on("click", function () {
    $("form").toggleClass("open-settings");
  });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sV0FBVyxFQUFqQjs7QUFFQSxFQUFFLFlBQVc7QUFDWCxXQUFTLElBQVQ7QUFDRCxDQUZEOztBQUlBLFNBQVMsSUFBVCxHQUFnQixZQUFXO0FBQ3pCLElBQUUsT0FBRixDQUFVLHlCQUFWLEVBQXFDLElBQXJDLENBQTBDLGVBQU87QUFDL0MsYUFBUyxJQUFULEdBQWdCLElBQUksT0FBcEI7QUFDQSxhQUFTLFlBQVQ7QUFDQSxhQUFTLGFBQVQ7QUFDQSxhQUFTLFNBQVQ7QUFDQSxhQUFTLFFBQVQ7QUFDRCxHQU5EO0FBT0QsQ0FSRDs7QUFVQSxTQUFTLGFBQVQsR0FBeUIsWUFBVztBQUNsQztBQUNBO0FBQ0EsV0FBUyxZQUFULEdBQXdCLFdBQXhCO0FBQ0EsSUFBRSxhQUFGLEVBQWlCLE1BQWpCO0FBQ0EsV0FBUyxRQUFULENBQWtCLFdBQWxCLEVBQStCLENBQS9CO0FBQ0EsSUFBRSxnQkFBRixFQUFvQixFQUFwQixDQUF1QixRQUF2QixFQUFpQyxJQUFqQyxFQUF1QyxZQUFXO0FBQ2hELGFBQVMsWUFBVCxHQUF3QixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsSUFBYixDQUF4Qjs7QUFFQTtBQUNBLGFBQVMsTUFBVCxHQUFrQixVQUFsQjtBQUNBLE1BQUUsUUFBRixFQUFZLEdBQVosQ0FBZ0IsVUFBaEI7QUFDQTtBQUNBLFFBQUksU0FBUyxZQUFULEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3pDLFFBQUUsYUFBRixFQUFpQixNQUFqQjtBQUNBLGVBQVMsUUFBVCxDQUFrQixXQUFsQixFQUErQixDQUEvQjtBQUNELEtBSEQsTUFHTztBQUNMLFFBQUUsYUFBRixFQUFpQixPQUFqQixDQUF5QixDQUF6QjtBQUNEO0FBQ0QsUUFBSSxTQUFTLFlBQVQsS0FBMEIsYUFBOUIsRUFBNkM7QUFDM0MsUUFBRSxlQUFGLEVBQW1CLE1BQW5CO0FBQ0EsZUFBUyxRQUFULENBQWtCLGFBQWxCLEVBQWlDLENBQWpDO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsUUFBRSxlQUFGLEVBQW1CLE9BQW5CLENBQTJCLENBQTNCO0FBQ0Q7QUFDRixHQW5CRDtBQW9CRCxDQTFCRDs7QUE0QkE7QUFDQSxTQUFTLFFBQVQsR0FBb0IsVUFBUyxXQUFULEVBQXNCLGFBQXRCLEVBQXFDO0FBQ3ZELFdBQVMsT0FBVCxHQUFtQixRQUFNLFdBQU4sYUFBbkI7QUFDQSxXQUFTLGFBQVQsR0FBeUIsYUFBekI7QUFDQSxPQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBUyxPQUFULENBQWlCLE1BQXJDLEVBQTZDLEdBQTdDLEVBQWtEO0FBQ2hELE1BQUUsU0FBUyxPQUFULENBQWlCLENBQWpCLENBQUYsRUFBdUIsSUFBdkIsQ0FDRSxTQUFTLElBQVQsQ0FBYyxTQUFTLFlBQXZCLEVBQXFDLFNBQVMsYUFBOUMsRUFBNkQsT0FBN0QsRUFBc0UsQ0FBdEUsQ0FERjtBQUdEO0FBQ0YsQ0FSRDs7QUFVQTtBQUNBLFNBQVMsU0FBVCxHQUFxQixZQUFXO0FBQzlCLGNBQVksRUFBWixDQUFlLFFBQWYsRUFBeUIsWUFBVztBQUNsQyxhQUFTLE1BQVQsR0FBa0IsRUFBRSxJQUFGLEVBQ2YsUUFEZSxDQUNOLGlCQURNLEVBRWYsR0FGZSxFQUFsQjs7QUFJQSxhQUFTLE9BQVQsR0FBbUIsUUFBTSxTQUFTLFlBQWYsYUFBbkI7O0FBRUE7QUFDQSxhQUFTLGFBQVQsR0FBeUIsRUFBRSxJQUFGLEVBQ3RCLFFBRHNCLENBQ2IsaUJBRGEsRUFFdEIsS0FGc0IsRUFBekI7O0FBSUE7QUFDQSxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBUyxPQUFULENBQWlCLE1BQXJDLEVBQTZDLEdBQTdDLEVBQWtEO0FBQ2hELFFBQUUsU0FBUyxPQUFULENBQWlCLENBQWpCLENBQUYsRUFBdUIsSUFBdkIsQ0FDRSxTQUFTLElBQVQsQ0FBYyxTQUFTLFlBQXZCLEVBQXFDLFNBQVMsYUFBOUMsRUFBNkQsT0FBN0QsRUFBc0UsQ0FBdEUsQ0FERjtBQUdEO0FBQ0YsR0FsQkQ7QUFtQkQsQ0FwQkQ7O0FBc0JBLElBQUksUUFBUSxJQUFJLEtBQUosRUFBWjs7QUFFQTtBQUNBLFNBQVMsUUFBVCxHQUFvQixZQUFXO0FBQzdCLElBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBVztBQUNsQztBQUNBLGFBQVMsVUFBVCxHQUFzQixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQXRCOztBQUVBO0FBQ0EsUUFBSSxDQUFDLE1BQU0sTUFBWCxFQUFtQjtBQUNqQixZQUFNLEtBQU47QUFDRDtBQUNELFlBQVEsSUFBSSxLQUFKLHlCQUFnQyxTQUFTLFVBQXpDLFVBQVI7O0FBRUEsUUFBSSxFQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FBcUIsVUFBckIsQ0FBSixFQUFzQztBQUNwQyxZQUFNLGdCQUFOLENBQ0UsT0FERixFQUVFLFlBQVc7QUFDVCxhQUFLLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxhQUFLLElBQUw7QUFDRCxPQUxILEVBTUUsS0FORjtBQVFBLFlBQU0sSUFBTjtBQUNEO0FBQ0QsVUFBTSxJQUFOO0FBQ0QsR0F0QkQ7QUF1QkQsQ0F4QkQ7O0FBMEJBLFNBQVMsWUFBVCxHQUF3QixZQUFXO0FBQ2pDLElBQUUsV0FBRixFQUFlLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBVztBQUNwQyxNQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLGVBQXRCO0FBQ0QsR0FGRDtBQUdELENBSkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCB0dW5lckFwcCA9IHt9O1xuXG4kKGZ1bmN0aW9uKCkge1xuICB0dW5lckFwcC5pbml0KCk7XG59KTtcblxudHVuZXJBcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAkLmdldEpTT04oXCIuLi8uLi9hc3NldHMvbm90ZXMuanNvblwiKS50aGVuKHJlcyA9PiB7XG4gICAgdHVuZXJBcHAuZGF0YSA9IHJlcy5ndWl0YXJzO1xuICAgIHR1bmVyQXBwLm9wZW5TZXR0aW5ncygpO1xuICAgIHR1bmVyQXBwLmRpc3BsYXlHdWl0YXIoKTtcbiAgICB0dW5lckFwcC5nZXRUdW5pbmcoKTtcbiAgICB0dW5lckFwcC5wbGF5Tm90ZSgpO1xuICB9KTtcbn07XG5cbnR1bmVyQXBwLmRpc3BsYXlHdWl0YXIgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IHVzZXJzIGNob2ljZSBvZiBndWl0YXIgaWUuIDYgc3RyaW5nLCA3IHN0cmluZywgOCBzdHJpbmdcbiAgLy8gZGVmYXVsdHMgdG8gc2l4IHN0cmluZ1xuICB0dW5lckFwcC5ndWl0YXJDaG9pY2UgPSBcInNpeFN0cmluZ1wiO1xuICAkKFwiLnNpeC1zdHJpbmdcIikuZmFkZUluKCk7XG4gIHR1bmVyQXBwLnNldE5vdGVzKFwic2l4U3RyaW5nXCIsIDApO1xuICAkKFwiLmd1aXRhci1vcHRpb25cIikub24oXCJjaGFuZ2VcIiwgdHJ1ZSwgZnVuY3Rpb24oKSB7XG4gICAgdHVuZXJBcHAuZ3VpdGFyQ2hvaWNlID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XG5cbiAgICAvLyBkZWZhdWx0cyB0byBzdGFuZGFyZCB0dW5pbmdcbiAgICB0dW5lckFwcC50dW5pbmcgPSBcIlN0YW5kYXJkXCI7XG4gICAgJChcInNlbGVjdFwiKS52YWwoXCJTdGFuZGFyZFwiKTtcbiAgICAvLyBkaXNwbGF5IGNvcnJlY3QgR1VJXG4gICAgaWYgKHR1bmVyQXBwLmd1aXRhckNob2ljZSA9PT0gXCJzaXhTdHJpbmdcIikge1xuICAgICAgJChcIi5zaXgtc3RyaW5nXCIpLmZhZGVJbigpO1xuICAgICAgdHVuZXJBcHAuc2V0Tm90ZXMoXCJzaXhTdHJpbmdcIiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIuc2l4LXN0cmluZ1wiKS5mYWRlT3V0KDApO1xuICAgIH1cbiAgICBpZiAodHVuZXJBcHAuZ3VpdGFyQ2hvaWNlID09PSBcInNldmVuU3RyaW5nXCIpIHtcbiAgICAgICQoXCIuc2V2ZW4tc3RyaW5nXCIpLmZhZGVJbigpO1xuICAgICAgdHVuZXJBcHAuc2V0Tm90ZXMoXCJzZXZlblN0cmluZ1wiLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5zZXZlbi1zdHJpbmdcIikuZmFkZU91dCgwKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gcXVlcyBub3Rlc1xudHVuZXJBcHAuc2V0Tm90ZXMgPSBmdW5jdGlvbihzdHJpbmdDb3VudCwgaW5kZXhPZlR1bmluZykge1xuICB0dW5lckFwcC5zdHJpbmdzID0gJChgLiR7c3RyaW5nQ291bnR9LXN0cmluZ2ApO1xuICB0dW5lckFwcC5pbmRleE9mVHVuaW5nID0gaW5kZXhPZlR1bmluZztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0dW5lckFwcC5zdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgJCh0dW5lckFwcC5zdHJpbmdzW2ldKS5odG1sKFxuICAgICAgdHVuZXJBcHAuZGF0YVt0dW5lckFwcC5ndWl0YXJDaG9pY2VdW3R1bmVyQXBwLmluZGV4T2ZUdW5pbmddW1wibm90ZXNcIl1baV1cbiAgICApO1xuICB9XG59O1xuXG4vLyBnZXRzIHVzZXJzIHR1bmluZyBjaG9pY2VcbnR1bmVyQXBwLmdldFR1bmluZyA9IGZ1bmN0aW9uKCkge1xuICAkKGBzZWxlY3RgKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICB0dW5lckFwcC50dW5pbmcgPSAkKHRoaXMpXG4gICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcbiAgICAgIC52YWwoKTtcblxuICAgIHR1bmVyQXBwLnN0cmluZ3MgPSAkKGAuJHt0dW5lckFwcC5ndWl0YXJDaG9pY2V9LXN0cmluZ2ApO1xuXG4gICAgLy8gZmluZCB0aGUgaW5kZXggb2YgY2hvc2VuIG9wdGlvblxuICAgIHR1bmVyQXBwLmluZGV4T2ZUdW5pbmcgPSAkKHRoaXMpXG4gICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcbiAgICAgIC5pbmRleCgpO1xuXG4gICAgLy8gRGlzcGxheSBjb3JyZXNwb25kaW5nIG5vdGUgbmFtZXMgb24gZnJldCBib2FyZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHVuZXJBcHAuc3RyaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgJCh0dW5lckFwcC5zdHJpbmdzW2ldKS5odG1sKFxuICAgICAgICB0dW5lckFwcC5kYXRhW3R1bmVyQXBwLmd1aXRhckNob2ljZV1bdHVuZXJBcHAuaW5kZXhPZlR1bmluZ11bXCJub3Rlc1wiXVtpXVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufTtcblxubGV0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7XG5cbi8vIGxpc3RlbiBmb3Igc3RyaW5nIGNsaWNrXG50dW5lckFwcC5wbGF5Tm90ZSA9IGZ1bmN0aW9uKCkge1xuICAkKFwiLnN0cmluZ1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vIHBsYXkgY29ycmVjdCBzb3VuZCBjbGlwXG4gICAgdHVuZXJBcHAucGxheWVkTm90ZSA9ICQodGhpcykuaHRtbCgpO1xuXG4gICAgLy8gcGxheSBzb3VuZCBjbGlwIHVudGlsIGEgZGlmZmVyZW50IHN0cmluZyBpcyBjbGlja2VkXG4gICAgaWYgKCFhdWRpby5wYXVzZWQpIHtcbiAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgfVxuICAgIGF1ZGlvID0gbmV3IEF1ZGlvKGAuLi8uLi9hc3NldHMvbXVzaWMvJHt0dW5lckFwcC5wbGF5ZWROb3RlfS53YXZgKTtcblxuICAgIGlmICgkKFwiLmxvb3Atb3B0aW9uXCIpLmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiZW5kZWRcIixcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgICAgYXVkaW8ucGxheSgpO1xuICAgIH1cbiAgICBhdWRpby5wbGF5KCk7XG4gIH0pO1xufTtcblxudHVuZXJBcHAub3BlblNldHRpbmdzID0gZnVuY3Rpb24oKSB7XG4gICQoXCIuc2V0dGluZ3NcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAkKFwiZm9ybVwiKS50b2dnbGVDbGFzcyhcIm9wZW4tc2V0dGluZ3NcIik7XG4gIH0pO1xufTtcbiJdfQ==
