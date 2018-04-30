var bar1, bar2, calendar;
var relation = 50,
    exposure = 1,
    day = 0;
var status = "background";
var witnessed = false;


$(document).ready(function () {

    bar1 = $("#bar1");
    bar2 = $("#bar2");
    calendar = $("#day");



    $("#start").click(function () {
        $("#homepage").addClass("hidden");
        $("#mainpage").removeClass("hidden");
    })

    // ----- background stories -----

    $("#Background1-continue").click(function () {
        $("#Background1").addClass("hidden");
        $("#Background1").removeClass("center");
        $("#Background2").addClass("center");
        $("#Background2").removeClass("hidden");

    })

    $("#Background2-continue").click(function () {
        $("#Background2").addClass("hidden");
        $("#Background2").removeClass("center");
        $("#Background3").addClass("center");
        $("#Background3").removeClass("hidden");
        updateBar();

    })

    $('[id="skip"]').click(function () {
        $("#Background1").addClass("hidden");
        $("#Background1").removeClass("center");
        $("#Background2").addClass("hidden");
        $("#Background2").removeClass("center");
        $("#Background3").addClass("hidden");
        $("#Background3").removeClass("center");

        $("#Monday").addClass("center");
        $("#Monday").removeClass("hidden");
        day = day + 1
        status = "Monday"
        updateBar();

    })

    // ----- Monday/Wednesday -----

    $('[id="text"]').click(function () {
        $("#Monday").addClass("hidden");
        $("#Monday").removeClass("center");
        $("#Wednesday").addClass("hidden");
        $("#Wednesday").removeClass("center");
        $("#Text").addClass("center");
        $("#Text").removeClass("hidden");
        relation = relation + 2.5;
        updateBar();
    })

    $('[id="playground"]').click(function () {
        $("#Monday").addClass("hidden");
        $("#Monday").removeClass("center");
        $("#Wednesday").addClass("hidden");
        $("#Wednesday").removeClass("center");
        $("#Playground").addClass("center");
        $("#Playground").removeClass("hidden");
        relation = relation + 5;
        exposure = exposure + 10;
        updateBar();
    })

    $('[id="classroom"]').click(function () {
        $("#Monday").addClass("hidden");
        $("#Monday").removeClass("center");
        $("#Wednesday").addClass("hidden");
        $("#Wednesday").removeClass("center");
        $("#Classroom").addClass("center");
        $("#Classroom").removeClass("hidden");
        relation = relation + 10;
        exposure = exposure + 25;
        updateBar();
    })

    $('[id="noContact"]').click(function () {
        $("#Monday").addClass("hidden");
        $("#Monday").removeClass("center");
        $("#Wednesday").addClass("hidden");
        $("#Wednesday").removeClass("center");
        $("#End").addClass("center");
        $("#End").removeClass("hidden");
        relation = relation - 15;
        exposure = exposure - 10;
        updateBar();
    })

    $('#hold').click(function () {
        $("#Playground").addClass("hidden");
        $("#Playground").removeClass("center");
        $("#Hold").addClass("center");
        $("#Hold").removeClass("hidden");
        relation = relation + 10;
        updateBar();
    })

    $('#noHold').click(function () {
        $("#Playground").addClass("hidden");
        $("#Playground").removeClass("center");
        $("#NotHold").addClass("center");
        $("#NotHold").removeClass("hidden");
    })

    $('#risk1').click(function () {
        $("#Text").addClass("hidden");
        $("#Text").removeClass("center");
        didYouExpose(20);
        if (witnessed === true) {
            $("#Gossip").addClass("center");
            $("#Gossip").removeClass("hidden");
            $("#gossipContent").text("I saw you were texting Zach today. Sorry, I didn't mean to read your texts. But I accidentally saw it. And the words you said were very flirting!!!")
            exposure = exposure + 40;
            updateBar();
        } else {
            if (status === "Monday") {
                $("#Tuesday").addClass("center");
                $("#Tuesday").removeClass("hidden");
                status = "Tuesday";
            }

            if (status === "Wednesday") {
                $("#Thursday").addClass("center");
                $("#Thursday").removeClass("hidden");
                status = "Thursday"
            }
            day = day + 1;
            updateBar();
            checkEnding();
        }
    })

    $('#risk2').click(function () {
        $("#Hold").addClass("hidden");
        $("#Hold").removeClass("center");
        didYouExpose(40);
        if (witnessed === true) {
            $("#Gossip").addClass("center");
            $("#Gossip").removeClass("hidden");
            $("#gossipContent").text("Tonight, I saw you and Zach holding hands on the playground!!!!")
            exposure = exposure + 40;
            updateBar();
        } else {
            if (status === "Monday") {
                $("#Tuesday").addClass("center");
                $("#Tuesday").removeClass("hidden");
                status = "Tuesday";
            }

            if (status === "Wednesday") {
                $("#Thursday").addClass("center");
                $("#Thursday").removeClass("hidden");
                status = "Thursday"
            }
            day = day + 1;
            updateBar();
            checkEnding();
        }
    })

    $("#gossip-next").click(function () {
        $("#Gossip").addClass("hidden");
        $("#Gossip").removeClass("center");
        $("#Gossip2").addClass("center");
        $("#Gossip2").removeClass("hidden");
    })

    $('[id="end1"]').click(function () {
        $("#Gossip2").addClass("hidden");
        $("#Gossip2").removeClass("center");
        $("#Classroom").addClass("hidden");
        $("#Classroom").removeClass("center");
        $("#NotHold").addClass("hidden");
        $("#NotHold").removeClass("center");
        if (status === "Monday") {
            $("#Tuesday").addClass("center");
            $("#Tuesday").removeClass("hidden");
            status = "Tuesday";
        }

        if (status === "Wednesday") {
            $("#Thursday").addClass("center");
            $("#Thursday").removeClass("hidden");
            status = "Thursday"
        }
        witnessed = false;
        day = day + 1;
        updateBar();
        checkEnding();

    })

    // ----- Tuesday/Thursday -----

    $('[id="besideSomeone"]').click(function () {
        $("#Tuesday").addClass("hidden");
        $("#Tuesday").removeClass("center");
        $("#Thursday").addClass("hidden");
        $("#Thursday").removeClass("center");
        $("#BesideSomeone").addClass("center");
        $("#BesideSomeone").removeClass("hidden");
        relation = relation - 15;
        exposure = exposure - 10;
        updateBar();
    })

    $('[id="besideZach"]').click(function () {
        $("#Tuesday").addClass("hidden");
        $("#Tuesday").removeClass("center");
        $("#Thursday").addClass("hidden");
        $("#Thursday").removeClass("center");
        $("#BesideZach").addClass("center");
        $("#BesideZach").removeClass("hidden");
        relation = relation + 10;
        exposure = exposure + 20;
        updateBar();
    })

    $('[id="end3"]').click(function () {
        $("#BesideSomeone").addClass("hidden");
        $("#BesideSomeone").removeClass("center");
        $("#BesideZach").addClass("hidden");
        $("#BesideZach").removeClass("center");
        if (status === "Tuesday") {
            $("#Wednesday").addClass("center");
            $("#Wednesday").removeClass("hidden");
            status = "Wednesday";
        }

        if (status === "Thursday") {
            $("#Friday").addClass("center");
            $("#Friday").removeClass("hidden");
            status = "Friday"
        }
        day = day + 1;
        updateBar();
        checkEnding();

    })
    
    // ----- Friday -----
    
    $("#date").click(function () {
       $("#Friday").addClass("hidden");
        $("#Friday").removeClass("center");
        $("#Date").addClass("center");
        $("#Date").removeClass("hidden");
        
    })
    
      $("#notDate").click(function () {
       $("#Friday").addClass("hidden");
        $("#Friday").removeClass("center");
        $("#End").addClass("center");
        $("#End").removeClass("hidden");
        relation = relation - 20;
        exposure = exposure - 10;
        updateBar();
    })

    
    $("#movie").click(function () {
         $("#Date").addClass("hidden");
        $("#Date").removeClass("center");
        $("#Movie").addClass("center");
        $("#Movie").removeClass("hidden");
        relation = relation + 10;
        exposure = exposure + 20;
        updateBar();
     })
    
     $("#woods").click(function () {
         $("#Date").addClass("hidden");
        $("#Date").removeClass("center");
        $("#Woods").addClass("center");
        $("#Woods").removeClass("hidden"); 
        exposure = exposure + 10;
        updateBar();
     })
    
    $('#kiss1').click(function () {
         $("#Movie").addClass("hidden");
        $("#Movie").removeClass("center");
        $("#AfterKiss").addClass("center");
        $("#AfterKiss").removeClass("hidden");
        didYouExpose(45);
        $("#jeremy").text("Do you know what I saw today? I saw you and Zach kissed in the movie theater!!!");
        relation = relation + 20;
        updateBar();  
     })
    
     $('#kiss2').click(function () {
        $("#Woods").addClass("hidden");
        $("#Woods").removeClass("center");
        $("#AfterKiss").addClass("center");
        $("#AfterKiss").removeClass("hidden");
        didYouExpose(30);
        $("#jeremy").text("Do you know what I saw today? I saw you and Zach kissed in the woods near our campus!!!");
        relation = relation + 15;
        updateBar();  
     })
      
    
     $("#afterMovie").click(function () {
         $("#Movie").addClass("hidden");
        $("#Movie").removeClass("center");
        $("#AfterMovie").addClass("center");
        $("#AfterMovie").removeClass("hidden"); 
     })
    
     $("#outWoods").click(function () {
         $("#Woods").addClass("hidden");
        $("#Woods").removeClass("center");
        $("#OutWoods").addClass("center");
        $("#OutWoods").removeClass("hidden"); 
         relation = relation - 35;
         updateBar();
     })
    
    $('[id="end4"]').click(function() {
      $("#OutWoods").addClass("hidden");
        $("#OutWoods").removeClass("center");
         $("#AfterMovie").addClass("hidden");
        $("#AfterMovie").removeClass("center");
        $("#AfterKiss").addClass("hidden");
        $("#AfterKiss").removeClass("center");
         $("#Expose2").addClass("hidden");
        $("#Expose2").removeClass("center"); 
        if (witnessed === false) {
        $("#Saturday").addClass("center");
        $("#Saturday").removeClass("hidden"); 
        status = "Saturday";
        day = day + 1 ; 
        checkEnding();
        } else {
        $("#Expose").addClass("center");
        $("#Expose").removeClass("hidden"); 
        exposure = exposure + 60;
        witnessed = false;
        }
        
        updateBar();
        
    })
    
    $("#expose-next").click(function() {
      $("#Expose").addClass("hidden");
        $("#Expose").removeClass("center"); 
         $("#Expose2").addClass("center");
        $("#Expose2").removeClass("hidden"); 
    })
    
     // ----- Saturday -----
    
     $("#come").click(function() {
      $("#Saturday").addClass("hidden");
      $("#Saturday").removeClass("center"); 
      $("#End").addClass("center");
      $("#End").removeClass("hidden");
         relation = relation - 20;
         exposure = exposure - 10;
         updateBar();
    })
    
     $("#comeWithZach").click(function() {
      $("#Saturday").addClass("hidden");
      $("#Saturday").removeClass("center"); 
      $("#GoWithZach").addClass("center");
      $("#GoWithZach").removeClass("hidden");
    })
    
     $("#notCome").click(function() {
      $("#Saturday").addClass("hidden");
      $("#Saturday").removeClass("center"); 
      $("#DontGo").addClass("center");
      $("#DontGo").removeClass("hidden"); 
         exposure = exposure + 25;
         relation = relation + 15;
         updateBar();
    })
    
     $("#GoWithZach-next").click(function() {
       $("#GoWithZach").addClass("hidden");
      $("#GoWithZach").removeClass("center"); 
      $("#TruthOrDare").addClass("center");
      $("#TruthOrDare").removeClass("hidden");    
     })
    
     $("#truth").click(function() {
       $("#TruthOrDare").addClass("hidden");
      $("#TruthOrDare").removeClass("center"); 
      $("#Truth").addClass("center");
      $("#Truth").removeClass("hidden");    
     })
    
    $("#admit").click(function() {
      $("#Truth").addClass("hidden");
      $("#Truth").removeClass("center"); 
      $("#resistContent").text("(Towards everybody) He's lying! I'm not his boyfriend. Don't believe in him!!!");
      $("#resistContent2").text("Sorry, I didn't calm down at the party. I understand why you did that. You told me it was just a game so they won't take it seriously. However, my unusual reactions made us more suspicious. But you know I still don't think we can do this again. What you picked was truth!! How can you make sure they won't take this seriously? I can't stand the pressure. Hope you can understand. Good night.")
      $("#Resist").addClass("center");
      $("#Resist").removeClass("hidden"); 
      relation = relation - 35;
      exposure = exposure + 40;
      updateBar();
    })
    
    $("#resist-next").click(function() {
       $("#Resist").addClass("hidden");
      $("#Resist").removeClass("center");
       $("#Resist2").addClass("center");
      $("#Resist2").removeClass("hidden");   
    })
    
     $("#negate").click(function() {
       $("#Truth").addClass("hidden");
      $("#Truth").removeClass("center"); 
      $("#NotAdmit").addClass("center");
      $("#NotAdmit").removeClass("hidden");
      exposure = exposure - 20;   
      updateBar();
     })
    
     $("#NotAdmit-next").click(function() {
       $("#NotAdmit").addClass("hidden");
      $("#NotAdmit").removeClass("center"); 
      $("#NotAdmit2").addClass("center");
      $("#NotAdmit2").removeClass("hidden"); 
      relation = relation - 10;
      updateBar();
     })
    
    $("#dare").click(function() {
       $("#TruthOrDare").addClass("hidden");
      $("#TruthOrDare").removeClass("center"); 
      $("#Dare").addClass("center");
      $("#Dare").removeClass("hidden");    
     })
    
      $("#kissAmy").click(function() {
       $("#Dare").addClass("hidden");
      $("#Dare").removeClass("center"); 
      $("#KissAmy").addClass("center");
      $("#KissAmy").removeClass("hidden"); 
      exposure = exposure - 30;
      updateBar();
     })
    
      $("#kissAmy-next").click(function() {
       $("#KissAmy").addClass("hidden");
      $("#KissAmy").removeClass("center"); 
      $("#KissAmy2").addClass("center");
      $("#KissAmy2").removeClass("hidden"); 
      relation = relation - 25;
      updateBar();
     })
    
    $("#kissZach").click(function() {
      $("#Dare").addClass("hidden");
      $("#Dare").removeClass("center"); 
      $("#resistContent").text("(Towards everybody) He's crazy! I have nothing to do with him. I can't kiss him!!!");
      $("#resistContent2").text("Sorry, I didn't calm down at the party. I understand why you did that. You told me it was just a game so they won't take it seriously. However, my unusual reactions made us more suspicious. But you know I still don't think we can do this again. How can you make sure they won't take this seriously? I can't stand the pressure. Hope you can understand. Good night.")
      $("#Resist").addClass("center");
      $("#Resist").removeClass("hidden"); 
      exposure = exposure + 30;
      relation = relation - 35;
      updateBar();
    })
    
      $('[id="end5"]').click(function() {
      $("#Resist2").addClass("hidden");
        $("#Resist2").removeClass("center");
         $("#KissAmy2").addClass("hidden");
        $("#KissAmy2").removeClass("center");
        $("#NotAdmit2").addClass("hidden");
        $("#NotAdmit2").removeClass("center");
        $("#DontGo").addClass("hidden");
        $("#DontGo").removeClass("center");
          $("#Sunday").addClass("center");
      $("#Sunday").removeClass("hidden");  
        status = "Sunday"
        day = day + 1;
        updateBar();
        checkEnding();
    })
    
    
     // ----- Sunday -----
    
    $("#studyWithZach").click(function() {
      $("#Sunday").addClass("hidden");
      $("#Sunday").removeClass("center"); 
      $("#StudyWithZach").addClass("center");
     $("#StudyWithZach").removeClass("hidden"); 
        relation = relation + 10;
        exposure = exposure + 20;
        updateBar();
    })
    
     $("#studyAlone").click(function() {
      $("#Sunday").addClass("hidden");
      $("#Sunday").removeClass("center"); 
      $("#End").addClass("center");
     $("#End").removeClass("hidden"); 
        relation = relation - 15;
        exposure = exposure - 10;
        updateBar();
    })
    
     $("#newWeek").click(function() {
      $("#StudyWithZach").addClass("hidden");
      $("#StudyWithZach").removeClass("center"); 
      $("#Monday").addClass("center");
     $("#Monday").removeClass("hidden"); 
       day = day + 1;
         status = "Monday";
        updateBar();
         checkEnding();
    })
    
    $('[id="end2"]').click(function() {
     $("#End").addClass("hidden");
      $("#End").removeClass("center");
        switch(status) {
        case "Monday":
        status = "Tuesday";
        $("#Tuesday").addClass("center");
     $("#Tuesday").removeClass("hidden"); 
        break;
        
        case "Wednesday":
        status = "Thursday";
        $("#Thursday").addClass("center");
     $("#Thursday").removeClass("hidden"); 
        break;
        
        case "Friday":
        status = "Saturday";
        $("#Saturday").addClass("center");
     $("#Saturday").removeClass("hidden"); 
        break;
        
        case "Saturday":
        status = "Sunday";
        $("#Sunday").addClass("center");
     $("#Sunday").removeClass("hidden"); 
        break;
        
        case "Sunday":
        status = "Monday";
        $("#Monday").addClass("center");
     $("#Monday").removeClass("hidden"); 
        break;
        }
        
        day = day + 1;
        updateBar();
        checkEnding();
        
    })
    
    
    $('[id="retry"]').click(function () {
        location.reload();
    })

})


function updateBar() {
    if (relation < 0) {
        relation = 0
    }
    if (relation > 100) {
        relation = 100
    }
    if (exposure < 0) {
        exposure = 0
    }
    if (exposure > 100) {
        exposure = 100
    }
    var a = relation.toString() + "%";
    var b = exposure.toString() + "%";
    bar1.animate({
        width: a
    }, "slow");
    bar2.animate({
        width: b
    }, "slow");

    calendar.find('h1').text("Day " + day)

    if (status !== "background") {
        if (relation === 0) {
            $("#relationDescript").text("Zach wants to break up with you")
        }
        if (relation < 20 && relation > 0) {
            $("#relationDescript").text("Zach is mad at you")
        }
        if (relation < 40 && relation >= 20) {
            $("#relationDescript").text("Zach is a little upset with you")
        }
        if (relation >= 40 && relation < 60) {
            $("#relationDescript").text("Zach is okay to be with you")
        }
        if (relation >= 60 && relation < 80) {
            $("#relationDescript").text("Zach feels happy to be with you")
        }
        if (relation >= 80 && relation < 100) {
            $("#relationDescript").text("Zach can't stop thinking about you")
        }
        if (relation === 100) {
            $("#relationDescript").text("Zach can't live without you")
        }

        if (exposure < 10) {
            $("#exposureDescript").text("Nobody thinks you're gay")
        }
        if (exposure < 40 && exposure >= 10) {
            $("#exposureDescript").text("Rumor has it that you're gay")
        }
        if (exposure >= 40 && exposure < 60) {
            $("#exposureDescript").text("Some people are sure you're gay")
        }
        if (exposure >= 60 && exposure < 80) {
            $("#exposureDescript").text("Lots of people think you're gay")
        }
        if (exposure >= 80 && exposure < 100) {
            $("#exposureDescript").text("Almost the whole campus knows you're gay")
        }
        if (exposure === 100) {
            $("#exposureDescript").text("Your parents know you're gay")
        }

    }

}



function didYouExpose(p) {
    var i = Math.floor(Math.random() * 100);
    console.log(i);
    if (i > p) {
        witnessed = false;
    } else {
        witnessed = true
    }

}

function checkEnding() {
    if(exposure === 100) {
    updateBar();
    $("#story").addClass("hidden"); 
    $("#endState").removeClass("hidden"); 
    $("#Punished").addClass("center");
    $("#Punished").removeClass("hidden"); 
    }
    if (relation === 100) {
    updateBar();
    $("#story").addClass("hidden"); 
    $("#endState").removeClass("hidden"); 
    $("#Love").addClass("center");
    $("#Love").removeClass("hidden");    
    }
    if (relation === 0) {
    updateBar();
    $("#story").addClass("hidden"); 
    $("#endState").removeClass("hidden"); 
    $("#Breakup").addClass("center");
    $("#Breakup").removeClass("hidden");    
    }
    if (relation === 100 && exposure === 100){
    updateBar();
    $("#story").addClass("hidden"); 
    $("#endState").removeClass("hidden"); 
    $("#Punished").addClass("center");
    $("#Punished").removeClass("hidden"); 
    $("#Love").removeClass("center");
    $("#Love").addClass("hidden"); 
    }
    
}
