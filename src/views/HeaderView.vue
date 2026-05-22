<template>
    
  <header data-no-translate>



    <nav>

      <div class="bar-icon">

        <button type="button" class="burger-btn" aria-label="Open menu" @click="openMobileMenu">
          <i class="fa-solid fa-bars"></i>
        </button>

      </div>

      <img src="https://www.zakher.travel/wp-content/uploads/2019/11/cropped-Webp.net-resizeimage.png" alt="">

      <div class="menu" :class="{ active: mobileMenuOpen }">

        <i class="fa-solid fa-xmark" role="button" aria-label="Close menu" @click="closeMobileMenu"></i>

        <div class="bar-menu">

          <ul>
            <li><router-link to="/" @click="closeMobileMenu">{{ $t('header.menu.home', 'HOME') }}</router-link></li>
            <li><router-link to="/about-us" @click="closeMobileMenu">{{ $t('header.menu.about', 'ABOUT US') }}</router-link></li>

            <li><router-link to="/ourbranches" @click="closeMobileMenu">{{ $t('header.menu.branches', 'OUR BRANCHES') }}</router-link></li>

            <li><router-link to="/ourservices" @click="closeMobileMenu">{{ $t('header.menu.services', 'SERVICES') }}</router-link></li>

            <li><router-link to="/tour-packages" @click="closeMobileMenu">{{ $t('header.menu.tours', 'TOUR PACKAGES') }}</router-link></li>

            <li><router-link to="/social-media" @click="closeMobileMenu">{{ $t('header.menu.social', 'SOCIAL MEDIA') }}</router-link></li>

            <li><router-link to="/contact-us" @click="closeMobileMenu">{{ $t('header.menu.contact', 'CONTACT US') }}</router-link></li>

          </ul>



          <div class="d-flex mobile-icons">




            

            <p >

              <a class="b2b text-decoration-none" href="https://b2b.zakher.travel/">

                <i style=" border: 1px solid white; padding: 3px 11px 4px 15px; width: 80px; height: 28px;  margin-left: 4px; margin-right: 17px; color:white;">B2B</i>

              </a>

            </p>



            

            <div class="languages" @click.stop>

              <span class="current" :title="i18n.currentLanguage.title" style="border:1px solid white;color: white;background-color: transparent;height: 28px;cursor:pointer;" @click="toggleLangMenu($event)">{{ i18n.currentLanguage.label }}</span>

              <ul :class="{ open: langMenuOpen }" style="height: auto;width: 60px; padding-right: 14px!important;">
                <li v-for="lang in languages" :key="lang.code">
                  <a href="#" :class="{ sel: i18n.language === lang.code }" @click.prevent="changeLanguage(lang.code)">{{ lang.label }}</a>
                </li>
              </ul>

            </div>

          </div>

        </div>

      </div>



      <div class="navbar">

        <ul class="mt-4">
          <li><router-link to="/">{{ $t('header.menu.home', 'HOME') }}</router-link></li>

          <li><router-link to="/about-us">{{ $t('header.menu.about', 'ABOUT US') }}</router-link></li>

          <li><router-link to="/ourbranches">{{ $t('header.menu.branches', 'OUR BRANCHES') }}</router-link></li>

          <li><router-link to="/ourservices">{{ $t('header.menu.services', 'SERVICES') }}</router-link></li>

          <li><router-link to="/tour-packages">{{ $t('header.menu.tours', 'TOUR PACKAGES') }}</router-link></li>

          <li><router-link to="/social-media">{{ $t('header.menu.social', 'SOCIAL MEDIA') }}</router-link></li>

          <li><router-link to="/contact-us">{{ $t('header.menu.contact', 'CONTACT US') }}</router-link></li>

        </ul>

        <div class="header-icons" style="display: flex; align-items: center; gap: 10px;margin-top: 6px; margin-right: -100px; margin-left: 60px">


          <p style="height: 27px;margin-top: 19px;
    width: 55px;" class="icon-box">
            <a class="b2b text-decoration-none" href="https://b2b.zakher.travel/"><i  style="font-style: normal; color: orange;font-size: 18px;padding: 5px;
    margin-left: -2px;margin-right: 4px;">B2B</i></a>
          </p>

          <div class="languages icon-box" @click.stop>
            <span class="current" :title="i18n.currentLanguage.title" style="border: none;font-size: 17px;font-weight: normal;padding: 2px 7px;margin-top: 5px;cursor:pointer;" @click="toggleLangMenuDesktop($event)">{{ i18n.currentLanguage.label }}</span>
            <ul :class="{ open: langMenuDesktopOpen }">
              <li v-for="lang in languages" :key="lang.code" style="padding: 0;">
                <a href="#" :class="{ sel: i18n.language === lang.code }" @click.prevent="changeLanguage(lang.code)">{{ lang.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>


  </header>
  












</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18nStore, SUPPORTED_LANGUAGES } from "@/store/i18nStore.js";

const i18n = useI18nStore();
const languages = SUPPORTED_LANGUAGES;
const langMenuOpen = ref(false);
const langMenuDesktopOpen = ref(false);
const mobileMenuOpen = ref(false);

function openMobileMenu() {
  mobileMenuOpen.value = true;
  document.body.classList.add("no-scroll");
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
  document.body.classList.remove("no-scroll");
}

function toggleLangMenu(e) {
  e?.stopPropagation();
  langMenuOpen.value = !langMenuOpen.value;
}

function toggleLangMenuDesktop(e) {
  e?.stopPropagation();
  langMenuDesktopOpen.value = !langMenuDesktopOpen.value;
}

async function changeLanguage(code) {
  langMenuOpen.value = false;
  langMenuDesktopOpen.value = false;
  await i18n.setLanguage(code);
}

function onDocumentClick() {
  langMenuOpen.value = false;
  langMenuDesktopOpen.value = false;
}

function onScroll() {
  const nav = document.querySelector("nav");
  if (!nav) return;
  nav.style.position = window.scrollY >= 47 ? "fixed" : "";
}

onMounted(() => {
  document.addEventListener("click", onDocumentClick);
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  document.removeEventListener("click", onDocumentClick);
  window.removeEventListener("scroll", onScroll);
  document.body.classList.remove("no-scroll");
});
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900&display=swap');
header {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}


nav {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 20px 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10000;
  transition: .5s;
}



.register a {
  color: rgb(180, 176, 176);
  margin-left: 6px;
}
.register {
  width: 100%;
  background-color: rgb(65, 75, 79);
  display: flex;
  justify-content: space-around;
  color: rgb(180, 176, 176);
  padding: 15px 0px;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
}
.no-scroll {
  overflow: hidden;
  overscroll-behavior: none;
}

.search-item {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 20000; 
  display: none;
}

.search-item .fa-xmark {
  font-size: 35px;
  color: #000; 
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 200010000; 
}

.search-item .btn-input{
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
}
.search-item .btn-input input{
  width: 85%;
  padding: 18px 10px;
  border: none;
  outline: none;
}
.search-item .btn-input button{
  width: 15%;
  padding: 15px;
  background-color: #FFA500;
  border: none;
  font-size: 20px;
}

.login {
  width: 50px;
  background-color: rgb(47, 51, 48);
  height: 50px;
}
.flickity-prev-next-button,.flickity-page-dots{
  display: none;
}

nav .bar-icon i{
  font-size: 27px;
  margin: 0;
  color: rgb(60, 59, 59);
}
nav .bar-icon .burger-btn {
  border: none;
  background: transparent;
  padding: 8px;
  cursor: pointer;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
nav .bar-icon{
  display: none;

}

nav .menu {
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  background: linear-gradient(321deg, rgba(249, 147, 47, 1) 0%, rgba(251, 178, 64, 1) 64%, rgba(255, 218, 87, 1) 100%);
  color: #FFF;
  z-index: 10000;
  opacity: 0;
  transform: translateY(-20px);
  pointer-events: none;
  transition: opacity 0.6s ease, transform 0.6s ease;
}

nav .menu.active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

nav .menu > i {
  font-size: 35px;
  color: #FFA500;
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
}

nav .bar-menu {
  text-align: center;
  padding: 20px;
  margin: auto;
  margin-top: 40px;
  transition: opacity 0.6s ease, transform 0.6s ease;
}

nav .bar-menu ul{
  list-style: none;
}
nav .bar-menu ul li{
  margin-bottom: -10px;
  margin-left: -10px;
  font-size: 40px;
  font-weight: bold;

}
nav .bar-menu ul a{
  color: white;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
}
nav .bar-menu ul li:hover a{

}
nav .navbar {
  display: flex;
  position: fixed;

}

nav img {
  object-fit: contain;
  height: 80px;
  margin-right: auto;
  margin-left: 30px;
  margin-top: 5px;
}


nav .search{
  height: 100%;
  width: 50px;
  text-align: center;
  line-height: 23px;
  color: #FFA500;
  cursor: pointer;
  margin-top: 5px;
  transition: .5s;
  padding-bottom: 2px;
}

nav .search .icon-box i{
  font-size: 16px;
  color: #000;
}
nav .search:hover{

}

nav .navbar ul li {
  display: inline-block;
  padding: 10px 20px;
  position: relative;
}

nav  .navbar ul li:hover a {
  color: #FFA500;
}

nav .navbar ul li ::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #FFA500;
  left: 0;
  bottom: -10px;
  opacity: 0;
  transition: .3s;
}

nav .navbar ul li:hover ::after {
  opacity: 1;
  bottom: 0;
}

nav .navbar li a {
  text-decoration: none;
  font-size: 16px;
  font-weight: 1000;
  color: black;
  transition: .3s;
  font-family: 'Roboto', sans-serif;
}



@keyframes slideH1 {
  0% {
    top: 100px;
    opacity: 0;
  }

  100% {
    top: 0px;
    opacity: 1;
  }
}

@keyframes slideP {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}




nav .bar-icon{
  margin: 0;
  flex-shrink: 0;
}

nav .menu ul li a{
  text-decoration: none;
}
.languages{
  width: 50px;
  height: 30px;
  position: relative;
  display:inline-block;
  padding-right:17px;
  margin-left: -1px;
  z-index: 2000;

}

.icon-box {
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
}

.languages .hover {
  background: #e5e5e5;
  position: absolute;
  top: 0;
  right: 100%;
  display: none;
  margin-right: 5px;
  padding: 0 5px;
  line-height: 10px;
}

.languages .current {
  display: inline-block;
  line-height: 22px;
  font-size:14px;
  color: #FFA500;
  background: white;
  transition: all 0.3s ease;
  height: 29px;
}

.languages ul {
  margin-top: 4px;
  width: 55px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #FFA500;
  border-radius: 4px;
  display: none;
  position: absolute;
  list-style: none;
  font-size: 13px;
  top: 100%;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  padding-left:14px;
  padding-right:14px;
}

.languages ul li {
  text-align: center;
}

.languages ul li a {
  text-decoration: none;
  display: block;
  padding: 6px 0;
  color: #333;
  text-align: center;
  transition: background-color 0.2s, color 0.2s;
}
.languages ul.open {
  display: block;
  text-align:center ;
}

.languages ul li a.sel {
  color: #FFA500;
  font-weight: bold;
}

.languages ul li a:hover {
  color: #000;
}

.languages:hover .hover {
  display: inline-block;
}

.languages:hover::after {
  border-top-color: #000;
}

.languages .current:hover {
  cursor: pointer;
}



.no-scroll {
  overflow: hidden;
}



.active {
    color: red;
}


.mobile-icons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
}


.mobile-icons i,
.mobile-icons .current {
  border: none !important;
  background: none !important;
  color: white !important;
  padding: 0;
  margin: 0;
}


.mobile-icons .b2b i {
  font-style: normal;
  font-weight: 500;
}


.mobile-icons .languages {
  position: relative;
}

.mobile-icons.languages .current {
  cursor: pointer;
}

.languages ul li a {
  color: #ffa500;
  text-decoration: none;
  display: block;
  font-size: 14px;
}

.languages ul li a:hover {
  background: rgba(255, 255, 255, 0.2);
}


@media (max-width: 767px) {
  .mobile-icons {
    justify-content: center;
    gap: 18px;
  }

  .mobile-icons i,
  .mobile-icons .current {
    font-size: 14px;
  }

  .languages ul {
    top: 28px;
  }

  nav {
    justify-content: space-between !important;
    align-items: center;
    padding: 10px 16px;
    min-height: 72px;
  }

  nav .bar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: static;
    order: 2;
    margin: 0;
    top: auto;
    right: auto;
  }

  nav .bar-icon i {
    font-size: 24px;
  }

  nav img {
    order: 1;
    width: auto;
    height: 56px;
    max-width: calc(100% - 56px);
    padding-top: 0;
    margin: 0;
  }

  nav .navbar {
    display: none;
  }


  nav .bar-menu{
    width: 55%;
  }
  header .slide-text{
    width: 100%;
  }
  header .slide-text{
    left: 3% !important;
  }
  header .slide-text h1{
    font-size: 30px;
  }
  header .pagination{
    display: none;
  }

  .bar-menu .search,
  .bar-menu .languages,
  .bar-menu .b2b {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  .bar-menu .languages {
    flex-direction: column;
    align-items: center;
  }

  .bar-menu .languages ul {
    margin-top: 5px;

  }

  .bar-menu .b2b i {
    font-size: 14px;
   margin-top: 12px!important;
  }

  nav .search{
    height: 100%;
    width: 50px;
    text-align: center;
    line-height: 23px;
    color: #FFA500;
    cursor: pointer;
    margin-top: 18px;
    transition: .5s;
  }
  .search-item {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    z-index: 9999;
  }

  .search-item.open {
    display: block;
  }



  .search-item {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 20000; 
    display: none;
  }


  .fa-xmark{
    color: white!important;
    margin-top: 30px;
    margin-right: 30px;
  }
  .search-item .fa-xmark {
    font-size: 35px;
    color: #ffa500!important;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    z-index: 20001000000000;
  }
  .search-item .btn-input{
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
  }
  .search-item .btn-input input{
    width: 85%;
    padding: 18px 10px;
    border: 1px solid #ffa500;
    outline: none;
  }
  .search-item .btn-input button{
    width: 25%;
    padding: 15px;
    background-color: #FFA500;
    border: none;
    font-size: 20px;
  }

}


@media (min-width: 768px) and (max-width: 1024px) {
  .mobile-icons {
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
  }
  .search-item .fa-xmark {
    font-size: 35px;
    color: #ffa500;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    z-index: 20001000000000;
  }

  .mobile-icons i,
  .mobile-icons .current {
  }

  nav .navbar {
    display: none;
    justify-content: flex-start;
    padding-bottom: 20px;
  }

  nav {
    justify-content: space-between !important;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
  }

  nav img {
    width: auto;
    height: 64px;
    padding-top: 0;
    margin: 0;
  }

  nav .navbar {
    display: none;
  }

  nav .bar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: static;
    order: 2;
    margin: 0;
  }

  .bar-menu .search,
  .bar-menu .languages,
  .bar-menu .b2b {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  .bar-menu .b2b i {
    font-size: 30px;
  }

  .bar-menu .current {
    font-size: 30px;
    margin-top: 5px !important;
  }

  .bar-menu i {
    font-size: 30px;
    margin-bottom: 2px !important;
  }

  nav .search {
    height: 100%;
    width: 50px;
    text-align: center;
    line-height: 23px;
    color: #FFA500;
    cursor: pointer;
    margin-top: 5px;
    transition: .5s;
    padding-bottom: 2px;
  }


  nav .bar-menu {
    text-align: center;
    padding: 20px;
    margin: auto;
    margin-top: 80px;
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  nav .bar-menu ul {
    list-style: none;

  }

  nav .bar-menu ul li {
    margin-left: -10px;
    font-size: 80px;
    font-weight: bold;

  }

  nav .bar-menu ul a {
    color: white;
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
  }

  nav .bar-menu ul li:hover a {

  }

  .languages ul a {
    color: #FFA500 !important;
    font-size: 30px!important;
  }

  .languages ul {
    width: 90px !important;
    height: 450px !important;
    margin-left: -17px;
    margin-bottom: 5px;
  }
  .fa-xmark{
    color: white!important;
    margin-top: 30px;
    margin-right: 30px;
  }
  .search-item .fa-xmark {
    font-size: 35px;
    color: #ffa500!important;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    z-index: 20001000000000;
  }
  .search-item .btn-input{
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
  }
  .search-item .btn-input input{
    width: 85%;
    padding: 18px 10px;
    border: 1px solid #ffa500;
    outline: none;
  }
  .search-item .btn-input button{
    width: 25%;
    padding: 15px;
    background-color: #FFA500;
    border: none;
    font-size: 20px;
  }
}

@media (min-width: 1025px) {
  nav {
    justify-content: space-around;
  }
}

</style>