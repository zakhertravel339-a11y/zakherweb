<script setup>

</script>

<template>
  <div class="container social-effect">
    <div class="sosial-title">
      <h2>Follow Us</h2>
      <hr style="width:120px">
    </div>
    <div class="effect aeneas">
      <div class="buttons">
        <a href="https://www.facebook.com/p/Zakher-Travel-Azerbaijan-61552554323306/?locale=ru_RU" class="fb" title="Join us on Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="https://x.com/ZakherTravel" class="tw" title="Join us on X"><i class="fa fa-x" aria-hidden="true"></i></a>
        <a href="https://www.wechat.com/" class="wchat" title="Join us on WeChat+"><i class="fa fa-wechat" aria-hidden="true"></i></a>
        <a href="https://t.me/" class="telegram" title="Join us on Telegram"><i class="fa fa-telegram" aria-hidden="true"></i></a>
        <a href="https://www.youtube.com/@zakher.travel/videos" class="youtube" title="Join us on Youtube"><i class="fa fa-youtube" aria-hidden="true"></i></a>
        <a href="https://www.tiktok.com/@zakher.travel" class="tiktok" title="Join us on Tiktok"><i class="fa fa-tiktok" aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/zakhertravel.az?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" class="insta" title="Join us on Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/company/zakher-travel/?originalSubdomain=az" class="in" title="Join us on LinkedIn"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="https://www.snapchat.com/" class="snapchat" title="Join us on Snapchat"><i class="fa fa-snapchat" aria-hidden="true"></i></a>
        <a href="https://www.tripadvisor.com/Attraction_Review-g293934-d34177573-Reviews-Zakher_Travel-Baku_Absheron_Region.html" class="tripadvisor" title="Join us on Tripadvisor"><i class="fa fa-tripadvisor" aria-hidden="true"></i></a>

      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 60px auto 0px auto;
  text-align: center;
}
.themer {
  all: unset;
  padding: 4px;
  height: 20px;
  width: 40px;
  border-radius: 20px;
  position: relative;
}
.light-theme .themer {
  border: 2px solid var(--dark-bg);
}
.dark-theme .themer {
  border: 2px solid var(--light-bg);
}
.themer:hover {
  cursor: pointer;
}
.themer::after {
  content: '';
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  top: 4px;
}
.light-theme .themer::after {
  background-color: var(--dark-bg);
  right: 4px;
}
.dark-theme .themer::after {
  background-color: var(--light-bg);
  left: 4px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.card {
  width: 300px;
  max-width: 100%;
  margin: 20px;
  border: none;
}

.card:hover .upper{
  transform: translateY(0px);
}

.card:hover .lower {
  transform: translateY(0px);
}

.upper {
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  transform: translateY(100px);
  transition: 0.3s ease-in-out;
}

.lower {
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
  transition: 0.3s ease-in-out;
  color: black;
}

.lower p {
  text-align: center;
}

.card1 {
  background-color: #ffa500;
}

.card2 {
  background-color: #ffa500;
}

.card3 {
  background-color: #ffa500;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 80%;
    margin: 10px 0;
  }
}

.social-effect.fa {
  font-size: 100px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  line-height: 200px;
}

.fa-facebook {
  color: white;
  width: 100px;
}

.fa-twitter {
  color: white;
}

.fa-instagram {
  color: white;
}

@media screen and (max-width: 768px) {
  .profile {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile__info {
    align-items: center;
  }

  .profile__data {
    justify-content: center;
    gap: 2rem;
  }

  .profile__pic img {
    width: 60px;
    height: 60px;
  }

  .profile__info-display {
    font-size: 1.1rem;
  }

  .profile__info-username {
    font-size: 0.85rem;
  }
}



@media (max-width: 768px) {

  .social-items{
    margin-top: 30px!important;
  }

  .carousel-cell {
    width: 50%;
  }

  #slider.container {
    padding: 1rem;
  }

  #slider h2 {
    font-size: 1.5rem;
  }

  .youtube iframe{
    width: 350px;
    height: 250px;
  }

  .media-item img{
    width: 70px!important;
  }
}


@media (max-width: 480px) {
  .carousel-cell {
    width: 100%;
  }

  #slider h2 {
    font-size: 1.25rem;
  }
}


:root {
  --basic-dark-color: #212121;
  --basic-light-color: #fff;
  --fb-color: #3b5998;
  --tw-color: #00aced;
  --g-plus: #dd4b39;
  --dribbble: #ea4c89;
  --pinterest: #cb2027;
  --insta: #bc2a8d;
  --in: #007bb6;
  --vimeo: #1ab7ea;
  --border-radius: 10px;
  --font-size: 25px;
}

.effect {
  width: 100vw;
  padding: 10px 0px 40px 0px;
}

.social-effect h2 {
  color: #ffa500;
  font-weight: 400;
  font-size: 25px;
  letter-spacing: 3px;
}



.effect:nth-child(2) {
}

.effect:nth-child(2n+1) {
  background-color: var(--basic-light-color);
}

.effect:nth-child(2n+1) h2 {
  color: var(--basic-dark-color);
}

.effect .buttons {
  display: flex;
  justify-content: center;
}

.effect a:last-child {
  margin-right: 0px;
}


.effect a {
  text-decoration: none !important;
  color: var(--basic-light-color);
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  margin-right: 20px;
  font-size: var(--font-size);
  overflow: hidden;
  position: relative;
}

.effect a i {
  position: relative;
  z-index: 3;
  color: white;
  font-size: 40px;
}

.effect a.fb {
  background-color: #3C5998;
}

.effect a.tw {
  background-color: #00ACED;
}

.effect a.wchat {
  background-color: #08D669;
}

.effect a.telegram {
  background-color: #24A3E2;
}

.effect a.tiktok {
  background-color:#000000;
}

.effect a.insta {
  background: linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7);;
}

.effect a.in {
  background-color: #0E61BF;
}

.effect a.youtube {
  background-color: #FF0034;
}

.effect a.snapchat {
  background-color: #F7F402;
}

.effect a.tripadvisor{
background-color: #35E0A1
}

.effect.aeneas a {
  transition: transform 0.4s linear 0s,
  border-top-left-radius 0.1s linear 0s,
  border-top-right-radius 0.1s linear 0.1s,
  border-bottom-right-radius 0.1s linear 0.2s,
  border-bottom-left-radius 0.1s linear 0.3s;
}

.effect.aeneas a i {
  transition: transform 0.4s linear 0s;
}

.effect.aeneas a:hover {
  transform: rotate(360deg);
  border-radius: 50%;
}

.effect.aeneas a:hover i {
  transform: rotate(-360deg);
}


.sosial-title h2{
  font-size: 27px;
  font-weight: 900;
  position: relative;
  margin-bottom: 30px;
  color: #FFA500;
  text-align: center!important;

}

hr{
  width: 10%;
  height: 4px;
  background-color: #FFA500;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .effect a {
    text-decoration: none !important;
    color: var(--basic-light-color);
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    margin-right: 20px;
    font-size: var(--font-size);
    overflow: hidden;
    position: relative;
  }
}

@media (max-width: 767px) {
  .effect a {
    width: 60px;
    height: 60px;
    margin-top: 20px;
  }

  .effect .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>