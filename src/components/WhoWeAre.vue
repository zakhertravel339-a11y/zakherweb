<script setup>

</script>

<template>



  <div class="container mt-5 mb-5">

    <div class="row align-items-center who-we-are">

      

      <div class="col-12 col-md-6 mb-4 mb-md-0 text-center">

        <img src="https://www.zakher.travel/wp-content/uploads/2019/11/xabout-img.png" alt="" class="img-fluid w-75">

      </div>



      

      <div class="col-12 col-md-6">

        <h4 class="item-card-title  text-center p-2 "><i>Who We Are?</i></h4>



        <p>

          Zakher Travel Group of Companies was established in 2016 and soon managed to makr an outstanding achievement in the travel industry. Over the years, we have welcomed thousands of visitors from the GCC region and beyond, crafting exceptional travel experiences across a diverse range of destinations — including Azerbaijan, Türkiye, Poland, Georgia, Kazakhstan, Kyrgyzstan, Uzbekistan, Russia, the Czech Republic, Ukraine, and the UAE.
          Since our founding, we have expanded our presence by opening branches across several countries and building strong partnerships with more than 2,000 travel companies worldwide. Our team of over 50 experienced professionals specializes in designing tailor-made holidays and delivering high-quality travel services to meet the unique needs of every client.
          As a fully licensed tour operator, we take pride in bringing international travelers to our handpicked destinations. We place particular emphasis on promoting Azerbaijan — the Pearl of the Caucasus — where ancient history meets vibrant modern life. From breathtaking natural landscapes and impressive architectural landmarks to a rich and diverse cultural heritage, Azerbaijan offers an unforgettable travel experience.
          With four distinct seasons, each offering its own unique beauty and charm, our destinations can be enjoyed all year round. Travelers will always discover something new and inspiring, making the journey worth repeating.

        </p>



        <div class="btn-box text-md-end text-center mt-3">

          <router-link to="/who-we-are" class="theme-btn btn-style-one">Read More</router-link>

        </div>

      </div>

    </div>

  </div>



  



</template>

<style scoped>

.who-we-are .item-card-title i{
  font-size:20px;
  transition:1s;
  cursor:pointer;
  color:#ffa710;
  font-weight: 600;
  text-align: center;
  margin: auto;}


@media (max-width: 936px) {
  .who-we-are .item-card-title{
    transition:1s;
    text-align: center;
  }
  .who-we-are .item-card-title i{
    font-size:20px;
    transition:1s;
    cursor:pointer;
    color:#ffa710;
    font-weight: 600;
  }
  .who-we-are .card-title i:hover{
    transform: scale(1.25) rotate(100deg);
    color:#DBA337;
  }
}


.theme-btn {
  padding: 10px 25px;
  font-weight: 500;
  transition: 0.3s ease;
}

.theme-btn:hover {
  background-color: #333;
  color: #fff;
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
  text-decoration: none;
}
</style>