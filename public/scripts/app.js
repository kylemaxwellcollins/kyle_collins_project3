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
      console.log("checked");
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

// stop button?? / if same string if clicked again, the sound clip stops

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sV0FBVyxFQUFqQjs7QUFFQSxFQUFFLFlBQVc7QUFDWCxXQUFTLElBQVQ7QUFDRCxDQUZEOztBQUlBLFNBQVMsSUFBVCxHQUFnQixZQUFXO0FBQ3pCLElBQUUsT0FBRixDQUFVLHlCQUFWLEVBQXFDLElBQXJDLENBQTBDLGVBQU87QUFDL0MsYUFBUyxJQUFULEdBQWdCLElBQUksT0FBcEI7QUFDQSxhQUFTLFlBQVQ7QUFDQSxhQUFTLGFBQVQ7QUFDQSxhQUFTLFNBQVQ7QUFDQSxhQUFTLFFBQVQ7QUFDRCxHQU5EO0FBT0QsQ0FSRDs7QUFVQSxTQUFTLGFBQVQsR0FBeUIsWUFBVztBQUNsQztBQUNBO0FBQ0EsV0FBUyxZQUFULEdBQXdCLFdBQXhCO0FBQ0EsSUFBRSxhQUFGLEVBQWlCLE1BQWpCO0FBQ0EsV0FBUyxRQUFULENBQWtCLFdBQWxCLEVBQStCLENBQS9CO0FBQ0EsSUFBRSxnQkFBRixFQUFvQixFQUFwQixDQUF1QixRQUF2QixFQUFpQyxJQUFqQyxFQUF1QyxZQUFXO0FBQ2hELGFBQVMsWUFBVCxHQUF3QixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsSUFBYixDQUF4Qjs7QUFFQTtBQUNBLGFBQVMsTUFBVCxHQUFrQixVQUFsQjtBQUNBLE1BQUUsUUFBRixFQUFZLEdBQVosQ0FBZ0IsVUFBaEI7QUFDQTtBQUNBLFFBQUksU0FBUyxZQUFULEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3pDLFFBQUUsYUFBRixFQUFpQixNQUFqQjtBQUNBLGVBQVMsUUFBVCxDQUFrQixXQUFsQixFQUErQixDQUEvQjtBQUNELEtBSEQsTUFHTztBQUNMLFFBQUUsYUFBRixFQUFpQixPQUFqQixDQUF5QixDQUF6QjtBQUNEO0FBQ0QsUUFBSSxTQUFTLFlBQVQsS0FBMEIsYUFBOUIsRUFBNkM7QUFDM0MsUUFBRSxlQUFGLEVBQW1CLE1BQW5CO0FBQ0EsZUFBUyxRQUFULENBQWtCLGFBQWxCLEVBQWlDLENBQWpDO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsUUFBRSxlQUFGLEVBQW1CLE9BQW5CLENBQTJCLENBQTNCO0FBQ0Q7QUFDRixHQW5CRDtBQW9CRCxDQTFCRDs7QUE0QkE7QUFDQSxTQUFTLFFBQVQsR0FBb0IsVUFBUyxXQUFULEVBQXNCLGFBQXRCLEVBQXFDO0FBQ3ZELFdBQVMsT0FBVCxHQUFtQixRQUFNLFdBQU4sYUFBbkI7QUFDQSxXQUFTLGFBQVQsR0FBeUIsYUFBekI7QUFDQSxPQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBUyxPQUFULENBQWlCLE1BQXJDLEVBQTZDLEdBQTdDLEVBQWtEO0FBQ2hELE1BQUUsU0FBUyxPQUFULENBQWlCLENBQWpCLENBQUYsRUFBdUIsSUFBdkIsQ0FDRSxTQUFTLElBQVQsQ0FBYyxTQUFTLFlBQXZCLEVBQXFDLFNBQVMsYUFBOUMsRUFBNkQsT0FBN0QsRUFBc0UsQ0FBdEUsQ0FERjtBQUdEO0FBQ0YsQ0FSRDs7QUFVQTtBQUNBLFNBQVMsU0FBVCxHQUFxQixZQUFXO0FBQzlCLGNBQVksRUFBWixDQUFlLFFBQWYsRUFBeUIsWUFBVztBQUNsQztBQUNBLGFBQVMsTUFBVCxHQUFrQixFQUFFLElBQUYsRUFDZixRQURlLENBQ04saUJBRE0sRUFFZixHQUZlLEVBQWxCOztBQUlBLGFBQVMsT0FBVCxHQUFtQixRQUFNLFNBQVMsWUFBZixhQUFuQjs7QUFFQTtBQUNBLGFBQVMsYUFBVCxHQUF5QixFQUFFLElBQUYsRUFDdEIsUUFEc0IsQ0FDYixpQkFEYSxFQUV0QixLQUZzQixFQUF6Qjs7QUFJQTtBQUNBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxTQUFTLE9BQVQsQ0FBaUIsTUFBckMsRUFBNkMsR0FBN0MsRUFBa0Q7QUFDaEQsUUFBRSxTQUFTLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBRixFQUF1QixJQUF2QixDQUNFLFNBQVMsSUFBVCxDQUFjLFNBQVMsWUFBdkIsRUFBcUMsU0FBUyxhQUE5QyxFQUE2RCxPQUE3RCxFQUFzRSxDQUF0RSxDQURGO0FBR0Q7QUFDRixHQW5CRDtBQW9CRCxDQXJCRDs7QUF1QkEsSUFBSSxRQUFRLElBQUksS0FBSixFQUFaOztBQUVBO0FBQ0EsU0FBUyxRQUFULEdBQW9CLFlBQVc7QUFDN0IsSUFBRSxTQUFGLEVBQWEsRUFBYixDQUFnQixPQUFoQixFQUF5QixZQUFXO0FBQ2xDO0FBQ0EsYUFBUyxVQUFULEdBQXNCLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBdEI7O0FBRUE7QUFDQSxRQUFJLENBQUMsTUFBTSxNQUFYLEVBQW1CO0FBQ2pCLFlBQU0sS0FBTjtBQUNEO0FBQ0QsWUFBUSxJQUFJLEtBQUoseUJBQWdDLFNBQVMsVUFBekMsVUFBUjs7QUFFQSxRQUFJLEVBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixVQUFyQixDQUFKLEVBQXNDO0FBQ3BDLGNBQVEsR0FBUixDQUFZLFNBQVo7QUFDQSxZQUFNLGdCQUFOLENBQ0UsT0FERixFQUVFLFlBQVc7QUFDVCxhQUFLLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxhQUFLLElBQUw7QUFDRCxPQUxILEVBTUUsS0FORjtBQVFBLFlBQU0sSUFBTjtBQUNEO0FBQ0QsVUFBTSxJQUFOO0FBQ0QsR0F2QkQ7QUF3QkQsQ0F6QkQ7O0FBMkJBLFNBQVMsWUFBVCxHQUF3QixZQUFXO0FBQ2pDLElBQUUsV0FBRixFQUFlLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBVztBQUNwQyxNQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLGVBQXRCO0FBQ0QsR0FGRDtBQUdELENBSkQ7O0FBTUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCB0dW5lckFwcCA9IHt9O1xuXG4kKGZ1bmN0aW9uKCkge1xuICB0dW5lckFwcC5pbml0KCk7XG59KTtcblxudHVuZXJBcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAkLmdldEpTT04oXCIuLi8uLi9hc3NldHMvbm90ZXMuanNvblwiKS50aGVuKHJlcyA9PiB7XG4gICAgdHVuZXJBcHAuZGF0YSA9IHJlcy5ndWl0YXJzO1xuICAgIHR1bmVyQXBwLm9wZW5TZXR0aW5ncygpO1xuICAgIHR1bmVyQXBwLmRpc3BsYXlHdWl0YXIoKTtcbiAgICB0dW5lckFwcC5nZXRUdW5pbmcoKTtcbiAgICB0dW5lckFwcC5wbGF5Tm90ZSgpO1xuICB9KTtcbn07XG5cbnR1bmVyQXBwLmRpc3BsYXlHdWl0YXIgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IHVzZXJzIGNob2ljZSBvZiBndWl0YXIgaWUuIDYgc3RyaW5nLCA3IHN0cmluZywgOCBzdHJpbmdcbiAgLy8gZGVmYXVsdHMgdG8gc2l4IHN0cmluZ1xuICB0dW5lckFwcC5ndWl0YXJDaG9pY2UgPSBcInNpeFN0cmluZ1wiO1xuICAkKFwiLnNpeC1zdHJpbmdcIikuZmFkZUluKCk7XG4gIHR1bmVyQXBwLnNldE5vdGVzKFwic2l4U3RyaW5nXCIsIDApO1xuICAkKFwiLmd1aXRhci1vcHRpb25cIikub24oXCJjaGFuZ2VcIiwgdHJ1ZSwgZnVuY3Rpb24oKSB7XG4gICAgdHVuZXJBcHAuZ3VpdGFyQ2hvaWNlID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XG5cbiAgICAvLyBkZWZhdWx0cyB0byBzdGFuZGFyZCB0dW5pbmdcbiAgICB0dW5lckFwcC50dW5pbmcgPSBcIlN0YW5kYXJkXCI7XG4gICAgJChcInNlbGVjdFwiKS52YWwoXCJTdGFuZGFyZFwiKTtcbiAgICAvLyBkaXNwbGF5IGNvcnJlY3QgR1VJXG4gICAgaWYgKHR1bmVyQXBwLmd1aXRhckNob2ljZSA9PT0gXCJzaXhTdHJpbmdcIikge1xuICAgICAgJChcIi5zaXgtc3RyaW5nXCIpLmZhZGVJbigpO1xuICAgICAgdHVuZXJBcHAuc2V0Tm90ZXMoXCJzaXhTdHJpbmdcIiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIuc2l4LXN0cmluZ1wiKS5mYWRlT3V0KDApO1xuICAgIH1cbiAgICBpZiAodHVuZXJBcHAuZ3VpdGFyQ2hvaWNlID09PSBcInNldmVuU3RyaW5nXCIpIHtcbiAgICAgICQoXCIuc2V2ZW4tc3RyaW5nXCIpLmZhZGVJbigpO1xuICAgICAgdHVuZXJBcHAuc2V0Tm90ZXMoXCJzZXZlblN0cmluZ1wiLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5zZXZlbi1zdHJpbmdcIikuZmFkZU91dCgwKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gcXVlcyBub3Rlc1xudHVuZXJBcHAuc2V0Tm90ZXMgPSBmdW5jdGlvbihzdHJpbmdDb3VudCwgaW5kZXhPZlR1bmluZykge1xuICB0dW5lckFwcC5zdHJpbmdzID0gJChgLiR7c3RyaW5nQ291bnR9LXN0cmluZ2ApO1xuICB0dW5lckFwcC5pbmRleE9mVHVuaW5nID0gaW5kZXhPZlR1bmluZztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0dW5lckFwcC5zdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgJCh0dW5lckFwcC5zdHJpbmdzW2ldKS5odG1sKFxuICAgICAgdHVuZXJBcHAuZGF0YVt0dW5lckFwcC5ndWl0YXJDaG9pY2VdW3R1bmVyQXBwLmluZGV4T2ZUdW5pbmddW1wibm90ZXNcIl1baV1cbiAgICApO1xuICB9XG59O1xuXG4vLyBnZXRzIHVzZXJzIHR1bmluZyBjaG9pY2VcbnR1bmVyQXBwLmdldFR1bmluZyA9IGZ1bmN0aW9uKCkge1xuICAkKGBzZWxlY3RgKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAvLyAkKGBzZWxlY3RgKS52YWwoJ1N0YW5kYXJkJyk7XG4gICAgdHVuZXJBcHAudHVuaW5nID0gJCh0aGlzKVxuICAgICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXG4gICAgICAudmFsKCk7XG5cbiAgICB0dW5lckFwcC5zdHJpbmdzID0gJChgLiR7dHVuZXJBcHAuZ3VpdGFyQ2hvaWNlfS1zdHJpbmdgKTtcblxuICAgIC8vIGZpbmQgdGhlIGluZGV4IG9mIGNob3NlbiBvcHRpb25cbiAgICB0dW5lckFwcC5pbmRleE9mVHVuaW5nID0gJCh0aGlzKVxuICAgICAgLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpXG4gICAgICAuaW5kZXgoKTtcblxuICAgIC8vIERpc3BsYXkgY29ycmVzcG9uZGluZyBub3RlIG5hbWVzIG9uIGZyZXQgYm9hcmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHR1bmVyQXBwLnN0cmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICQodHVuZXJBcHAuc3RyaW5nc1tpXSkuaHRtbChcbiAgICAgICAgdHVuZXJBcHAuZGF0YVt0dW5lckFwcC5ndWl0YXJDaG9pY2VdW3R1bmVyQXBwLmluZGV4T2ZUdW5pbmddW1wibm90ZXNcIl1baV1cbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn07XG5cbmxldCBhdWRpbyA9IG5ldyBBdWRpbygpO1xuXG4vLyBsaXN0ZW4gZm9yIHN0cmluZyBjbGlja1xudHVuZXJBcHAucGxheU5vdGUgPSBmdW5jdGlvbigpIHtcbiAgJChcIi5zdHJpbmdcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBwbGF5IGNvcnJlY3Qgc291bmQgY2xpcFxuICAgIHR1bmVyQXBwLnBsYXllZE5vdGUgPSAkKHRoaXMpLmh0bWwoKTtcblxuICAgIC8vIHBsYXkgc291bmQgY2xpcCB1bnRpbCBhIGRpZmZlcmVudCBzdHJpbmcgaXMgY2xpY2tlZFxuICAgIGlmICghYXVkaW8ucGF1c2VkKSB7XG4gICAgICBhdWRpby5wYXVzZSgpO1xuICAgIH1cbiAgICBhdWRpbyA9IG5ldyBBdWRpbyhgLi4vLi4vYXNzZXRzL211c2ljLyR7dHVuZXJBcHAucGxheWVkTm90ZX0ud2F2YCk7XG5cbiAgICBpZiAoJChcIi5sb29wLW9wdGlvblwiKS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNoZWNrZWRcIik7XG4gICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImVuZGVkXCIsXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9LFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICB9XG4gICAgYXVkaW8ucGxheSgpO1xuICB9KTtcbn07XG5cbnR1bmVyQXBwLm9wZW5TZXR0aW5ncyA9IGZ1bmN0aW9uKCkge1xuICAkKFwiLnNldHRpbmdzXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgJChcImZvcm1cIikudG9nZ2xlQ2xhc3MoXCJvcGVuLXNldHRpbmdzXCIpO1xuICB9KTtcbn07XG5cbi8vIHN0b3AgYnV0dG9uPz8gLyBpZiBzYW1lIHN0cmluZyBpZiBjbGlja2VkIGFnYWluLCB0aGUgc291bmQgY2xpcCBzdG9wc1xuIl19
