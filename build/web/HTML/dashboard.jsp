<%-- 
    Document   : dashboard
    Created on : Apr 28, 2022, 6:41:56 PM
    Author     : Dell
    <%
    if(session.getAttribute("fullname")==null){
        response.sendRedirect("login.jsp");
    }
%>

--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../CSS/dashboard.css">
    <title>Pragati | Dashboard </title>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>

<body>
    <!-- ********************* NAVIGATION STARTS ********************* -->

    <nav>
        <div class="logo"></div>
        <div class="Navbar">

            <a href="#" class="navItems" id="navItems1">
                <div class="icon" id="icon1"></div>
                <div class="iconText">READ</div>
            </a>

            <a href="#" class="navItems" id="navItems2">
                <div class="icon" id="icon2"></div>
                <div class="iconText">PLAY</div>
            </a>

            <a href="#" class="navItems" id="navItems3">
                <div class="icon" id="icon3"></div>
                <div class="iconText">LISTEN</div>
            </a>

            <a href="#" class="navItems" id="navItems4">
                <div class="icon" id="icon4"></div>
                <div class="iconText">WATCH</div>
            </a>

            <a href="#" class="navItems" id="navItems5">
                <div class="icon" id="icon5"></div>
                <div class="iconText">PROFILE</div>
            </a>
        </div>
    </nav>
    <!-- ********************* NAVIGATION ENDS ********************* -->

    <div class="spacing"></div>

    <!-- ********************* FIRST PART STARTS ********************* -->

    <div class="Container1">
        <div class="textContainer1">
            <h1 class="Header">
                Welcome Sadhana!
            </h1>
            <p>
                We have picked our favorites just for you!
            </p>
        </div>

        <div class="section" id="section1">
            <a href="#" class="mainButton">READ:</a>
            <p class="sectionText">
                We have hand-picked our most popular books to read just for you!
            </p>
            <section class="product">
                <button class="pre-btn"><img src="../ASSETS/Dashboard/arrow.png" alt=""></button>
                <button class="nxt-btn"><img src="../ASSETS/Dashboard/arrow.png" alt=""></button>
                <div class="product-container">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card1.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card2.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card3.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card4.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card5.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card6.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card7.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card8.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card9.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card10.jpg" class="product-thumb" alt="">
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div class="spacing2"></div>

        <div class="section" id="section2">
            <a href="#" class="mainButton">LISTEN:</a>
            <p class="sectionText">
                We have hand-picked our most popular educational games to play just for you!
            </p>
            <section class="product">
                <button class="pre-btn"><img src="../ASSETS/Dashboard/arrow.png" alt=""></button>
                <button class="nxt-btn"><img src="../ASSETS/Dashboard/arrow.png" alt=""></button>
                <div class="product-container">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card1.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card2.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card3.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card4.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card5.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card6.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card7.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card8.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card9.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card10.jpg" class="product-thumb" alt="">
                        </div>
                    </div>
                </div>
        </div>

        <div class="spacing2"></div>

        <div class="section" id="section3">
            <a href="#" class="mainButton">PLAY:</a>
            <p class="sectionText">
                We have hand-picked our most popular educational songs and rhymes just for you!
            </p>
            <section class="product">
                <button class="pre-btn"><img src="../ASSETS/Dashboard/arrow.png" alt=""></button>
                <button class="nxt-btn"><img src="../ASSETS/Dashboard/arrow.png" alt=""></button>
                <div class="product-container">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card1.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card2.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card3.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card4.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card5.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card6.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card7.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card8.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card9.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card10.jpg" class="product-thumb" alt="">
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div class="spacing2"></div>

        <div class="section" id="section4">
            <a href="#" class="mainButton">WATCH:</a>
            <p class="sectionText">
                We have hand-picked our most popular educational videos  to watch just for you!
            </p>
            <section class="product">
                <button class="pre-btn"><img src="../ASSETS/Dashboard/arrow.png" alt=""></button>
                <button class="nxt-btn"><img src="../ASSETS/Dashboard/arrow.png" alt=""></button>
                <div class="product-container">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card1.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card2.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card3.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card4.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card5.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card6.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card7.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card8.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card9.jpg" class="product-thumb" alt="">
                        </div>

                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <img src="images/card10.jpg" class="product-thumb" alt="">
                        </div>
                    </div>
                </div>
        </div>

    </div>
    <!-- ********************* FIRST PART ENDS ********************* -->

    <div class="spacing2"></div>

    <!-- ********************* FOOTER BEGINS ********************* -->
    <footer></footer>
    <!-- ********************* FOOTER ENDS ********************* -->

    <script>
        const productContainers = [...document.querySelectorAll('.product-container')];
        const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
        const preBtn = [...document.querySelectorAll('.pre-btn')];

        productContainers.forEach((item, i) => {
            let containerDimensions = item.getBoundingClientRect();
            let containerWidth = containerDimensions.width;

            nxtBtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth;
            })

            preBtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth;
            })
        })
    </script>
</body>

</html>
