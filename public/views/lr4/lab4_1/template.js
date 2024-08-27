$(document).ready(function (){
    let cardnumbercount=0;
    let interval;
    function isValidCreditCardNumber(cardNumber) {
        if (!/^[0-9]+$/.test(cardNumber)) {
            return false;
        }

        // Перевірка правильності кількості цифр (наприклад, для Visa 13, 16 цифр, для MasterCard 16 цифр)
        const cardNumberLength = cardNumber.length;
        if (![13, 16].includes(cardNumberLength)) {

            return false;
        }
        return true;
    }

    function characterstest(string){
        if(string==="") return true;
        const characters = /[^a-zA-Zа-яА-Я]/;
        return characters.test(string);
    }
    function validateForm(){
        let name_field = $("#name");
        let surname_field = $("#surname");
        let email_field = $("#email");
        let phone_field = $("#phone");
        let credit_card_field = $("#credit_card");
        let org_name_field = $("#org_name");
        $("input").removeClass("false");
        ///credit_card
        if(!isValidCreditCardNumber(credit_card_field.val())){
            credit_card_field.addClass("false");
            cardnumbercount++;
            if(cardnumbercount==3){
                $("#submit_btn").addClass("disable");
                $("#form_btn").append("<p id='timer'> Ви ввели неправельно номер карти 3 рази, спробуйте щераз через 30 сек </p>")
                interval = setInterval(function (){
                    $("#timer").remove();
                    $("#submit_btn").removeClass("disable");
                    cardnumbercount=0;
                },30)
            }
            return false
        }
        ///name
        if(characterstest(name_field.val())){
            name_field.addClass("false");
            return false
        }
        if(characterstest(surname_field.val())){
            surname_field.addClass("false");
            return false
        }
        if(org_name_field.val()===""){
            org_name_field.addClass("false");
            return false
        }
        if (!/^[0-9]+$/.test(phone_field.val()) ) {
            phone_field.addClass("false");
            return false;
        }else if(phone_field.val()===""){
            phone_field.addClass("false");
            return false;
        }
        if(email_field.val()===""){
            email_field.addClass("false");
            return false
        }

        return true
    }
    $('#formlr').on("submit",function (){
        event.preventDefault();
        if($(".disable").length==0) {
            if (cardnumbercount <= 2) {
                if (validateForm()){
                    alert("Вітаю")
                }
            }
        }
    })

})