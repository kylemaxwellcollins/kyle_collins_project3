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
  $(".guitar-option").on("change", true, function () {
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

  if ($(".loop-option").is(":checked")) {
    console.log("checked");
    audio.addEventListener("ended", function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
  }
  audio.play();
});

// stop button?? / if same string if clicked again, the sound clip stops

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sV0FBVyxFQUFqQjs7QUFFQSxFQUFFLFlBQVc7QUFDWCxXQUFTLElBQVQ7QUFDRCxDQUZEOztBQUlBLFNBQVMsSUFBVCxHQUFnQixZQUFXO0FBQ3pCLElBQUUsT0FBRixDQUFVLHlCQUFWLEVBQXFDLElBQXJDLENBQTBDLGVBQU87QUFDL0MsYUFBUyxJQUFULEdBQWdCLElBQUksT0FBcEI7QUFDQSxhQUFTLGFBQVQ7QUFDQSxhQUFTLFNBQVQ7QUFDRCxHQUpEO0FBS0QsQ0FORDs7QUFRQSxTQUFTLGFBQVQsR0FBeUIsWUFBVztBQUNsQztBQUNBLFdBQVMsWUFBVCxHQUF3QixXQUF4QjtBQUNBLElBQUUsYUFBRixFQUFpQixNQUFqQjtBQUNBLFdBQVMsUUFBVCxDQUFrQixXQUFsQixFQUErQixDQUEvQjtBQUNBLElBQUUsZ0JBQUYsRUFBb0IsRUFBcEIsQ0FBdUIsUUFBdkIsRUFBaUMsSUFBakMsRUFBdUMsWUFBVztBQUNoRCxhQUFTLFlBQVQsR0FBd0IsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLElBQWIsQ0FBeEI7QUFDQTs7QUFFQTtBQUNBLFFBQUksU0FBUyxZQUFULEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3pDLFFBQUUsYUFBRixFQUFpQixNQUFqQjtBQUNBLGVBQVMsUUFBVCxDQUFrQixXQUFsQixFQUErQixDQUEvQjtBQUNELEtBSEQsTUFHTztBQUNMLFFBQUUsYUFBRixFQUFpQixPQUFqQixDQUF5QixDQUF6QjtBQUNEO0FBQ0QsUUFBSSxTQUFTLFlBQVQsS0FBMEIsYUFBOUIsRUFBNkM7QUFDM0MsUUFBRSxlQUFGLEVBQW1CLE1BQW5CO0FBQ0EsZUFBUyxRQUFULENBQWtCLGFBQWxCLEVBQWlDLENBQWpDO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsUUFBRSxlQUFGLEVBQW1CLE9BQW5CLENBQTJCLENBQTNCO0FBQ0Q7QUFDRixHQWpCRDtBQWtCRCxDQXZCRDtBQXdCQTtBQUNBLFNBQVMsUUFBVCxHQUFvQixVQUFTLFdBQVQsRUFBc0IsYUFBdEIsRUFBcUM7QUFDdkQsV0FBUyxPQUFULEdBQW1CLFFBQU0sV0FBTixhQUFuQjtBQUNBLFdBQVMsYUFBVCxHQUF5QixhQUF6QjtBQUNBLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxTQUFTLE9BQVQsQ0FBaUIsTUFBckMsRUFBNkMsR0FBN0MsRUFBa0Q7QUFDaEQsTUFBRSxTQUFTLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBRixFQUF1QixJQUF2QixDQUNFLFNBQVMsSUFBVCxDQUFjLFNBQVMsWUFBdkIsRUFBcUMsU0FBUyxhQUE5QyxFQUE2RCxPQUE3RCxFQUFzRSxDQUF0RSxDQURGO0FBR0Q7QUFDRixDQVJEOztBQVVBO0FBQ0EsU0FBUyxTQUFULEdBQXFCLFlBQVc7QUFDOUIsY0FBWSxFQUFaLENBQWUsUUFBZixFQUF5QixZQUFXO0FBQ2xDO0FBQ0EsYUFBUyxNQUFULEdBQWtCLEVBQUUsSUFBRixFQUNmLFFBRGUsQ0FDTixpQkFETSxFQUVmLEdBRmUsRUFBbEI7O0FBSUEsYUFBUyxPQUFULEdBQW1CLFFBQU0sU0FBUyxZQUFmLGFBQW5COztBQUVBO0FBQ0EsYUFBUyxhQUFULEdBQXlCLEVBQUUsSUFBRixFQUN0QixRQURzQixDQUNiLGlCQURhLEVBRXRCLEtBRnNCLEVBQXpCOztBQUlBO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFNBQVMsT0FBVCxDQUFpQixNQUFyQyxFQUE2QyxHQUE3QyxFQUFrRDtBQUNoRCxRQUFFLFNBQVMsT0FBVCxDQUFpQixDQUFqQixDQUFGLEVBQXVCLElBQXZCLENBQ0UsU0FBUyxJQUFULENBQWMsU0FBUyxZQUF2QixFQUFxQyxTQUFTLGFBQTlDLEVBQTZELE9BQTdELEVBQXNFLENBQXRFLENBREY7QUFHRDtBQUNGLEdBbkJEO0FBb0JELENBckJEOztBQXVCQSxJQUFJLFFBQVEsSUFBSSxLQUFKLEVBQVo7O0FBRUE7QUFDQSxFQUFFLFNBQUYsRUFBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFlBQVc7QUFDbEM7QUFDQSxXQUFTLFVBQVQsR0FBc0IsRUFBRSxJQUFGLEVBQVEsSUFBUixFQUF0Qjs7QUFFQTtBQUNBLE1BQUksQ0FBQyxNQUFNLE1BQVgsRUFBbUI7QUFDakIsVUFBTSxLQUFOO0FBQ0Q7QUFDRCxVQUFRLElBQUksS0FBSix5QkFBZ0MsU0FBUyxVQUF6QyxVQUFSOztBQUVBLE1BQUksRUFBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLFVBQXJCLENBQUosRUFBc0M7QUFDcEMsWUFBUSxHQUFSLENBQVksU0FBWjtBQUNBLFVBQU0sZ0JBQU4sQ0FDRSxPQURGLEVBRUUsWUFBVztBQUNULFdBQUssV0FBTCxHQUFtQixDQUFuQjtBQUNBLFdBQUssSUFBTDtBQUNELEtBTEgsRUFNRSxLQU5GO0FBUUEsVUFBTSxJQUFOO0FBQ0Q7QUFDRCxRQUFNLElBQU47QUFDRCxDQXZCRDs7QUF5QkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCB0dW5lckFwcCA9IHt9O1xuXG4kKGZ1bmN0aW9uKCkge1xuICB0dW5lckFwcC5pbml0KCk7XG59KTtcblxudHVuZXJBcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAkLmdldEpTT04oXCIuLi8uLi9hc3NldHMvbm90ZXMuanNvblwiKS50aGVuKHJlcyA9PiB7XG4gICAgdHVuZXJBcHAuZGF0YSA9IHJlcy5ndWl0YXJzO1xuICAgIHR1bmVyQXBwLmRpc3BsYXlHdWl0YXIoKTtcbiAgICB0dW5lckFwcC5nZXRUdW5pbmcoKTtcbiAgfSk7XG59O1xuXG50dW5lckFwcC5kaXNwbGF5R3VpdGFyID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCB1c2VycyBjaG9pY2Ugb2YgZ3VpdGFyIGllLiA2IHN0cmluZywgNyBzdHJpbmcsIDggc3RyaW5nXG4gIHR1bmVyQXBwLmd1aXRhckNob2ljZSA9IFwic2l4U3RyaW5nXCI7XG4gICQoXCIuc2l4LXN0cmluZ1wiKS5mYWRlSW4oKTtcbiAgdHVuZXJBcHAuc2V0Tm90ZXMoXCJzaXhTdHJpbmdcIiwgMCk7XG4gICQoXCIuZ3VpdGFyLW9wdGlvblwiKS5vbihcImNoYW5nZVwiLCB0cnVlLCBmdW5jdGlvbigpIHtcbiAgICB0dW5lckFwcC5ndWl0YXJDaG9pY2UgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0dW5lckFwcC5ndWl0YXJDaG9pY2UpO1xuXG4gICAgLy8gZGlzcGxheSBjb3JyZWN0IEdVSVxuICAgIGlmICh0dW5lckFwcC5ndWl0YXJDaG9pY2UgPT09IFwic2l4U3RyaW5nXCIpIHtcbiAgICAgICQoXCIuc2l4LXN0cmluZ1wiKS5mYWRlSW4oKTtcbiAgICAgIHR1bmVyQXBwLnNldE5vdGVzKFwic2l4U3RyaW5nXCIsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiLnNpeC1zdHJpbmdcIikuZmFkZU91dCgwKTtcbiAgICB9XG4gICAgaWYgKHR1bmVyQXBwLmd1aXRhckNob2ljZSA9PT0gXCJzZXZlblN0cmluZ1wiKSB7XG4gICAgICAkKFwiLnNldmVuLXN0cmluZ1wiKS5mYWRlSW4oKTtcbiAgICAgIHR1bmVyQXBwLnNldE5vdGVzKFwic2V2ZW5TdHJpbmdcIiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIuc2V2ZW4tc3RyaW5nXCIpLmZhZGVPdXQoMCk7XG4gICAgfVxuICB9KTtcbn07XG4vLyBxdWVzIG5vdGVzXG50dW5lckFwcC5zZXROb3RlcyA9IGZ1bmN0aW9uKHN0cmluZ0NvdW50LCBpbmRleE9mVHVuaW5nKSB7XG4gIHR1bmVyQXBwLnN0cmluZ3MgPSAkKGAuJHtzdHJpbmdDb3VudH0tc3RyaW5nYCk7XG4gIHR1bmVyQXBwLmluZGV4T2ZUdW5pbmcgPSBpbmRleE9mVHVuaW5nO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHR1bmVyQXBwLnN0cmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAkKHR1bmVyQXBwLnN0cmluZ3NbaV0pLmh0bWwoXG4gICAgICB0dW5lckFwcC5kYXRhW3R1bmVyQXBwLmd1aXRhckNob2ljZV1bdHVuZXJBcHAuaW5kZXhPZlR1bmluZ11bXCJub3Rlc1wiXVtpXVxuICAgICk7XG4gIH1cbn07XG5cbi8vIGdldHMgdXNlcnMgdHVuaW5nIGNob2ljZVxudHVuZXJBcHAuZ2V0VHVuaW5nID0gZnVuY3Rpb24oKSB7XG4gICQoYHNlbGVjdGApLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vICQoYHNlbGVjdGApLnZhbCgnU3RhbmRhcmQnKTtcbiAgICB0dW5lckFwcC50dW5pbmcgPSAkKHRoaXMpXG4gICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcbiAgICAgIC52YWwoKTtcblxuICAgIHR1bmVyQXBwLnN0cmluZ3MgPSAkKGAuJHt0dW5lckFwcC5ndWl0YXJDaG9pY2V9LXN0cmluZ2ApO1xuXG4gICAgLy8gZmluZCB0aGUgaW5kZXggb2YgY2hvc2VuIG9wdGlvblxuICAgIHR1bmVyQXBwLmluZGV4T2ZUdW5pbmcgPSAkKHRoaXMpXG4gICAgICAuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIilcbiAgICAgIC5pbmRleCgpO1xuXG4gICAgLy8gRGlzcGxheSBjb3JyZXNwb25kaW5nIG5vdGUgbmFtZXMgb24gZnJldCBib2FyZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHVuZXJBcHAuc3RyaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgJCh0dW5lckFwcC5zdHJpbmdzW2ldKS5odG1sKFxuICAgICAgICB0dW5lckFwcC5kYXRhW3R1bmVyQXBwLmd1aXRhckNob2ljZV1bdHVuZXJBcHAuaW5kZXhPZlR1bmluZ11bXCJub3Rlc1wiXVtpXVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufTtcblxubGV0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7XG5cbi8vIGxpc3RlbiBmb3Igc3RyaW5nIGNsaWNrXG4kKFwiLnN0cmluZ1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAvLyBwbGF5IGNvcnJlY3Qgc291bmQgY2xpcFxuICB0dW5lckFwcC5wbGF5ZWROb3RlID0gJCh0aGlzKS5odG1sKCk7XG5cbiAgLy8gcGxheSBzb3VuZCBjbGlwIHVudGlsIGEgZGlmZmVyZW50IHN0cmluZyBpcyBjbGlja2VkXG4gIGlmICghYXVkaW8ucGF1c2VkKSB7XG4gICAgYXVkaW8ucGF1c2UoKTtcbiAgfVxuICBhdWRpbyA9IG5ldyBBdWRpbyhgLi4vLi4vYXNzZXRzL211c2ljLyR7dHVuZXJBcHAucGxheWVkTm90ZX0ud2F2YCk7XG5cbiAgaWYgKCQoXCIubG9vcC1vcHRpb25cIikuaXMoXCI6Y2hlY2tlZFwiKSkge1xuICAgIGNvbnNvbGUubG9nKFwiY2hlY2tlZFwiKTtcbiAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJlbmRlZFwiLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgYXVkaW8ucGxheSgpO1xuICB9XG4gIGF1ZGlvLnBsYXkoKTtcbn0pO1xuXG4vLyBzdG9wIGJ1dHRvbj8/IC8gaWYgc2FtZSBzdHJpbmcgaWYgY2xpY2tlZCBhZ2FpbiwgdGhlIHNvdW5kIGNsaXAgc3RvcHNcbiJdfQ==
