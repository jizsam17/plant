
    class Plant{

        static getAccountDetails=()=>{
            var accountDetails={
                userone:{email:"abc@gmail.com",password:"testuser1"},
            
                usertwo:{email:"jiz@gmail.com",password:"testuser2"}
            
            }

            return accountDetails;

        }


        
        static login=()=>{
            let username=document.querySelector("#username").value;
            let password=document.querySelector("#password").value;
             let dataset= Plant.getAccountDetails();
             if(username in dataset){
                 if(password===dataset[username].password){
                     alert("Sign in successful");
                     window.location.href="index.html";
                 }
                 else{
                     alert("Invalid password");
                 }
             }
             else{
                 alert("Invalid username");
             }

            }

            static message=()=>{
                alert("Added to cart.");
            }
        }

       

        

        



    
    