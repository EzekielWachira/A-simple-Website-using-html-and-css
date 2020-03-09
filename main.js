var phone = document.getElementById("phone");
var guests = document.getElementById("guests");

function formValidate(){
    /* if(phone.value = ""){
        window.alert("phine number does not contain characters");
    }    */
    if(guests.value < 1){
        window.alert("Guests cannot be 0 or negative./nTry again please");
        guests.style.border = "2px solid red";
    }else{
        guests.style.border = "normal";
    }
}

//formValidate();

