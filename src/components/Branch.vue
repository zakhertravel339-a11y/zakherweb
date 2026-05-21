<template>

  <section id="branch-slider">
    <h2 style="margin-top: 50px">{{ $t('home.branches.title', 'OUR BRANCHES') }}</h2>
    <hr />
    <div class="wrapper">
      <i id="left" class="fa-solid fa-arrow-left"></i>
      <ul class="carousel">
        <li class="card">
          <div class="img">
            <router-link to="/azerbaijan"><img src="../assets/images/flag-aze.jpg" alt="human" draggable="false"></router-link>
          </div>

          <span>{{ $t('country.azerbaijan', 'Azerbaijan') }}</span>
        </li>

        <li class="card">
          <div class="img">
            <router-link to="/turkiye"><img src="../assets/images/generated%20flag.png" alt="human" draggable="false"></router-link>
          </div>
          <span>{{ $t('country.turkiye', 'Turkiye') }}</span>
        </li>
        <li class="card">
          <div class="img">
            <router-link to="/kazakhstan"><img src="../assets/images/Kazakhstan-Flag.jpg" alt="human" draggable="false"></router-link>
          </div>

          <span>{{ $t('country.kazakhstan', 'Kazakhstan') }}</span>
        </li>
        <li class="card">
          <div class="img">
            <router-link to="/kyrgyzstan"><img src="../assets/images/kyrgyzstan-flag.jpg" alt="human" draggable="false"></router-link>
          </div>

          <span>{{ $t('country.kyrgyzstan', 'Kyrgyzstan') }}</span>
        </li>

        <li class="card">
          <div class="img">
            <router-link to="/uzbekistan"> <img src="../assets/images/uzbekistan-flag-470x280.jpg" alt="human" draggable="false"></router-link>
          </div>

          <span>{{ $t('country.uzbekistan', 'Uzbekistan') }}</span>
        </li>


        <li class="card">
          <div class="img">
            <router-link to="/georgia"> <img src="../assets/images/georgia-flag.jpg" alt="human" draggable="false"></router-link>
          </div>

          <span>{{ $t('country.georgia', 'Georgia') }}</span>
        </li>
        <li class="card">
          <div class="img">
            <router-link to="/poland"> <img src="../assets/images/poland-flag.jpg" alt="human" draggable="false"></router-link>
          </div>

          <span>{{ $t('country.poland', 'Poland') }}</span>
        </li>
        <li class="card">
          <div class="img">
            <router-link to="/czech-republic"> <img src="../assets/images/czech-flag.jpg" alt="human" draggable="false"></router-link>
          </div>

          <span>{{ $t('country.czech', 'Czech Republic') }}</span>
        </li>
        <li class="card">
          <div class="img">
            <router-link to="/russia"> <img src="../assets/images/russia-flag.jpg" alt="human" draggable="false"></router-link>
          </div>

          <span>{{ $t('country.russia', 'Russia') }}</span>
        </li>

        <li class="card">
          <div class="img">
            <router-link to="/united-arab-emirates"> <img src="../assets/images/UAE-Flag.png" alt="human" draggable="false"></router-link>
          </div>

          <span>{{ $t('country.uae', 'UAE') }}</span>
        </li>
        <li class="card">
          <div class="img">
            <router-link to="/ukraine"> <img src="../assets/images/ukraine-flag.jpg" alt="human" draggable="false"></router-link>
          </div>

          <span>{{ $t('country.ukraine', 'Ukraine') }}</span>
        </li>
      </ul>
      <i id="right" class="fa-solid fa-arrow-right"></i>
    </div>
  </section>
</template>

<script scoped>
export default {
  mounted() {
    const carousel = this.$el.querySelector(".carousel");
    const arrowBtns = this.$el.querySelectorAll(".wrapper i");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const gap = 16; 

    
    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const scrollAmount = firstCardWidth + gap;
        carousel.scrollLeft += btn.id === "left" ? -scrollAmount : scrollAmount;
      });
    });

    
    let isDragging = false, startX, startScrollLeft;

    const dragStart = (e) => {
      isDragging = true;
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.classList.add("dragging");
      const newScrollLeft = startScrollLeft - (e.pageX - startX);
      carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
  }
}
</script>
<style scoped>

.wrapper {
  position: relative;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  margin-top: -30px;
}

.wrapper i {
  height: 50px;
  width: 50px;
  font-size: 1.25rem;
  background: #fff;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 3px 6px rgba(0,0,0,0.23);
}

.wrapper i:first-child {
  left: -22px;
}

.wrapper i:last-child {
  right: -22px;
}

.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% / 4) - 65px);
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type:x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  margin-right: 20px;
}

.carousel::webkit-scrollbar {
  display: none;
}

.carousel :where(.card, .img) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.carousel.no-transition {
  scroll-behavior: auto;
}

.carousel.dragging {
  scroll-behavior: auto;
  scroll-snap-type: none;
}

.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}

.carousel .card {
  scroll-snap-align: center;
  height: 342px;
  list-style: none;
  background: #fff;
  border-radius: 8px;
  padding-bottom: 15px;
  cursor: pointer;
  border: none;
}
.card .img {
  
  background: #ffa500;
  width: 148px;
  height: 148px;
  border-radius: 50%;
}

.card .img img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
}

.card h2 {
  font-weight: 500;
  font-size: 1.56rem;
  margin: 30px 0 5px;
}

.card span {
  color: #6a6d78;
  font-size: 1.31rem;
  margin-top: 15px;
}





@media (min-width: 768px) and (max-width: 1024px) {

  .wrapper .carousel {
    grid-auto-columns: calc((100% / 2));
    gap: -6px;
  }

  #left{
    left: 20px;
  }

  #right{
    right: 20px;
  }
  .wrapper i:first-child {
    left: -22px;
    z-index: 111;
  }

  .wrapper i:last-child {
    right: -22px;
  }
}


@media (max-width: 767px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
    margin-left: 27px;
  }


  .wrapper i:first-child {
    left: 22px;
    z-index: 111;
  }

  .wrapper i:last-child {
    right: 22px;
  }
}

#branch-slider h2{
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
  color: #FFA500;
  margin-top: 20px;
}

#branch-slider hr {
  width: 7%;
  height: 4px;
  background-color: #FFA500;
  margin: auto;
  border: none;
  margin-bottom: 50px;
}
#branch-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #fff;
}

html[dir="rtl"] #branch-slider,
html[lang="ar"] #branch-slider,
html[dir="rtl"] #branch-slider .wrapper,
html[lang="ar"] #branch-slider .wrapper,
html[dir="rtl"] #branch-slider .carousel,
html[lang="ar"] #branch-slider .carousel,
html[dir="rtl"] #branch-slider .card,
html[lang="ar"] #branch-slider .card {
  direction: ltr !important;
  text-align: center !important;
}

html[dir="rtl"] #branch-slider .wrapper,
html[lang="ar"] #branch-slider .wrapper {
  display: block !important;
  position: relative !important;
}

html[dir="rtl"] #branch-slider .wrapper i,
html[lang="ar"] #branch-slider .wrapper i {
  position: absolute !important;
  top: 50% !important;
  bottom: auto !important;
  transform: translateY(-50%) !important;
  height: 50px !important;
  width: 50px !important;
  line-height: 50px !important;
  text-align: center !important;
  margin: 0 !important;
  padding: 0 !important;
  z-index: 5 !important;
  float: none !important;
  vertical-align: middle !important;
}

html[dir="rtl"] #branch-slider .wrapper i#left,
html[lang="ar"] #branch-slider .wrapper i#left {
  left: -22px !important;
  right: auto !important;
}

html[dir="rtl"] #branch-slider .wrapper i#right,
html[lang="ar"] #branch-slider .wrapper i#right {
  right: -22px !important;
  left: auto !important;
}

html[dir="rtl"] #branch-slider .card span,
html[lang="ar"] #branch-slider .card span {
  direction: rtl !important;
  text-align: center !important;
  display: block !important;
  width: 100% !important;
}

@media (min-width: 768px) and (max-width: 1024px) {
  html[dir="rtl"] #branch-slider .wrapper i#left,
  html[lang="ar"] #branch-slider .wrapper i#left {
    left: -22px !important;
    right: auto !important;
  }
  html[dir="rtl"] #branch-slider .wrapper i#right,
  html[lang="ar"] #branch-slider .wrapper i#right {
    right: -22px !important;
    left: auto !important;
  }
}

@media (max-width: 767px) {
  html[dir="rtl"] #branch-slider .wrapper i#left,
  html[lang="ar"] #branch-slider .wrapper i#left {
    left: 22px !important;
    right: auto !important;
  }
  html[dir="rtl"] #branch-slider .wrapper i#right,
  html[lang="ar"] #branch-slider .wrapper i#right {
    right: 22px !important;
    left: auto !important;
  }
}
</style>

