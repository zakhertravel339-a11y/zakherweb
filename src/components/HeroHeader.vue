<template>

  

  <div class="container-fluid bg-primary py-5  hero-header" >

    <div class="container py-5">

      <div class="row justify-content-center py-5">

        <div class="col-lg-10 text-center">

          <div class="tg-container">

            <h3 class="caption-title">
              <span>{{ $t('hero.tagline', 'Your online and offline supplier in the world') }} </span>
            </h3>
          </div>

        </div>

      </div>

    </div>

  </div>



  
</template>


<style scoped>

.hero-header {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(
      120deg,
      #EC7229 0%,
      #f4a43a 50%,
      #d89b23 100%
  );






}


.hero-header::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.18),
      transparent 70%
  );
  transform: rotate(25deg);
  animation: lightMove 8s infinite linear;
  z-index: 1;
}


@keyframes lightMove {
  0% {
    transform: translateX(-40%) rotate(25deg);
  }
  100% {
    transform: translateX(40%) rotate(25deg);
  }
}


.hero-header h1 {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: white;
  font-size: 76px;
  z-index: 2;
  animation: fadeInUp 1s ease-in-out forwards;
}


@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.tg-container {
  left: 0;
  position: absolute;
  top: 50%;
  margin-top: 40px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}

.caption-title {
  border: 4px solid rgba(255, 255, 255, 0.7);
  color: #ffffff;
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 3px;
  line-height: 50px;
  text-shadow: 0 2px 5px #333333;
  border-right: none;
  border-left: none;
  width: 78%;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  margin: 0 auto;
}

.caption-title a {
  color: #ffffff;
}

.caption-title a:hover {
  color: #32c4d1;
}

.caption-title span {
  display: block;
  padding: 26px 40px;
  position: relative;
}

.caption-title span:after,
.caption-title span:before {
  background: rgba(255, 255, 255, 0.7) none repeat scroll 0 0;
  content: "";
  height: 4px;
  left: -102px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 102px;
}

.caption-title span:before {
  left: auto;
  right: -102px;
}

.caption-title:before,
.caption-title:after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background: url("https://www.zakher.travel/wp-content/themes/himalayas/images/slider-title-new-arrow.png") no-repeat scroll 0 center;
  width: 4px;
  height: 100%;
}

.caption-title:after {
  right: 0;
  left: auto;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

.caption-sub {
  color: #ffffff;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 38px;
  text-align: center;
  width: 1068px;
  margin: 50px auto;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .caption-title {
    font-size: 30px;
  }
}


@media (max-width: 767px) {
  .caption-title {
    font-size: 28px;
  }
}
</style>

<script setup>

</script>
