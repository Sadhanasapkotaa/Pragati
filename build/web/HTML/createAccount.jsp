<%-- 
    Document   : createAccount.jsp
    Created on : Apr 19, 2022, 5:37:28 PM
    Author     : Sadhana Sapkota
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../CSS/createAccount.css">  
    <title>Pragati | Create Account</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"> 
    <script src="https://kit.fontawesome.com/b8a0a5c528.js" crossorigin="anonymous"></script>
</head>
<body>

    <div class="logo"></div>

    <div class="Container1">
        <h1 class="Heading">Welcome Back Sathi!</h1>
        
        <form method="post" action="/Pragati/createAccount" class="form" id="form">  
            <input type="text" id="fullname" name="fullname" placeholder="Your Name:"/> <br/>
            <input type="text" id="username" name="username" placeholder="Your Username:"/> <br/>
            <input type="email" id="email" name="email" placeholder="Your E-mail:"/> <br/>
            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Your Phone Number:"/> <br/>
            <input type="password" id="password" name="password" placeholder="Your Password:"/> <br/>   
            <input type="text" id="coupon" name="coupon" placeholder="COUPON (Optional):"/> <br/>

            <button type="submit" class="mainButton">continue</button>
         </form>

         <p class="Or">Or continue with</p>

        <div class="loginIcons">
            <div class="icon" id="icon1" style="background-image: url('../ASSETS/loginPage/Frame\ 15.svg');">

            </div>
            <div class="icon" id="icon2" style="background-image: url('../ASSETS/loginPage/Frame\ 16.svg');">

            </div>
            <div class="icon" id="icon3" style="background-image: url('../ASSETS/loginPage/Frame\ 17.svg');">

            </div>
        </div>

         <p class="createAccount">Already have an account? .</p><a href="#ForgotPassword.html"><h5>Login Here</h5></a>
         <div class="spacing"></div>
    </div>

</body>
</html>
