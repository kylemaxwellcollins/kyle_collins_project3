const tunerApp = {};

$(function() {
  tunerApp.init();
});

tunerApp.init = function() {
  $.getJSON("../../assets/notes.json").then(res => {
    tunerApp.data = res.guitars;
    tunerApp.displayGuitar();
    tunerApp.getTuning();
  });
};

tunerApp.displayGuitar = function() {
  // get users choice of guitar ie. 6 string, 7 string, 8 string
  $("input").on("change", true, function() {
    tunerApp.guitarChoice = $(this).attr("id");
    console.log(tunerApp.guitarChoice);

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
tunerApp.getTuning = function() {
  $(`select`).on("change", function() {
    tunerApp.tuning = $(this)
      .children("option:selected")
      .val();
    console.log(tunerApp.tuning);

    // Display corresponding note names on fret board
    // cues notes from chosen tuning
  });
};

// listen for string click
$(".string").on("click", function() {
  console.log("play sound");
  // play correct sound clip
  // play sound clip until a different string is clicked
});

// stop button?? / if same sting if clicked again, the sound clip stops
