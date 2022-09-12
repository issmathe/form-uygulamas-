function validateForm(){
    var ad = document.forms["myForm"]["name"];
    var mail = document.forms["myForm"]["email"];
    var mesaj = document.forms["myForm"]["message"];
    if(ad.value == "")
    {
        document.getElementById('errorname').innerHTML="Adını gir Uleynnn";
        ad.focus();
        return false;
    }else{
        document.getElementById('errorname').innerHTML="";
    }

    if(mail.value == "")
    {
        document.getElementById('erroremail').innerHTML="mail gir Uleynnn";
        mail.focus();
        return false;
    }else{
        document.getElementById('erroremail').innerHTML="";
    }

    if(mail.value.indexof("@",0)){
        document.getElementById('erroremail').innerHTML="lütfen geçerli mail giriniz";
        mail.focus();
        return false;
    }
    if(mail.value.indexof(".",0)){
        document.getElementById('erroremail').innerHTML="lütfen geçerli mail giriniz";
        mail.focus();
        return false;
    }

    if(mesaj.value == "")
    {
        document.getElementById('errormsg').innerHTML = "Lüften Mesaj Giriniz";
        mesaj.focus();
        return false;
    }else{
        document.getElementById('errormsg').innerHTML = "";
    }
}