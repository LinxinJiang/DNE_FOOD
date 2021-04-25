var joinUsSub = document.getElementsByClassName('joinUs-form-button');

function joinUS(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var message = document.getElementById('message').value;

    var text = "Hi " + name + " , we will contect you very soon!";

    r = confirm("Ready to join is?");
    if(r){
        document.getElementById('joinUsSub').innerHTML = text;
    }else{
        document.getElementsById('joinUsSub').innerHTML = ("Thank you for considering this.");
    }
    
}