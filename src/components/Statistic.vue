<script setup>
import { ref, onMounted } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, Pagination, Navigation } from "swiper/modules"


import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"


const modules = [Autoplay, Pagination, Navigation]


function counter(id, start, end, duration) {
  let obj = document.getElementById(id)
  if (!obj) return
  let current = start
  let range = end - start
  let increment = end > start ? 1 : -1
  let step = Math.abs(Math.floor(duration / range))
  let timer = setInterval(() => {
    current += increment
    obj.textContent = current
    if (current === end) {
      clearInterval(timer)
    }
  }, step)
}

onMounted(() => {
  counter("partnercount", 0, 2100, 5000)
  counter("destinationcount", 0, 10, 5000)
  counter("hotelcount", 0, 400, 15000)
  counter("touristcount", 0, 81487, 100, 500)
  counter("stuffcount", 0, 60, 15000)
})

</script>

<template>
  
  <section id="counters" style="width: 100%;">
    <h2>{{ $t('home.stats.title', 'STATISTICS') }}</h2>
    <hr>
    <div class="counter">
      <div class="count">
        <i class="fa-solid fa-handshake-simple"></i>
        <p class="number" id="partnercount">2100</p>
        <p class="count-text">{{ $t('home.stats.partners', 'PARTNERS') }}</p>
      </div>
      <div class="count">
        <i class="fa-solid fa-plane"></i>
        <p class="number" id="destinationcount">10</p>
        <p class="count-text">{{ $t('home.stats.destinations', 'DESTINATIONS') }}</p>
      </div>
      <div class="count">
        <i class="fa-solid fa-city"></i>
        <p class="number" id="hotelcount">400+</p>
        <p class="count-text">{{ $t('home.stats.hotels', 'HOTELS') }}</p>
      </div>
      <div class="count">
        <i class="fa-solid fa-person-walking-luggage"></i>
        <p class="number" id="touristcount">81487</p>
        <p class="count-text">{{ $t('home.stats.tourists', 'TOURISTS') }}</p>
      </div>
      <div class="count">
        <i class="fa-solid fa-people-group"></i>
        <p class="number" id="stuffcount">60+</p>
        <p class="count-text">{{ $t('home.stats.staff', 'STAFF') }}</p>
      </div>
    </div>

  </section>

  
</template>

<style scoped>

#counters {
  width: 100%;
  background-position: center;
  background-attachment: fixed;
  background: radial-gradient(ellipse at center, #d89b23 1%, #ee803d 100%);
  text-align: center;
  color: white;
  padding: 50px 0px;
  font-family: 'Roboto', sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
}


#counters>p {
  font-size: 20px;
}

#counters h2 {
  font-size: 25px;
  font-weight: 900;
  margin: 15px 0px 20px 0px;
}

#counters hr {
  width: 3%;
  height: 4px;
  background-color: #FFA500;
  margin: auto;
  border: none;
  margin-bottom: 50px;
}

#counters .counter {
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

#counters .count {
  width: 20%;
  margin-top: 30px;
  font-weight: 900;
  margin-bottom: 30px;
}

#counters .count i {
  font-size: 80px;
  margin-bottom: 20px;
}

#counters .count .number {
  font-size: 40px;
  color: white;
}
#counters>a{
  padding: 15px 20px;
  display: inline-block;
  text-decoration: none;
  color: rgb(36, 35, 35);
  background-color: #FFA500;
  margin-top: 30px;
}

#tour-count{
  width: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  padding: 30px;
}
#tour-count h1{
  font-size: 25px;
  font-weight: 900;
  margin: 30px 0px;
}
#tour-count hr{
  width: 3%;
  height: 4px;
  background-color: #FFA500;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}
#tour-count .items{
  width: 80%;
  margin: auto;
  
  margin-top: 30px;
  overflow: hidden;
}


#tour-count .items .item{
  width: 30%;
  background-color: rgb(255, 255, 255);
  margin-top: 30px;
  left: -20px;
}
#tour-count .item .image{
  width: 100%;
  height: 240px;
  background-color: aqua;
  background-size: cover;
  text-align: start;
  position: relative;
}
#tour-count .image>span{
  padding: 5px 10px;
  font-weight: 900;
  background-color: #FFA500;
  position: relative;
  left: 0;
  top: 20px;

}
#tour-count .img-icons{
  width: 35%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(43, 42, 42, 0.344);
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 17px;
  padding: 7px 10px;
  color: white;
}
#tour-count .slide-text{
  padding: 10px 15px;
  text-align: start;
}
#tour-count .slide-text h2{
  font-size: 23px;
  font-weight: 100;
  margin-bottom: 15px;
  color: rgb(42, 40, 40);
}
#tour-count .slide-text p {
  font-size: 15px;
  margin-bottom: 15px;
  color: rgb(100, 97, 97);
}
#tour-count .slide-text p>i{
  color: rgba(255, 166, 0, 0.773);
  margin-right: 5px;
  font-size: 20px;
}
#tour-count .read-more{
  width: 100%;
  background-color: rgb(245, 245, 245);
  font-size: 15px;
  font-weight: 900;
  display: flex;
}
#tour-count .read-more .icons{
  width: 45%;
  color: #FFA500;
  text-align: center;
  padding: 10px;
}
#tour-count .read-more .read{
  width: 55%;
  background-color: rgb(38, 189, 247);
  padding: 10px;
  text-align: center;
  position: relative;
  color: white;
}
#tour-count .read-more .read span{
  width: 13%;
  position: absolute;
  left: 0;
  top: 0;
  border-top: 20px solid transparent;
  border-left: 20px solid rgb(245, 245, 245);
  border-bottom: 20px solid transparent;
  background-color: transparent;
}
@media (max-width:1280px) {


  #counters .counter{
    width: 85%;
  }
  #tour-count .items{
    width: 100%;
  }



}




@media (max-width:486px) {



  #counters .count{
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
  }
  #tour-count .items .item{
    width: 90%;
    margin-right: 20px;
  }


}
</style>