<script setup>

</script>

<template>
  



  <section class="about-tour" id="tour-info" style="margin-top: 100px;">

    <div class="container">

      <div class="row">

        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">

          <div class="inner-column">

            <div class="sec-title title-tour">

              <span class="title" style="color: #FFA500; font-weight: 600;">Baku Night Tour</span>



            </div>



            <div class="">

              <ol class="dot-list">

                <li><span class="fw-bold">Duration of the tour:</span> 2 hours</li>


                <li><span class="fw-bold">Category:</span> Private tour</li>

                <li><span class="fw-bold">Pick-up & Drop-off:</span> your hotel (within Baku)</li>

                <li><span class="fw-bold">Language:</span> English (other languages on request)</li>

                <li><span class="fw-bold">*Economy package:</span> Tourists will be provided the following services:

                  – Professional driver

                  – Personal comfortable transportation during tours (Mercedes Viano/Vito)

                  – Guide service</li>

                <li><span class="fw-bold">*VIP package:</span>Our company will provide you with the wide range of luxury cars (Mercedes S class, E class, V class and etc.)</li>



              </ol>

            </div>



          </div>

        </div>




        

        <div class="image-column col-lg-6 col-md-12 col-sm-12">

          <div class="inner-column wow fadeInLeft">



            <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"> <img src="../assets/images/bakunight.jpg" alt="Handshake">
            </a></figure>



          </div>

        </div>


      </div>
      



    </div>


    <div class="container">
      <p class="" style=" margin-top:100px;">

        <strong>INCLUSIONS</strong><br>
        • Pick-up & Drop-off at your hotel (inside Baku)<br>
        • Personal English speaking guide (only standard package)<br>
        • Personal Driver & air-conditioned vehicle<br>
<br>
        <strong>EXCLUSIONS</strong><br>
        • Any meals<br>
        • Personal expenses<br>
        • Insurance<br><br>

        <strong>DESCRIPTION</strong><br>
        Spend an independent night tour of Baku with a private driver and guide. Your personal guide will help you design the perfect 2-hour itinerary, escorting you to Baku attractions and offering insider tips on where to go and what to see in the capital. Visit main attractions, and request stops to snap photos, grab a souvenir or take a stroll around your favorite spots.<br> <br>
        <strong>Highland Park</strong> –
        Panoramic view of Baku Bay from the highest point of the city;<br><br>
        <strong>National Flag Square</strong> –
        One of the highest flag of the world;<br><br>
        <strong>Flame Towers</strong> –
        a trio of skyscrapers in Baku<br><br>
        <strong>Funicular </strong> –
        The modernized funicular system in Baku<br><br>
        <strong>Carpet Museum</strong> – State Museum of Azerbaijani Carpets and Applied Arts<br><br>
        <strong>Baku Boulevard (Seaside Park)</strong>– promenade that runs parallel to Baku’s seafront; <br><br>
        <strong>Little Venice</strong> – water park in Baku<br><br>
        <strong>Government House</strong>– House of Government, is a government building housing various state ministries of Azerbaijan<br><br>
        <strong>State Philharmonic Hall</strong> – hall for classical music and folk music in the capital of Azerbaijan, Baku<br><br>
        <strong>Fountain Square</strong>– The most famous street of Baku<br><br>


      </p>

      <div class="btn-box text-end booking" >

        <router-link to="/reservation" class="theme-btn btn-style-one ">Booking Now</router-link>
      </div>


    </div>




  </section>



  
</template>

<style scoped>


h1,
h2,
h3,
h4,
h5,
h6 {}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}

a,
a:active,
a:focus {
  color: #6f6f6f;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: .2s;
  -ms-transition-duration: .2s;
  -moz-transition-duration: .2s;
  -webkit-transition-duration: .2s;
  -o-transition-duration: .2s;
}


img {
  max-width: 100%;
  height: auto;
}
section {
  padding: 60px 0;
}

.sec-title{
  margin-top: 20px;
  position:relative;
  z-index: 1;
  margin-bottom:60px;
}

.sec-title .title{
  position: relative;
  display: block;
  font-size: 18px;
  line-height: 24px;
  color: #FFA500;
  font-weight: 500;
}

.sec-title h2{
  position: relative;
  display: block;
  font-size:40px;
  line-height: 1.28em;
  color: #222222;
  font-weight: 600;
  padding-bottom:18px;
}

.sec-title h2:before{
  position:absolute;
  content:'';
  left:0px;
  bottom:0px;
  width:50px;
  height:3px;
  background-color:#d1d2d6;
}

.sec-title .text{
  position: relative;
  font-size: 16px;
  line-height: 26px;
  color: #848484;
  font-weight: 400;
  margin-top: 35px;
}

.sec-title.light h2{
  color: #ffffff;
}

.sec-title.text-center h2:before{
  left:50%;
  margin-left: -25px;
}

.list-style-one{
  position:relative;
}

.list-style-one li{
  position:relative;
  font-size:16px;
  line-height:26px;
  color: #222222;
  font-weight:400;
  padding-left:35px;
  margin-bottom: 12px;
}

.list-style-one li:before {
  content: "\f058";
  position: absolute;
  left: 0;
  top: 0px;
  display: block;
  font-size: 18px;
  padding: 0px;
  color:#FFA500;
  font-weight: 600;
  -moz-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1.6;
  font-family: "Font Awesome 5 Free";
}

.list-style-one li a:hover{
  color: #44bce2;
}

.btn-style-one{
  position: relative;
  display: inline-block;
  font-size: 17px;
  line-height: 30px;
  color: #ffffff;
  padding: 10px 30px;
  font-weight: 600;
  overflow: hidden;
  letter-spacing: 0.02em;
  background-color: #FFA500;
}

.btn-style-one:hover{
  background-color: #FFA500;
  color: #ffffff;
}
.about-branch{
  position: relative;
  padding: 120px 0 70px;
}



.about-tour .content-column{
  position: relative;
}

.about-tour .content-column .inner-column{
  position: relative;
  padding-left: 30px;
}

.about-tour .text{
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 26px;
  color: #848484;
  font-weight: 400;
}

.about-tour .list-style-one{
  margin-bottom: 45px;
}

.about-tour .btn-box{
  position: relative;
}

.about-tour .btn-box a{
  padding: 15px 50px;
}

.about-tour .image-column .text-layer{
  position: absolute;
  right: -110px;
  top: 50%;
  font-size: 325px;
  line-height: 1em;
  color: #ffffff;
  margin-top: -175px;
  font-weight: 500;
}

.about-tour .image-column .inner-column{
  position: relative;
  padding-left: 80px;
  padding-bottom: 0px;
  margin-top: 100px;
  height: 400px;
}
.about-tour .image-column .inner-column .author-desc{
  position: absolute;
  bottom: 16px;
  z-index: 1;
  background: #FFA500;
  padding: 10px 15px;
  left: 96px;
  width: calc(100% - 152px);
  border-radius: 50px;
}
.about-tour .image-column .inner-column .author-desc h2{
  font-size: 21px;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
  margin: 0;
}
.about-tour .image-column .inner-column .author-desc span{
  font-size: 16px;
  letter-spacing: 6px;
  text-align: center;
  color: #fff;
  display: block;
  font-weight: 400;
}
.about-tour .image-column .inner-column:before{
  content: '';
  position: absolute;
  width: calc(50% + 80px);
  height: calc(100% + 160px);
  top: -80px;
  left: -3px;
  background: transparent;
  z-index: 0;
  border: 44px solid #FFA500;
}

.about-tour .image-column .image-1{
  position: relative;



}
.about-tour .image-column .image-2{
  position: absolute;
  left: 0;
  bottom: 0;
}

.about-tour .image-column .image-2 img,
.about-tour .image-column .image-1 img{
  box-shadow: 0 30px 50px rgba(8,13,62,.15);
  border-radius: 16px;
  height: 400px!important;

}







.image-block {
  position: relative;
  width: 300px;
  height: 300px;
  margin-right: 60px;
}

.main-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.main-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.orange-curve {
  position: absolute;
  width: 300px;
  height: 300px;
  background: #F88628;
  background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
  border-radius: 50%;
  bottom: 0;
  left: -130px;
  top:80px;
  z-index: 1;
}

.small-orange-dot {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  background: #F88628;
  background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
  border-radius: 50%;
  z-index: 3;
}

.text-block {
  max-width: 600px;
}

.text-block h2 {
  font-size: 36px;
  color: #FFA500;
  margin-bottom: 20px;
  font-weight: 600;
}

.text-block p {
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 15px;
}

.text-block .website {
  margin-top: 20px;
  font-size: 16px;
  color: #777;
}

@media (max-width: 768px) {


  .about-tour .image-column .inner-column{
    position: relative;
    padding-left: 80px;
    padding-bottom: 0px;
    margin-top: 30px;
    height: 200px;
  }

  .about-tour .image-column .inner-column img{
    height: 200px!important;
    width: 300px!important;
    margin-left:-15px!important;
  }


  .main-circle img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

  }
  .inner-column {

    margin-left: -40px;
  }
  .sec-title{
    margin-top: 100px;
    margin-left: 10px;
  }


  .image-column{
    margin-left: 40px;
  }
}


</style>