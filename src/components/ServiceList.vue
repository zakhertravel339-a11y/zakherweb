<script setup>

</script>

<template>
  <div class="services2">

    <h2 class="title-service2">Our Services</h2>

    <hr>

    <div class="services2-box" style="background-color: #002D70;">

      <div class="service2-box">

        <div class="circle2">01</div>

        <div class="text ">

          <b>Tourist services</b>

          Honeymoon packages; Private and shuttle transfers, tours; VIP welcoming; Group packages; Guide; Air tickets; Hotels booking; Visas; Travel insurance; Off road tours; Hunting tours; Helicopter tours; Golf tour package.

        </div>

      </div>



      <div class="service2-box">

        <div class="circle2">02</div>

        <div class="text ">

          <b>Real estate services</b>

          We provide assistance in a range of real estate services in Azerbaijan, starting from selling and renting private and commercial real estate, and providing legal advice with help of lawyers accredited by embassies.

        </div>

      </div>



      <div class="service2-box">

        <div class="circle2">03</div>

        <div class="text">

          <b>Medical Services</b>

          We offer therapeutic, cosmetic and natural services, as we offer complete treatment trip programs that include transportation, accommodation, arranging appointments and reservations with the best doctors and clinics.

        </div>

      </div>



      <div class="service2-box">

        <div class="circle2">04</div>

        <div class="text">

          <b>Meetings, Incentives, Conferences and Exhibitions (MICE)</b>

          Services for organizing various private, public, official events.

        </div>

      </div>

    </div>

  </div>

</template>

<style scoped>

.services2 h2{
  font-weight: 600;
  color: #FFA500;
  font-size: 35px;
  text-align: center!important;
  font-weight: 600;
  margin-top: 20px;
}

.services2 hr{
  width: 5%;
  height: 4px;
  background-color: orange;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}

.services2-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 0;
  max-width: 1270px;
  margin: auto;
}

.service2-box {
  display: flex;
  align-items: center;
  width: 45%;
  margin-bottom: 50px;
}

.circle2 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #F88628;
  background: linear-gradient(321deg,rgba(248, 134, 40, 1) 0%, rgba(250, 162, 56, 1) 50%, rgba(252, 185, 68, 1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-right: 20px;
  flex-shrink: 0;
}

.text {
  color: white;
  text-align: start;
}

.text b {
  color: #ff7700;
  display: block;
  margin-bottom: 10px;
  font-size: 18px;

}

@media (max-width: 768px) {
  .service2-box {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .circle2 {
    margin-bottom: 10px;
    margin: auto;
  }

  .text{
    text-align: center;
    margin-top: 10px;
  }
}

</style>