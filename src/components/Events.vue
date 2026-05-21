<script setup>

</script>

<template>
  
  <section class="events-section">
    <div class="events-content">
      <h2>Our Events</h2>
      <p>Zakher Travel represents our country at numerous large-scale international events.</p>

      <router-link to="/about-events" class="read-more">Read More</router-link>
    </div>
  </section>



</template>

<style scoped>

.events-section {
  width: 100%;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background: radial-gradient(ellipse at center, #d89b23 1%, #ee803d 100%);
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
}


.events-section::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.15),
      transparent 70%
  );
  transform: rotate(25deg);
  animation: lightMove 8s infinite linear;
}

@keyframes lightMove {
  0% { transform: translateX(-50%) rotate(25deg); }
  100% { transform: translateX(50%) rotate(25deg); }
}


.events-content {
  position: relative;
  max-width: 600px;
  z-index: 2;
  animation: fadeInUp 1s ease forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.events-content h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.events-content p {
  font-size: 1.1rem;
  margin-bottom: 25px;
  line-height: 1.6;
  opacity: 0.9;
}


.read-more {
  display: inline-block;
  background: #fff;
  color: #f88628;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.read-more:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  background: #fef3e6;
  color: grey;
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