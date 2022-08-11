  function idCard(){
    var firstName = document.getElementById("flName").value;
    var lastName = document.getElementById("lName").value;
    var address = document.getElementById("address").value;

    
var age = parseInt(document.getElementById("age").value);
var phoneNumber = parseInt(document.getElementById("phoneN").value);


    document.getElementById("postFullName").innerHTML =  (" " + firstName + " " + lastName);
    document.getElementById("postAddress").innerHTML = ("Address: " + " " + address);

   document.getElementById("postAge").innerHTML = ("Age: " + " " + age);
   document.getElementById("postPhoneNumber").innerHTML = ("Phone Number: " + " " + phoneNumber);
  }

    var  numberArray = []; 
numberArray.push("age").value;
numberArray.push("phoneNumber").value;

for (var i = 0; i < numberArray.length; i++);{
  
  if (numberArray[i] <= 100){
  // document.getElementById("postAge").innerHTML = ("Age: " + " " + age);

  }
  else if (numberArray[i] > 100){
   // document.getElementById("postPhoneNumber").innerHTML = ("Phone Number: " + " " + phoneNumber);

  }
  //  else{
  //   document.getElementById("postAge").innerHTML = ("Age: Nan");
  //   document.getElementById("postPhoneNumber").innerHTML = ("Phone Number: Nan");

  // }
}




