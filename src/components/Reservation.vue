<script setup>

</script>

<template>
  

  <div class="container text-center mt-4 reservation" style="position: relative;">

    <h1 class="title">Booking Details</h1>

    <div class="card m-auto">

      <form>

        <input type="text" placeholder="FullName">

        <input type="email" placeholder="Email">

        <input type="tel" placeholder="Phone">

        <input type="text" placeholder="Adress">

        <textarea placeholder="Note"></textarea>

        <div class="buttons">


          <router-link to="/confirm"><button type="" class="login-button">Booking</button></router-link>

        </div>

      </form>

    </div>





  </div>


  
</template>

<style scoped>


.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #333;
}


.card {
  background-color: #fff;
  border-radius: 12px;
  padding: 30px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}


.card form input,
.card form textarea {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.card form input:focus,
.card form textarea:focus {
  border-color: #FFA500;
  outline: none;
}


.card form textarea {
  resize: vertical;
  min-height: 100px;
}


.login-button {
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #e08b00;
}

.buttons {
  text-align: center;
  margin-top: 10px;
}





@media (max-width: 768px) {
  .title {
    font-size: 26px;
  }

  .card {
    padding: 20px 15px;
  }

  .login-button {
    width: 100%;
  }


}

@media (max-width: 480px) {
  .title {
    font-size: 22px;
  }

  .card form input,
  .card form textarea {
    font-size: 14px;
  }

  .login-button {
    font-size: 15px;
  }
}
</style>