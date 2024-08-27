$(document).ready(function (){
    function rgbToHex(rgb) {
        const [r, g, b] = rgb.match(/\d+/g);
        const hexR = parseInt(r).toString(16).padStart(2, '0');
        const hexG = parseInt(g).toString(16).padStart(2, '0');
        const hexB = parseInt(b).toString(16).padStart(2, '0');
        return `#${hexR}${hexG}${hexB}`;
    }
    let timeoutshredule;
    $('td').on("click",function (){
        let color =$(this).css("background-color");
        $("body").css("color",color);
    }).on("contextmenu",function (){
        event.preventDefault();
        clearInterval(timeoutshredule);
        let color =$(this).css("background-color");
        $("body").css("background-color",color);
        $("#hexcode_window").addClass("show");
        $("#hexcode_color").html(rgbToHex(color));
        timeoutshredule = setInterval(function (){
            $("#hexcode_window").removeClass("show");
        },2000)
    })
})