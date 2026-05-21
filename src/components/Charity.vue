<script setup>

</script>

<template>
  

  <section class="about-section">

    <div class="image-block">

      <div class="main-circle">

        <img src="../assets/images/charity_gradient_orange-Photoroom.png" alt="">

      </div>


    </div>



    <div class="text-block">

      <h2>Charity</h2>

      <p>We are a full service travel agency that provides customized excellence for the tourism needs of business and leisure clients.</p>

      <p>Zakher Travel officially started its activity in 2016 and soon managed to make an outstanding achievement. We received thousands of tourists from the GCC region and other locations, helping to introduce them to the charming treasures of Azerbaijan, Türkiye, Georgia, Russia, Kazakhstan, Kyrgyzstan, Uzbekistan, Poland, Albania, Hungary, Czechia, Slovakia, Germany, Ukraine, UAE.</p>

      <p>As a tour operator, we established our cooperation with more than 800 travel companies through official contracts. Our professional and friendly staff of 100 people provide tailor made holidays to our customers.</p>



    </div>

  </section>



  
</template>

<style scoped>

.gradient-circle{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #DE5C2C, #F6C047);
  display:inline-block;
  vertical-align:baseline; 
  margin: 0 5px; 

}



.about-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
  max-width: 1200px;
  margin: auto;
  margin-top: -100px!important;
}

.image-block {
  position: relative;
  width: 350px;
  height: 350px;
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
  width: 300px!important;
  height:300px!important;
  object-fit: cover;

}

.orange-curve {
  position: absolute;
  width: 200px;
  height: 200px;
  background: #F88628;
  background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
  border-radius: 50%;
  bottom: 0;
  left: 0;
  top:80px;
  z-index: 1;
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





.image-block .main-circle img {

  position: absolute;
  left:30px;
  top:40px;
  z-index: 11111;
  background-color: transparent;

}



.small-orange-dot {
  position: absolute;
  top: 50px;
  left: 275px;
  width: 40px;
  height: 40px;
  background: #F88628;
  background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
  border-radius: 50%;
  z-index: 3;
}



@media (max-width: 768px) {


  .about-section{
    display: flex;
    margin-top: -120px!important;
  }


  .text-block h2 {
    font-size: 1rem;
  }

  .text-block p {
    font-size: 0.55rem;
  }

  .image-block .main-circle img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    left:40px;
    top:120px;
    z-index: 11111;

  }

  .orange-curve {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #F88628;
    background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
    border-radius: 50%;
    left:10px;
    top:150px;
    z-index: 1;
  }

  .small-orange-dot {
    position: absolute;
    top: 125px;
    left: 115px;
    width: 20px;
    height: 20px;
    background: #F88628;
    background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
    border-radius: 50%;
    z-index: 3;
  }


  .image-block {
    display: none;
  }

  .text-block {

    text-align: center;
    margin-top: 20px;
  }



  .main-circle img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

  }


  .orange-curve {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #F88628;
    background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
    border-radius: 50%;
    bottom: 0;
    left:20px;
    top:-20px;
    z-index: 1;
  }

  .small-orange-dot {
    position: absolute;
    top: 30px;
    right: 65px;
    width: 40px;
    height: 40px;
    background: #F88628;
    background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
    border-radius: 50%;
    z-index: 3;
  }
}


@media (min-width: 768px) and (max-width: 1024px) {
  .about-section{
    display: flex;
    margin-top: -120px!important;
  }


  .text-block h2 {
    font-size: 1rem;
  }

  .text-block p {
    font-size: 0.55rem;
  }

  .image-block .main-circle img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    left:40px;
    top:120px;
    z-index: 11111;

  }

  .orange-curve {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #F88628;
    background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
    border-radius: 50%;
    left:10px;
    top:150px;
    z-index: 1;
  }

  .small-orange-dot {
    position: absolute;
    top: 125px;
    left: 115px;
    width: 20px;
    height: 20px;
    background: #F88628;
    background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
    border-radius: 50%;
    z-index: 3;
  }


  .image-block {
    display: none;
  }

  .text-block {

    text-align: center;
    margin-top: 20px;
  }



  .main-circle img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

  }


  .orange-curve {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #F88628;
    background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
    border-radius: 50%;
    bottom: 0;
    left:20px;
    top:-20px;
    z-index: 1;
  }

  .small-orange-dot {
    position: absolute;
    top: 30px;
    right: 65px;
    width: 40px;
    height: 40px;
    background: #F88628;
    background: linear-gradient(153deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
    border-radius: 50%;
    z-index: 3;
  }
}


</style>