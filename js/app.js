
//--- Click Each Skill to Reveal Corresponding Section ---//
$(document).ready(function(){

// var skills = ['html', 'css', 'js', 'jquery', 'bootstrap', 'git', 'php'];

// var selected = false;

// $("#" + skills[0] + "-button").on("click", function() {
//     selected = true;
// });

// $.each(skills, function(i, val) {
//     if (selected === true) {
//         $("#" + val + "-section").fadeToggle(400);
//         $("#" + val + "-button").fadeTo("fast", 1);
//     } else {
//         selected = false;
//         $("#" + val + "-button").fadeTo("slow", 0.30);
//         $("#" + val + "-section").hide();
//     }
// });

    $("#html-button").click(function(){
        $("#html-section").fadeToggle(400);
        $("#html-button").fadeTo("fast", 1);
        $("#css-button").fadeTo("slow", 0.30);
        $("#js-button").fadeTo("slow", 0.30);
        $("#jquery-button").fadeTo("slow", 0.30);
        $("#bootstrap-button").fadeTo("slow", 0.30);
        $("#git-button").fadeTo("slow", 0.30);
        $("#php-button").fadeTo("slow", 0.30);
        $("#css-section").hide();
        $("#js-section").hide();
        $("#jquery-section").hide();
        $("#bootstrap-section").hide();
        $("#git-section").hide();
        $("#php-section").hide();
        $("#skills h5").css('animation', 'none');
    });

    $("#css-button").click(function(){
        $("#css-section").fadeToggle(400);
        $("#css-button").fadeTo("fast", 1);
        $("#html-button").fadeTo("slow", 0.30);
        $("#js-button").fadeTo("slow", 0.30);
        $("#jquery-button").fadeTo("slow", 0.30);
        $("#bootstrap-button").fadeTo("slow", 0.30);
        $("#git-button").fadeTo("slow", 0.30);
        $("#php-button").fadeTo("slow", 0.30);
        $("#html-section").hide();
        $("#js-section").hide();
        $("#jquery-section").hide();
        $("#bootstrap-section").hide();
        $("#git-section").hide();
        $("#php-section").hide();
        $("#skills h5").css('animation', 'none');
    });

    $("#js-button").click(function(){
        $("#js-section").fadeToggle(400);
        $("#js-button").fadeTo("fast", 1);
        $("#html-button").fadeTo("slow", 0.30);
        $("#css-button").fadeTo("slow", 0.30);
        $("#jquery-button").fadeTo("slow", 0.30);
        $("#bootstrap-button").fadeTo("slow", 0.30);
        $("#git-button").fadeTo("slow", 0.30);
        $("#php-button").fadeTo("slow", 0.30);
        $("#css-section").hide();
        $("#html-section").hide();
        $("#jquery-section").hide();
        $("#bootstrap-section").hide();
        $("#git-section").hide();
        $("#php-section").hide();
        $("#skills h5").css('animation', 'none');
    });

    $("#jquery-button").click(function(){
        $("#jquery-section").fadeToggle(400);
        $("#jquery-button").fadeTo("fast", 1);
        $("#html-button").fadeTo("slow", 0.30);
        $("#css-button").fadeTo("slow", 0.30);
        $("#js-button").fadeTo("slow", 0.30);
        $("#bootstrap-button").fadeTo("slow", 0.30);
        $("#git-button").fadeTo("slow", 0.30);
        $("#php-button").fadeTo("slow", 0.30);
        $("#css-section").hide();
        $("#js-section").hide();
        $("#html-section").hide();
        $("#bootstrap-section").hide();
        $("#git-section").hide();
        $("#php-section").hide();
        $("#skills h5").css('animation', 'none');
    });

    $("#bootstrap-button").click(function(){
        $("#bootstrap-section").fadeToggle(400);
        $("#bootstrap-button").fadeTo("fast", 1);
        $("#html-button").fadeTo("slow", 0.30);
        $("#css-button").fadeTo("slow", 0.30);
        $("#js-button").fadeTo("slow", 0.30);
        $("#jquery-button").fadeTo("slow", 0.30);
        $("#git-button").fadeTo("slow", 0.30);
        $("#php-button").fadeTo("slow", 0.30);
        $("#css-section").hide();
        $("#js-section").hide();
        $("#jquery-section").hide();
        $("#html-section").hide();
        $("#git-section").hide();
        $("#php-section").hide();
        $("#skills h5").css('animation', 'none');
    });

    $("#git-button").click(function(){
        $("#git-section").fadeToggle(400);
        $("#git-button").fadeTo("fast", 1);
        $("#html-button").fadeTo("slow", 0.30);
        $("#css-button").fadeTo("slow", 0.30);
        $("#js-button").fadeTo("slow", 0.30);
        $("#jquery-button").fadeTo("slow", 0.30);
        $("#bootstrap-button").fadeTo("slow", 0.30);
        $("#php-button").fadeTo("slow", 0.30);
        $("#css-section").hide();
        $("#js-section").hide();
        $("#jquery-section").hide();
        $("#html-section").hide();
        $("#bootstrap-section").hide();
        $("#php-section").hide();
        $("#skills h5").css('animation', 'none');
    });

    $("#php-button").click(function(){
        $("#php-section").fadeToggle(400);
        $("#php-button").fadeTo("fast", 1);
        $("#html-button").fadeTo("slow", 0.30);
        $("#css-button").fadeTo("slow", 0.30);
        $("#js-button").fadeTo("slow", 0.30);
        $("#jquery-button").fadeTo("slow", 0.30);
        $("#bootstrap-button").fadeTo("slow", 0.30);
        $("#git-button").fadeTo("slow", 0.30);
        $("#css-section").hide();
        $("#js-section").hide();
        $("#jquery-section").hide();
        $("#html-section").hide();
        $("#bootstrap-section").hide();
        $("#git-section").hide();
        $("#skills h5").css('animation', 'none');
    });

    // $("#skills button").hover(function(){
    //     $(this).fadeTo("fast", .9);
    // }, function(){
    //     $(this).fadeTo("fast", 0.30);
    // });


  //--- Click Button to Reveal Full Course List ---//
  $("#full-list-button").click(function() {
    $(this).toggle();
    $(".short-course-list").toggle();
    $("#short-list-button").toggle();
    $(".full-course-list").toggle(600);
  });

  //--- Click Button to Reveal Short Course List ---//
  $("#short-list-button").click(function() {
    $(this).toggle();
    $(".full-course-list").toggle();
    $("#full-list-button").toggle();
    $(".short-course-list").toggle(200);
  });

}); //<---end document ready
