<script setup>

</script>

<template>
  



  <section class="about-tour" id="tour-info" style="margin-top: 100px;">

    <div class="container">

      <div class="row">

        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">

          <div class="inner-column">

            <div class="sec-title title-tour">

              <span class="title" style="color: #FFA500; font-weight: 600;">Turkiye tours</span>



            </div>



            <div class="">

              <p>
                <strong>Tourism and travel-related services
                  provided by Zakher agency:</strong><br>
                <br>
                Reservation of hotels in relevant prices;<br>
                Air ticket sales;<br>
                Professional guide translators (male and female);<br>
                Transfer services;<br>
                Organization of tours for individuals, groups
                and families<br>
                Organization of regional & city tours within Turkiya
                Hunting tours;<br>
                Shopping tours;<br>
                Organizing photography tours;<br>
                Legal Services;<br>
                VIP services;<br>
                VISA-support services;<br>
                Travel insuran<br>
              </p>

            </div>



          </div>

        </div>




        

        <div class="image-column col-lg-6 col-md-12 col-sm-12">

          <div class="inner-column wow fadeInLeft">



            <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"> <img src="../assets/images/istanbultour.jpeg" alt="Handshake">
            </a></figure>



          </div>

        </div>


      </div>
      



    </div>


    <div class="container">
      <p class="" style=" margin-top:100px;">
        <strong>ISTANBUL TOUR</strong><br>
        Hagia Sophia<br>
        Topkapi Palace , Basilica Cistern<br>
        Sultanahmet Square & Blue Mosque<br>
        Grand Palace Mosaics Museum<br>
        Museum of Turkish & Islamic Arts<br>
        Istanbul Archaeology Museums<br>
        Dolmabahce Palace<br>
        Taksim , Istiklal Street<br>
        Galata Tower, Sirkeci<br>
        Bosphorus Cruise<br>
        Cemberlitas<br>
        <br>


        <strong>SHOPPING TOUR  </strong>
        <br>
        Spice Bazaar , Grand Bazaar<br>
        Malls : Istanbul Cevahir<br>
        Zorlu shopping centre , Istinye Park (luxury brands)<br>
        Mall of Istanbul, Via/Port outlet ( has option for the kids)<br>
        Emaar square ( skyview and aquarium, luxury brands )<br>
        Vadiistanbul , Venezia Mega outlet<br>
        Aqua Florya (biggest aquarium)<br>
        Kanyon, Palladium , Buyaka avm<br>
        Vialand (theme park attractions)<br>

        <br>
        <strong>SAPANCA TOUR</strong><br>
        Sapanca lake<br>
        Organic house<br>
        Kartepe (snowhill)<br>
        Waterfalls<br>
        <br>
        <strong>BURSA TOUR</strong><br>
        Bursa ulucamii<br>
        Teleferik Uludağ mountain<br>
        Turkish delight manufacturing<br>
        Honey manufacturing<br>
        Jam preserved manufacturing<br>
        Silk market<br>
        600 years old Antique Turkish bath<br>
        Zoopark<br>
        <br>
        <strong>TRABZON TOUR</strong><br>
        Uzungol tour<br>
        Tea Factory<br>
        Yapay Waterfalls<br>
        Hidir Nebi tour<br>
        Firtina Vadi , Ayder tour<br>
        Sera Lake tour<br>
        Sumela Manastr<br>
        <br>
        <strong>RIZA TOUR</strong><br>
        Rize agaran waterfull<br>
        Elevit plateau<br>
        Zil polovit castle<br>
        <br>
        <strong>ANTALYA TOUR</strong><br>
        Theme Park ( The Land of Legende)<br>
        Duden Waterfall<br>
        Antalya Cable Car<br>
        Pamukkale<br>
        Antalya Diving<br>
        Antalya River Raffting<br>

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