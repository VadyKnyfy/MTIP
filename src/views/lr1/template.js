let selectedlaburlP ="/src/views/lr1/";
function initFunction(semestr){
    switch (semestr){
        case 1,"1":{
            selectedlaburlP ="/src/views/lr1/";
            $("#nav_menu1").html('<div class="select_item selected" laburl="/src/views/lr1/"> <p>Лабораторна номер 1</p></div>');
            let labinfodata
            $.ajax({
                url: '/src/views/lr1/lab.json',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    labinfodata=data;
                    let navmenu = $("#nav_menu1");
                    let DOMelemts="";
                    $.each(data,function (index,value){
                        if(value.url===""){
                            DOMelemts+= '<div class="select_item notF"> <p>'+value.name +'</p></div>'
                        }else{
                            DOMelemts+= '<div class="select_item" laburl="'+ value.url +'"> <p>'+value.name +'</p></div>'
                        }

                    })
                    navmenu.find(".select_item").after(DOMelemts);
                },
                error: function (xhr, status, error) {
                    // Обработка ошибки
                    console.error('Ошибка при получении данных:', status, error);
                }

            })
            break;
        }
        case 2,"2":{
            selectedlaburlP ="/src/views/part2/mtiplr1/";
            $("#nav_menu1").html('<div class="select_item selected" laburl="/src/views/part2/mtiplr1/"> <p>Лабораторна номер 1</p></div>');
            $.ajax({
                url: selectedlaburlP+'info.json',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    let DOMitems ="";
                    let conditionurl="";
                    $.each(data,function(index,value){
                        let selected ="";
                        if(value.infotype==="condition"){
                            selected ="selected";
                            conditionurl=selectedlaburlP+value.url;
                        }
                        DOMitems+='<div class="menu_select ' + selected +'" infotype = "'+ value.infotype +'" infourl="'+value.url+'"> ' +value.name+
                            '</div>'
                    })
                    $('#lab_menu').html(DOMitems);
                    $('#info_container').html('<embed src="'+conditionurl+'" width="100%" height="100%" id="pdfEmbed">');
                },
                error: function (xhr, status, error) {
                    // Обработка ошибки
                    console.error('Ошибка при получении данных:', status, error);
                }

            })
            let labinfodata
            $.ajax({
                url: '/src/views/part2/lab.json',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    labinfodata=data;
                    let navmenu = $("#nav_menu1");
                    let DOMelemts="";
                    $.each(data,function (index,value){
                        if(value.url===""){
                            DOMelemts+= '<div class="select_item notF"> <p>'+value.name +'</p></div>'
                        }else{
                            DOMelemts+= '<div class="select_item" laburl="'+ value.url +'"> <p>'+value.name +'</p></div>'
                        }

                    })
                    navmenu.find(".select_item").after(DOMelemts);
                },
                error: function (xhr, status, error) {
                    // Обработка ошибки
                    console.error('Ошибка при получении данных:', status, error);
                }

            })
            break;
        }
        default:{
            location.reload();
            break;
        }
    }
}
$(document).ready(function() {
    $('#semesterModal')[0].showModal();
    $('#semesterModal button').on('click', function() {
        var selectedSemester = $(this).data('semester');
        $('#semesterModal')[0].close(selectedSemester);
    });

    // Обробка закриття модального вікна
    $('#semesterModal').on('close', function() {
        $('body').removeClass('modal-open');
        $('main').show();

        var selectedSemester = $(this)[0].returnValue;
        initFunction(selectedSemester);
    });

    let infocontainer = $("#info_container");

    $(".nav_menu").on("click",".select_item:not(.notF):not(.selected)",function (){
        $(".select_item.selected").removeClass("selected");
        $(this).addClass("selected");
        selectedlaburlP=$(this).attr("laburl");
        $('#lab_menu').html("");
        $('#info_container').html("");
        $.ajax({
            url: selectedlaburlP+'info.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                let DOMitems ="";
                let conditionurl="";
                $.each(data,function(index,value){
                    let selected ="";
                    if(value.infotype==="condition"){
                        selected ="selected";
                        conditionurl=selectedlaburlP+value.url;
                    }
                    DOMitems+='<div class="menu_select ' + selected +'" infotype = "'+ value.infotype +'" infourl="'+value.url+'"> ' +value.name+
                        '</div>'
                })
                $('#lab_menu').html(DOMitems);
                $('#info_container').html('<embed src="'+conditionurl+'" width="100%" height="100%" id="pdfEmbed">');
            },
            error: function (xhr, status, error) {
                // Обработка ошибки
                console.error('Ошибка при получении данных:', status, error);
            }

        })

    })

    $("#lab_menu").on("click",".menu_select:not(.selected)",function () {
        $(".menu_select.selected").removeClass("selected");
        $(this).addClass("selected");
        infocontainer.html("");
        console.log(infocontainer);
        if($(this).attr("infotype")=="condition"){
            infocontainer.html('<embed src="'+selectedlaburlP + $(this).attr("infourl") +'" width="100%" height="100%" id="pdfEmbed">');
        }
        else if($(this).attr("infotype")=="result"){
            infocontainer.html('<iframe src="'+selectedlaburlP + $(this).attr("infourl") +'" width="100%" height="100%" id="pdfEmbed"> </iframe>');
        }
        else if($(this).attr("infotype")=="image"){
            infocontainer.html('<img src="'+selectedlaburlP + $(this).attr("infourl") +'" width="100%" height="100%" id="pdfEmbed"> </img>');
        }
        else{
            let url = selectedlaburlP + $(this).attr("infourl");
            let type =  $(this).attr("infotype");
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'text',
                success: function(data) {
                let DOMelement = ' <pre id="infocode" class="line-numbers show-language "><code class="codeconteiner language-'+type+'">' +
                    ' </code></pre>'
                    infocontainer.html(DOMelement);
                $(".codeconteiner").text(data);
                    Prism.highlightAll(); // Повторная подсветка синтаксиса
                },
                error: function(xhr, status, error) {
                    // Обработка ошибки
                    console.error('Ошибка при получении данных:', status, error);
                }
            });
        }
    })
})