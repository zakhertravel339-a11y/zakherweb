<script setup>

</script>

<template>
  

  <div class="container">

    <div class="card-list" style="margin-top: 150px">

      <div class="card">

        <div class="d-flex ">

          <img src="../assets/images/georgia-tour.jpeg" alt="Tour Image">

          <div class="card-content text-start">

            <h2>Georgia</h2>

            <h3>Georgia tours...<router-link to="/georgia-tour">Read more.</router-link></h3>



          </div>

        </div>

      </div>


    </div>

  </div>

  
</template>

<style scoped>

.card {
  background: #F9932F;
  background: linear-gradient(321deg, rgba(249, 147, 47, 1) 0%, rgba(251, 178, 64, 1) 64%, rgba(255, 218, 87, 1) 100%);
  color: white;
  border-radius: 16px;
  width: 1000px !important;
  max-width: 1200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  height: 150px;
  margin:auto ;
  margin-bottom: 10px;
}

.card img {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-left: 20px;
}

.card-content {
  padding: 10px 25px;
  text-align: start;
}

.card h2 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
}

.card h3 {
  margin: 8px 0 16px;
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
}


.card h3 a {
  text-decoration: none;
  color: white;

}

.card h3 a:hover {
  color: #002D70 !important;
}


.card-list {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
}

@media (max-width: 992px) {
  .card {
    flex-direction: column;
    width: 90% !important;
    height: auto;
    padding: 10px;
    text-align: center;
  }

  .card .d-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card img {
    width: 90%;
    height: auto;
    max-width: 300px;
    margin: 10px auto;
    border-radius: 12px;
  }

  .card-content {
    padding: 15px;
    text-align: center;
  }

  .card h2 {
    font-size: 1.2rem;
  }

  .card h3 {
    font-size: 1rem;
    color: black;
  }

  .card h3 a {
    font-size: 1rem;
    color: white;
  }
}

@media (max-width: 576px) {
  .card {
    padding: 10px 10px;
  }

  .card h2 {
    font-size: 1.1rem;
  }

  .card h3 {
    font-size: 0.95rem;
  }

  .card img {
    max-width: 100%;
    margin: 0 auto 10px;
  }

  .card-content {
    padding: 10px;
  }
}

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
      153deg,
      rgba(248, 134, 40, 1) 0%,
      rgba(250, 162, 56, 1) 50%,
      rgba(252, 185, 68, 1) 100%
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



</style>