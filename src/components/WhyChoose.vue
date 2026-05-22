<script setup>

</script>

<template>
  
  <section id="service" data-no-translate>
    <h1>{{ $t('home.why.title', 'WHY CHOOSE US?') }}</h1>
    <hr>
    <div class="items">
      <div class="item">
        <a href=""><img src="../assets/images/24-hours-support%20(2).png" alt=""></a>
        <h2>{{ $t('home.why.1.title', '1 management - 10 tourist destinations') }}</h2>
        <p>{{ $t('home.why.1.text', 'Offering and managing 10 tourist destinations. Offline support(by call, by e-mail, by Whatsapp) 24/7') }}</p>
      </div>
      <div class="item">
        <a href=""><img src="../assets/images/b2b-marketing.png" alt=""></a>
        <h2>{{ $t('home.why.2.title', 'B2b online platform') }}</h2>
        <p>{{ $t('home.why.2.text', 'A B2B (business-to-business) online platform is a digital marketplace or e-commerce solution that enables businesses to buy a services to other businesses online. These platforms facilitate transactions, streamline processes, and often offer features tailored for the complexities of business-to-business interactions.') }}</p>
      </div>
      <div class="item">
        <a href=""><img src="../assets/images/card.png" alt=""></a>
        <h2>{{ $t('home.why.3.title', 'Online Payment') }}</h2>
        <p>{{ $t('home.why.3.text', 'Online payments involve transactions conducted over the internet to pay for goods or services, either purchased online or offline. They utilize secure platforms and various methods, including credit/debit card transactions, digital wallets, and bank transfers. These payments are crucial for e-commerce and online banking.') }}</p>
      </div>
      <div class="item">
        <a href=""><img src="../assets/images/best.png" alt=""></a>
        <h2>{{ $t('home.why.4.title', 'World Class Service') }}</h2>
        <p>{{ $t('home.why.4.text', 'World-class service is a commitment to consistently exceeding customer expectations and providing exceptional experiences across all interactions. It goes beyond basic customer service by focusing on personalized, proactive, and memorable interactions. This includes understanding customer needs, anticipating their requests, and going the extra mile to create satisfaction and loyalty.') }}</p>
      </div>

    </div>
  </section>
  
</template>

<style scoped>



#service {
  width: 100%;
  padding: 30px 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

#service h1 {
  font-size: 25px;
  font-weight: 900;
  margin: 30px 0;
}

#service h2 {
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
}

#service p{
  font-size: 14px;
}

#service hr {
  width: 3%;
  height: 4px;
  background-color: #FFA500;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}

#service .items {
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; 
  padding-top: 30px;
}

#service .items .item {
  flex: 0 0 calc(25% - 20px);
  max-width: calc(25% - 20px);
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}


#service .items .item:hover {
  transform: translateY(-5px);
}


#service .items .item img {
  max-width: 100px;
  width: 90px;
  height: auto;
  margin-bottom: 15px;
}


@media (max-width: 992px) {
  #service .items .item {
    flex: 0 0 48%;
    max-width: 48%;
  }
}

@media (max-width: 576px) {
  #service .items .item {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width:1280px) {

  #service .items{
    width: 100%;
  }
}

@media (max-width:486px) {


  #service .items .item{
    width: 85%;
    margin: auto;
  }}


</style>