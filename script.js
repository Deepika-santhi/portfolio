
window.onload = function() {
    window.scrollTo(0, 0);
  }

function scrolling(){
    console.log("hi");
    window.scrollTo(0,0);  
}

function scrollSkill(){
    window.scrollTo(0,1100);  
}

function scrollProject(){
    window.scrollTo(0,2100);  
}

function scrollContact(){
    window.scrollTo(0,3300);  
}

function showing(a)
{
    let arr=["cont1","cont2","cont3","cont4","cont5","cont6"];

    for(let a=0;a<arr.length;a++)
    {
        document.getElementById(arr[a]).style.display="none"
    }
    if(a == "one")
    {
          document.getElementById("cont1").style.display="block";
    }
    if(a == "two")
    {
          document.getElementById("cont2").style.display="block";
    }
    if(a == "three")
    {
          document.getElementById("cont3").style.display="block";
    }
    if(a == "four")
    {
          document.getElementById("cont4").style.display="block";
    }
    if(a == "five")
    {
          document.getElementById("cont5").style.display="block";
    }
    if(a == "six")
    {
          document.getElementById("cont6").style.display="block";
    }

   
}


function sendMail(e) {
    /* // Get the email address from the input box */
   e.preventDefault();
    /* // Send the email using EmailJS */
    emailjs.init("fjwb1BLY1bCoS7sLC");
    var params = {
        from_name : document.getElementById("name").value,
        email_id :document.getElementById("email").value,
        message : document.getElementById("content").value,
    };
    console.log(params);
    emailjs.send("service_2cz2trg","template_5tq980g",{
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("content").value,
        });
  }