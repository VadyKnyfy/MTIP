$("button").on("click",function (){
    let string ="aa aba abba abbba abbbba abbbbba"
    let strarray = string.split(" ");
    let result="";
    $.each(strarray,function (index,value) {
        if(value==="abba"||value==="abbba"||value==="abbbba"){
            result+=value+" знайдено, у початковому рядку стоїть за номером" + (index+1) + "\n";

        }
    })
    alert(result);
})