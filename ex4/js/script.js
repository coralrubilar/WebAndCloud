 
 document.getElementById("submit_btn").onclick = function() {

    var fullname= document.getElementById("fullname").value;
    var resultName = /^[a-zA-Z ]+$/.test(fullname);

    var count = 0;
    for(var i =0; i < fullname.length; i++){
        if(fullname.charAt(i) == " "){
            count += 1;
        }
    }

    if(resultName==false || count < 1|| fullname==" "){
     alert("Username with at least one space!");
     return false;
    }
   
    var password= document.getElementById("password").value;
    var len = password.length;
    if(len < 4 ){
        alert("Password with at least 4 digits!");
        return false;  
    }
   
   
    var parentsPhoneNum =document.getElementById("phone").value;
    var resultPhone = /^\d{9}$|^\d{10}$/.test(parentsPhoneNum);
    if(resultPhone==false){
      alert("Enter a valid phone number!");
      return false;
    }
   
   

    var ch = document.getElementsByName('interests[]');

    var isAnyChecked = false;
    for (var i = 0; i < ch.length; i++) {
      if (ch[i].checked == true){
        isAnyChecked = true;
      }
    }

    if (isAnyChecked == false) {
      alert("You have'nt chosen any interest");
      return false;
    }


  
   return true;
   
}