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
  tunerApp.guitarChoice = "sixString";
  $(".six-string").fadeIn();
  tunerApp.setNotes("sixString", 0);
  $("input").on("change", true, function () {
    tunerApp.guitarChoice = $(this).attr("id");
    // console.log(tunerApp.guitarChoice);

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
    // $(`select`).val('Standard');
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
$(".string").on("click", function () {
  // play correct sound clip
  tunerApp.playedNote = $(this).html();

  // play sound clip until a different string is clicked
  if (!audio.paused) {
    audio.pause();
  }
  audio = new Audio("../../assets/music/" + tunerApp.playedNote + ".wav");

  audio.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
  }, false);
  audio.play();
});

// stop button?? / if same string if clicked again, the sound clip stops

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sV0FBVyxFQUFqQjs7QUFFQSxFQUFFLFlBQVc7QUFDWCxXQUFTLElBQVQ7QUFDRCxDQUZEOztBQUlBLFNBQVMsSUFBVCxHQUFnQixZQUFXO0FBQ3pCLElBQUUsT0FBRixDQUFVLHlCQUFWLEVBQXFDLElBQXJDLENBQTBDLGVBQU87QUFDL0MsYUFBUyxJQUFULEdBQWdCLElBQUksT0FBcEI7QUFDQSxhQUFTLGFBQVQ7QUFDQSxhQUFTLFNBQVQ7QUFDRCxHQUpEO0FBS0QsQ0FORDs7QUFRQSxTQUFTLGFBQVQsR0FBeUIsWUFBVztBQUNsQztBQUNBLFdBQVMsWUFBVCxHQUF3QixXQUF4QjtBQUNBLElBQUUsYUFBRixFQUFpQixNQUFqQjtBQUNBLFdBQVMsUUFBVCxDQUFrQixXQUFsQixFQUErQixDQUEvQjtBQUNBLElBQUUsT0FBRixFQUFXLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLElBQXhCLEVBQThCLFlBQVc7QUFDdkMsYUFBUyxZQUFULEdBQXdCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxJQUFiLENBQXhCO0FBQ0E7O0FBRUE7QUFDQSxRQUFJLFNBQVMsWUFBVCxLQUEwQixXQUE5QixFQUEyQztBQUN6QyxRQUFFLGFBQUYsRUFBaUIsTUFBakI7QUFDQSxlQUFTLFFBQVQsQ0FBa0IsV0FBbEIsRUFBK0IsQ0FBL0I7QUFDRCxLQUhELE1BR087QUFDTCxRQUFFLGFBQUYsRUFBaUIsT0FBakIsQ0FBeUIsQ0FBekI7QUFDRDtBQUNELFFBQUksU0FBUyxZQUFULEtBQTBCLGFBQTlCLEVBQTZDO0FBQzNDLFFBQUUsZUFBRixFQUFtQixNQUFuQjtBQUNBLGVBQVMsUUFBVCxDQUFrQixhQUFsQixFQUFpQyxDQUFqQztBQUNELEtBSEQsTUFHTztBQUNMLFFBQUUsZUFBRixFQUFtQixPQUFuQixDQUEyQixDQUEzQjtBQUNEO0FBQ0YsR0FqQkQ7QUFrQkQsQ0F2QkQ7QUF3QkE7QUFDQSxTQUFTLFFBQVQsR0FBb0IsVUFBUyxXQUFULEVBQXNCLGFBQXRCLEVBQXFDO0FBQ3ZELFdBQVMsT0FBVCxHQUFtQixRQUFNLFdBQU4sYUFBbkI7QUFDQSxXQUFTLGFBQVQsR0FBeUIsYUFBekI7QUFDQSxPQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBUyxPQUFULENBQWlCLE1BQXJDLEVBQTZDLEdBQTdDLEVBQWtEO0FBQ2hELE1BQUUsU0FBUyxPQUFULENBQWlCLENBQWpCLENBQUYsRUFBdUIsSUFBdkIsQ0FDRSxTQUFTLElBQVQsQ0FBYyxTQUFTLFlBQXZCLEVBQXFDLFNBQVMsYUFBOUMsRUFBNkQsT0FBN0QsRUFBc0UsQ0FBdEUsQ0FERjtBQUdEO0FBQ0YsQ0FSRDs7QUFVQTtBQUNBLFNBQVMsU0FBVCxHQUFxQixZQUFXOztBQUU5QixjQUFZLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFlBQVc7QUFDbEM7QUFDQSxhQUFTLE1BQVQsR0FBa0IsRUFBRSxJQUFGLEVBQ2YsUUFEZSxDQUNOLGlCQURNLEVBRWYsR0FGZSxFQUFsQjs7QUFJQSxhQUFTLE9BQVQsR0FBbUIsUUFBTSxTQUFTLFlBQWYsYUFBbkI7O0FBRUE7QUFDQSxhQUFTLGFBQVQsR0FBeUIsRUFBRSxJQUFGLEVBQ3RCLFFBRHNCLENBQ2IsaUJBRGEsRUFFdEIsS0FGc0IsRUFBekI7O0FBSUE7QUFDQSxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBUyxPQUFULENBQWlCLE1BQXJDLEVBQTZDLEdBQTdDLEVBQWtEO0FBQ2hELFFBQUUsU0FBUyxPQUFULENBQWlCLENBQWpCLENBQUYsRUFBdUIsSUFBdkIsQ0FDRSxTQUFTLElBQVQsQ0FBYyxTQUFTLFlBQXZCLEVBQXFDLFNBQVMsYUFBOUMsRUFBNkQsT0FBN0QsRUFBc0UsQ0FBdEUsQ0FERjtBQUdEO0FBQ0YsR0FuQkQ7QUFvQkQsQ0F0QkQ7O0FBd0JBLElBQUksUUFBUSxJQUFJLEtBQUosRUFBWjs7QUFFQTtBQUNBLEVBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBVztBQUNsQztBQUNBLFdBQVMsVUFBVCxHQUFzQixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQXRCOztBQUVBO0FBQ0EsTUFBSSxDQUFDLE1BQU0sTUFBWCxFQUFtQjtBQUNqQixVQUFNLEtBQU47QUFDRDtBQUNELFVBQVEsSUFBSSxLQUFKLHlCQUFnQyxTQUFTLFVBQXpDLFVBQVI7O0FBRUEsUUFBTSxnQkFBTixDQUNFLE9BREYsRUFFRSxZQUFXO0FBQ1QsU0FBSyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsU0FBSyxJQUFMO0FBQ0QsR0FMSCxFQU1FLEtBTkY7QUFRQSxRQUFNLElBQU47QUFFRCxDQXBCRDs7QUF3QkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCB0dW5lckFwcCA9IHt9O1xuXG4kKGZ1bmN0aW9uKCkge1xuICB0dW5lckFwcC5pbml0KCk7XG59KTtcblxudHVuZXJBcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAkLmdldEpTT04oXCIuLi8uLi9hc3NldHMvbm90ZXMuanNvblwiKS50aGVuKHJlcyA9PiB7XG4gICAgdHVuZXJBcHAuZGF0YSA9IHJlcy5ndWl0YXJzO1xuICAgIHR1bmVyQXBwLmRpc3BsYXlHdWl0YXIoKTtcbiAgICB0dW5lckFwcC5nZXRUdW5pbmcoKTtcbiAgfSk7XG59O1xuXG50dW5lckFwcC5kaXNwbGF5R3VpdGFyID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCB1c2VycyBjaG9pY2Ugb2YgZ3VpdGFyIGllLiA2IHN0cmluZywgNyBzdHJpbmcsIDggc3RyaW5nXG4gIHR1bmVyQXBwLmd1aXRhckNob2ljZSA9IFwic2l4U3RyaW5nXCI7XG4gICQoXCIuc2l4LXN0cmluZ1wiKS5mYWRlSW4oKTtcbiAgdHVuZXJBcHAuc2V0Tm90ZXMoXCJzaXhTdHJpbmdcIiwgMCk7XG4gICQoXCJpbnB1dFwiKS5vbihcImNoYW5nZVwiLCB0cnVlLCBmdW5jdGlvbigpIHtcbiAgICB0dW5lckFwcC5ndWl0YXJDaG9pY2UgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0dW5lckFwcC5ndWl0YXJDaG9pY2UpO1xuXG4gICAgLy8gZGlzcGxheSBjb3JyZWN0IEdVSVxuICAgIGlmICh0dW5lckFwcC5ndWl0YXJDaG9pY2UgPT09IFwic2l4U3RyaW5nXCIpIHtcbiAgICAgICQoXCIuc2l4LXN0cmluZ1wiKS5mYWRlSW4oKTtcbiAgICAgIHR1bmVyQXBwLnNldE5vdGVzKFwic2l4U3RyaW5nXCIsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiLnNpeC1zdHJpbmdcIikuZmFkZU91dCgwKTtcbiAgICB9XG4gICAgaWYgKHR1bmVyQXBwLmd1aXRhckNob2ljZSA9PT0gXCJzZXZlblN0cmluZ1wiKSB7XG4gICAgICAkKFwiLnNldmVuLXN0cmluZ1wiKS5mYWRlSW4oKTtcbiAgICAgIHR1bmVyQXBwLnNldE5vdGVzKFwic2V2ZW5TdHJpbmdcIiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIuc2V2ZW4tc3RyaW5nXCIpLmZhZGVPdXQoMCk7XG4gICAgfVxuICB9KTtcbn07XG4vLyBxdWVzIG5vdGVzXG50dW5lckFwcC5zZXROb3RlcyA9IGZ1bmN0aW9uKHN0cmluZ0NvdW50LCBpbmRleE9mVHVuaW5nKSB7XG4gIHR1bmVyQXBwLnN0cmluZ3MgPSAkKGAuJHtzdHJpbmdDb3VudH0tc3RyaW5nYCk7XG4gIHR1bmVyQXBwLmluZGV4T2ZUdW5pbmcgPSBpbmRleE9mVHVuaW5nO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHR1bmVyQXBwLnN0cmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAkKHR1bmVyQXBwLnN0cmluZ3NbaV0pLmh0bWwoXG4gICAgICB0dW5lckFwcC5kYXRhW3R1bmVyQXBwLmd1aXRhckNob2ljZV1bdHVuZXJBcHAuaW5kZXhPZlR1bmluZ11bXCJub3Rlc1wiXVtpXVxuICAgICk7XG4gIH1cbn07XG5cbi8vIGdldHMgdXNlcnMgdHVuaW5nIGNob2ljZVxudHVuZXJBcHAuZ2V0VHVuaW5nID0gZnVuY3Rpb24oKSB7XG5cbiAgJChgc2VsZWN0YCkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gJChgc2VsZWN0YCkudmFsKCdTdGFuZGFyZCcpO1xuICAgIHR1bmVyQXBwLnR1bmluZyA9ICQodGhpcylcbiAgICAgIC5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKVxuICAgICAgLnZhbCgpO1xuXG4gICAgdHVuZXJBcHAuc3RyaW5ncyA9ICQoYC4ke3R1bmVyQXBwLmd1aXRhckNob2ljZX0tc3RyaW5nYCk7XG5cbiAgICAvLyBmaW5kIHRoZSBpbmRleCBvZiBjaG9zZW4gb3B0aW9uXG4gICAgdHVuZXJBcHAuaW5kZXhPZlR1bmluZyA9ICQodGhpcylcbiAgICAgIC5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKVxuICAgICAgLmluZGV4KCk7XG5cbiAgICAvLyBEaXNwbGF5IGNvcnJlc3BvbmRpbmcgbm90ZSBuYW1lcyBvbiBmcmV0IGJvYXJkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0dW5lckFwcC5zdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAkKHR1bmVyQXBwLnN0cmluZ3NbaV0pLmh0bWwoXG4gICAgICAgIHR1bmVyQXBwLmRhdGFbdHVuZXJBcHAuZ3VpdGFyQ2hvaWNlXVt0dW5lckFwcC5pbmRleE9mVHVuaW5nXVtcIm5vdGVzXCJdW2ldXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG59O1xuXG5sZXQgYXVkaW8gPSBuZXcgQXVkaW8oKTtcblxuLy8gbGlzdGVuIGZvciBzdHJpbmcgY2xpY2tcbiQoXCIuc3RyaW5nXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIC8vIHBsYXkgY29ycmVjdCBzb3VuZCBjbGlwXG4gIHR1bmVyQXBwLnBsYXllZE5vdGUgPSAkKHRoaXMpLmh0bWwoKTtcblxuICAvLyBwbGF5IHNvdW5kIGNsaXAgdW50aWwgYSBkaWZmZXJlbnQgc3RyaW5nIGlzIGNsaWNrZWRcbiAgaWYgKCFhdWRpby5wYXVzZWQpIHtcbiAgICBhdWRpby5wYXVzZSgpO1xuICB9XG4gIGF1ZGlvID0gbmV3IEF1ZGlvKGAuLi8uLi9hc3NldHMvbXVzaWMvJHt0dW5lckFwcC5wbGF5ZWROb3RlfS53YXZgKTtcblxuICBhdWRpby5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiZW5kZWRcIixcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xuICBhdWRpby5wbGF5KCk7IFxuXG59KTtcblxuXG5cbi8vIHN0b3AgYnV0dG9uPz8gLyBpZiBzYW1lIHN0cmluZyBpZiBjbGlja2VkIGFnYWluLCB0aGUgc291bmQgY2xpcCBzdG9wc1xuIl19
