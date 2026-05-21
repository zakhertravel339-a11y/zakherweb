<script setup>

</script>

<template>
  


  <div class="destination mt-5 ">

    <div class="container mt-2">

      
      <h2 class="tour-package">Our Tour Packages</h2>

      <hr class="tour-hr" />

      <div class="row text-center">



        <div class="col-md-3 col-sm-6 item mb-3">

          <div class="card item-card card-block">

            <div class="dest-count">



            </div>
            <router-link to="/azerbaijan-tours"> <img src="../assets/images/flame_towers_enhanced.jpg"

                                           alt="Photo of sunset"></router-link>




            <h4 class="item-card-title text-center p-2"><i>Azerbaijan</i></h4>

          </div>

        </div>

        <div class="col-md-3 col-sm-6 item mb-3">

          <div class="card item-card card-block">

            <div class="dest-count">



            </div>

            <router-link to="/turkiye-tours"><img src="../assets/images/capadocya-turkiya.jpg"

                 alt="Photo of sunset"></router-link>

            <h4 class="item-card-title text-center  p-2"><i>Turkiye</i> </h4>

          </div>

        </div>



        <div class="col-md-3 col-sm-6 item">

          <div class="card item-card card-block">

            <div class="dest-count">



            </div>

            <router-link to="/uzbekistan-tours"><img src="../assets/images/uzbekistan-tour.jpg"

                 alt="Photo of sunset"></router-link>

            <h4 class="item-card-title text-center p-2"><i>Uzbekistan</i></h4>

          </div>

        </div>

        <div class="col-md-3 col-sm-6 item">

          <div class="card item-card card-block">

            <div class="dest-count">



            </div>

            <router-link to="/kazakhstan-tours"><img src="../assets/images/kazakhstan-tour.jpg" alt=""></router-link>

            <h4 class="item-card-title text-center  p-2"><i>Kazakhstan</i></h4>

          </div>

        </div>

        <div class="col-md-3 col-sm-6 item">

          <div class="card item-card card-block">

            <div class="dest-count">


            </div>

           <router-link to="/kyrgyzstan-tours"><img src="../assets/images/kyrgyzstan-tour.jpg"

                 alt="Photo of sunset"></router-link>

            <h4 class="item-card-title text-center  p-2"><i>Kyrgyzstan</i></h4>

          </div>

        </div>

        <div class="col-md-3 col-sm-6 item mb-3">

          <div class="card item-card card-block">

            <div class="dest-count">


            </div>

            <router-link to="/georgia-tours"><a href="./tour-list.html"><img src="../assets/images/Georgia-tour.jpg"

                                            alt="Photo of sunset"></a></router-link>

            <h4 class="item-card-title text-center  p-2"><i>Georgia</i></h4>

          </div>

        </div>

        <div class="col-md-3 col-sm-6 item mb-3">

          <div class="card item-card card-block">

            <div class="dest-count">



            </div>

            <router-link to="/poland-tours"> <img src="../assets/images/poland-tour.jpg"

                                           alt="Photo of sunset"></router-link>

            <h4 class="item-card-title text-center  p-2"><i>Poland</i></h4>

          </div>

        </div>

        <div class="col-md-3 col-sm-6 item">

          <div class="card item-card card-block">

            <div class="dest-count">



            </div>

            <img src="../assets/images/Czech-Republic-tour.jpg"

                 alt="Photo of sunset">

            <h4 class="item-card-title text-center  p-2"><i>Czech Republic</i></h4>

          </div>

        </div>

        <div class="col-md-3 col-sm-6 item mb-3">

          <div class="card item-card card-block">

            <div class="dest-count">



            </div>

            <router-link to="/russia-tours"><img src="../assets/images/russia-tour.jpg"

                 alt="Photo of sunset"></router-link>

            <h4 class="item-card-title text-center  p-2"><i>Russia</i></h4>

          </div>

        </div>

        <div class="col-md-3 col-sm-6 item mb-3">

          <div class="card item-card card-block">

            <div class="dest-count">


            </div>

            <img src="../assets/images/uae%20tour.jpg"

                 alt="Photo of sunset">

            <h4 class="item-card-title text-center  p-2"><i>UAE</i></h4>

          </div>

        </div>

        <div class="col-md-3 col-sm-6 item">

          <div class="card item-card card-block">

            <div class="dest-count">



            </div>

            <router-link to="/ukraine-tours"><img src="../assets/images/ukraine-tour.jpg"

                 alt="Photo of sunset"></router-link>

            <h4 class="item-card-title text-center  p-2"><i>Ukraine</i></h4>

          </div>

        </div>



      </div>



    </div>



  </div>



  
</template>

<style scoped>

.destination{
  margin-top: 50px;
}


.destination h2 em {
  font-style: normal;
  color: #DBA337;
}

.destination img{
  height: 200px;
  width:100%;
}

.destination .item{
  padding-left:5px;
  padding-right:5px;
}
.destination .item-card{
  transition:0.5s;
  cursor:pointer;
  position: relative;
}
.destination .item-card-title{
  font-size:15px;
  transition:1s;
  cursor:pointer;
}
.destination .item-card-title i{
  font-size:15px;
  transition:1s;
  cursor:pointer;
  color:#ffa710
}
.destination .card-title i:hover{
  transform: scale(1.25) rotate(100deg);
  color:#18d4ca;

}
.destination .card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}


.destination .card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}
.destination .card::before {
  transform-origin: left top;
}
.destination .card::after {
  transform-origin: right bottom;
}
.destination .card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  transform: scale3d(1, 1, 1);
}

.dest-count{
  position: absolute;
  z-index: 11;
  color:white;
  font-weight: 700;
  margin-left: 70%;
  margin-top:50% ;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .item-card{
    height: 200px;
  }

  .item-card img{
    height: 150px;
  }

  .item-card-title{
    text-align: center;
    margin: auto;
  }
}


.tour-package{
  font-weight: 600;
  color: #FFA500;
  font-size: 35px;
  text-align: center!important;
  font-weight: 600;
  margin-top: 20px;
}

.tour-hr{
  width: 15%;
  height: 4px;
  background-color: orange;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}
</style>