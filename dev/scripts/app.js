const tunerApp = {};

$(function() {
  tunerApp.init();
});

tunerApp.init = function() {
  $.getJSON("../../assets/notes.json").then(res => {
    tunerApp.data = res.guitars;
    tunerApp.openSettings();
    tunerApp.displayGuitar();
    tunerApp.getTuning();
    tunerApp.playNote();
  });
};

tunerApp.displayGuitar = function() {
  // get users choice of guitar ie. 6 string, 7 string, 8 string
  // defaults to six string
  tunerApp.guitarChoice = "sixString";
  $(".six-string").fadeIn();
  tunerApp.setNotes("sixString", 0);
  $(".guitar-option").on("change", true, function() {
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
tunerApp.setNotes = function(stringCount, indexOfTuning) {
  tunerApp.strings = $(`.${stringCount}-string`);
  tunerApp.indexOfTuning = indexOfTuning;
  for (let i = 0; i < tunerApp.strings.length; i++) {
    $(tunerApp.strings[i]).html(
      tunerApp.data[tunerApp.guitarChoice][tunerApp.indexOfTuning]["notes"][i]
    );
  }
};

// gets users tuning choice
tunerApp.getTuning = function() {
  $(`select`).on("change", function() {
    // $(`select`).val('Standard');
    tunerApp.tuning = $(this)
      .children("option:selected")
      .val();

    tunerApp.strings = $(`.${tunerApp.guitarChoice}-string`);

    // find the index of chosen option
    tunerApp.indexOfTuning = $(this)
      .children("option:selected")
      .index();

    // Display corresponding note names on fret board
    for (let i = 0; i < tunerApp.strings.length; i++) {
      $(tunerApp.strings[i]).html(
        tunerApp.data[tunerApp.guitarChoice][tunerApp.indexOfTuning]["notes"][i]
      );
    }
  });
};

let audio = new Audio();

// listen for string click
tunerApp.playNote = function() {
  $(".string").on("click", function() {
    // play correct sound clip
    tunerApp.playedNote = $(this).html();

    // play sound clip until a different string is clicked
    if (!audio.paused) {
      audio.pause();
    }
    audio = new Audio(`../../assets/music/${tunerApp.playedNote}.wav`);

    if ($(".loop-option").is(":checked")) {
      console.log("checked");
      audio.addEventListener(
        "ended",
        function() {
          this.currentTime = 0;
          this.play();
        },
        false
      );
      audio.play();
    }
    audio.play();
  });
};

tunerApp.openSettings = function() {
  $(".settings").on("click", function() {
    $("form").toggleClass("open-settings");
  });
};

// stop button?? / if same string if clicked again, the sound clip stops
