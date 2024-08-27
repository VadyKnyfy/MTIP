let interval = "ready";

$(document).ready(function () {
    $("#run").on("click", function () {
        if (interval == "ready") {
            interval = "not";
            $("#box_anim").animate({ opacity: "1" }, 250)
                .animate({ right: "0px" }, "slow")
                .animate({ opacity: ".5" }, {
                    complete: function () {
                        $(this).css("background-color", "#ff0080");
                        $(this).animate({ left: "0px" }, "slow")
                            .animate({ width: "+=200", height: "+=40" }, {
                                done: function () {
                                    let seconds = 5;
                                    $("#run").html("Ресет анімації через:" + seconds + " секунд ");
                                    let count = setInterval(function () {
                                        seconds--;
                                        $("#run").html("Ресет анімації через:" + seconds + " секунд ");
                                    }, 1000);
                                    interval = setInterval(function () {
                                        $("#box_anim").attr("style", "");
                                        clearInterval(interval);
                                        clearInterval(count);
                                        $("#run").html("Почати анімацію");
                                        interval = "ready";
                                    }, seconds * 1000);
                                }
                            }, "medium");
                    }
                }, "slow");
        }
    });
});
