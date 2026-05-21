<script setup>

</script>

<template>
  

  <div>

    <div class="container ">



      <div class="row">

        <div class="col-12 ">

          <div class="message-box">

            <div class="success-container">

              <div style="padding-left: 5%; padding-right: 5%">



              </div>

              <br>

              <h1 class="monserrat-font" style="color: Grey">Thank you for your reservation</h1>

              <br>



              <div class="confirm-green-box">

                <br>

                <h5>Reservation CONFIRMATION</h5>

                <p>Your reservation #2465 has been sucessful!</p>

                <p>Thank you for choosing Us! You will shortly receive a confirmation email.</p>

              </div>



              <br>

              <router-link to="/about-us"> <button id="create-btn" class="btn btn-ouioui-secondary margin-left-5px">Back to Tour Page</button></router-link>
            </div>

          </div>

        </div>

      </div>



    </div>

  </div>

  
</template>

<style scoped>

.message-box{
  display: flex;
  justify-content: center;
  padding-top: 20vh;
  padding-bottom: 20vh;
}
.success-container{
  background: white;
  height: 350px;
  width: 90%;
  box-shadow: 5px 5px 10px grey;
  text-align: center;
  margin-top: -70px;
}
.confirm-green-box{
  width: 100%;
  height: 140px;
  background: #F9932F;
  background: linear-gradient(321deg, rgba(249, 147, 47, 1) 0%, rgba(251, 178, 64, 1) 64%, rgba(255, 218, 87, 1) 100%);

}


.monserrat-font{
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
}


#create-btn:hover{
  color: #ffa500;
}



.main{
  width:80vw;
  margin: 0 10vw;
  height:50vh;
  overflow:hidden;

}

body{
  font-family: 'Montserrat', sans-serif;
}



:root {
  --background-1: #ffffff;
  --background-2: #E3E3E3;
  --background-3: #A3CCC8;
  --text-1: #000000;
  --text-2: #ffffff;
  --text-size-reg: calc(20px + (20 - 18) * ((100vw - 300px) / (1600 - 300)));
  --text-size-sml: calc(10px + (10 - 8) * ((100vw - 300px) / (1600 - 300)));
}

.verticle-align{
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
}

.no-style{
  padding:0;
  margin:0;
}







@media (min-width: 576px) { 

}


@media (min-width: 768px) {

}


@media (min-width: 992px) {


}


@media (min-width: 1200px) {

}
</style>