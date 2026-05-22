<template>
  
  <footer data-no-translate>
    <div class="footer-menu">
      <div class="lists">
        <div class="item contact">
          <h3>{{ $t('footer.section.contact', 'CONTACT') }}</h3>


          <p><i class="fa-solid fa-location-dot"></i> {{ $t('footer.contact.address', 'Azerbaijan, Baku, Huseyn Javid Ave 73, AZ1073') }}</p>

          <p><i class="fa-solid fa-phone"></i> <a href="tel:+994 50 253 22 09">+994 50 253 22 09</a><br>
            <i class="fa-solid fa-phone"></i> <a href="tel:+971 56 590 21 00">+971 56 590 21 00</a><br>
            <i class="fa-solid fa-phone"></i><a href="tel:+994 12 310 09 32">+994 12 310 09 32</a></p>
          <p><i class="fa-solid fa-envelope"></i> <a href="mailto:info@zakher.travel">info@zakher.travel</a></p>


        </div>
        <div class="item">
          <h3>{{ $t('footer.section.information', 'INFORMATION') }}</h3>
          <ul>
            <li><router-link to="/about-us"><i class="fa-solid fa-greater-than"></i>{{ $t('footer.info.about', 'About Us') }}</router-link></li>
            <li><router-link to="/ourbranches"><i class="fa-solid fa-greater-than"></i>{{ $t('footer.info.branches', 'Our Branches') }}</router-link></li>
            <li><router-link to="/who-we-are"><i class="fa-solid fa-greater-than"></i>{{ $t('footer.info.company', 'About Company') }}</router-link></li>
            <li><router-link to="/social-media"><i class="fa-solid fa-greater-than"></i>{{ $t('footer.info.social', 'Social Media') }}</router-link></li>
            <li><router-link to="/contact-us"><i class="fa-solid fa-greater-than"></i>{{ $t('footer.info.contact', 'Contact Us') }}</router-link></li>

          </ul>
        </div>
        <div class="item">
          <h3>{{ $t('footer.section.menu', 'OUR MENU') }}</h3>
          <ul>
            <li><router-link to="/about-events"><i class="fa-solid fa-greater-than"></i>{{ $t('footer.menu.events', 'Our Events') }}</router-link></li>
            <li><router-link to="/tour-packages"><i class="fa-solid fa-greater-than"></i>{{ $t('footer.menu.tours', 'Tour Packages') }}</router-link></li>
            <li><router-link to="/social-media"><i class="fa-solid fa-greater-than"></i>{{ $t('footer.menu.services', 'Services') }}</router-link></li>
            <li><router-link to="/ourservices"><i class="fa-solid fa-greater-than"></i>{{ $t('footer.menu.brochures', 'Our Brochures') }}</router-link></li>
          </ul>
        </div>
        <div class="item">
          <h3>{{ $t('footer.section.social', 'SOCIAL MEDIA') }}</h3>
          <ul>
            <li><a href=""><i class="fa-solid fa-greater-than"></i><i class="fa-brands fa-linkedin" style="color: white;"></i>LinkedIn</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i><i class="fa-brands fa-facebook-f" style="color: white;"></i>Facebook</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i><i class="fa-brands fa-instagram" style="color: white;"></i>Instagram</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i><i class="fa-brands fa-snapchat" style="color: white;"></i>Snapchat</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i><i class="fa-brands fa-youtube" style="color: white;"></i>Youtube</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i><i class="fa-brands fa-tiktok" style="color: white;"></i>Tiktok</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i><i class="fa-brands fa-telegram" style="color: white;"></i>Telegram</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i><i class="fa-brands fa-wechat" style="color: white;"></i>WeChat</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i><i class="fa-brands fa-x-twitter" style="color: white;"></i>X</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i><i class="fa fa-tripadvisor" style="color: white;"></i>Tripadvisor</a></li>

          </ul>
        </div>

      </div>

    </div>

  </footer>

  
</template>

<script setup>

</script>

<style scoped>

footer{
  width: 100%;
  font-family: 'Roboto', sans-serif;

}
footer .footer-menu{
  width: 100%;
  padding: 30px 0px;
  background-color: rgb(65, 75, 79);
  font-weight: 100 !important;
}
footer .lists{
  width: 80%;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}
footer .lists .item{
  width: 20%;
}
footer .lists .item h3{
  font-size: 15px;
  color: #FFA500;
  font-weight: 100;
  margin: 20px 0px;
}

footer .lists .item h2{
  font-size: 15px;
  color: white;
  font-weight: 100;
  margin: 20px 0px;}

footer .lists .contact p{
  color: rgb(171, 167, 167);
  font-size: 14px;
  margin-top: 8px;
}

footer .lists .contact p a{
  color: rgb(171, 167, 167)!important;
  text-decoration: none!important;

}

footer .lists .contact p a:hover{
  color: #FFA500!important;
  cursor: pointer !important;
}

footer .lists .contact :nth-child(3){
  margin-top: 20px !important;
}
footer .lists .contact p i{
  margin-right: 4px;
}
footer .lists ul{
  list-style: none;
}
footer .lists ul li{
  margin-bottom: 5px;
  padding: 7px 0px;
  border-bottom: 1px solid rgb(94, 93, 93);

}
footer .lists ul li a{
  color: white;
  font-size: 14px;
  text-decoration: none;
}
footer .lists ul li a:hover{
  color: #FFA500;
  cursor: pointer !important;
}
footer .lists li a i{
  margin-right: 10px;
  font-size: 10px;
  color: #FFA500;
}
footer .lists .insta p{
  color: rgb(171, 167, 167);
  font-size: 14px;
  margin-top: 8px;
}
footer .foot{
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 30px 0px;

}
footer .foot p{
  color: rgb(152, 151, 151);
}
footer .foot ul{
  list-style: none;
  display: flex;
  color: white;
}
footer .foot ul li {
  margin: 0px 10px;
}
footer .foot ul li a{
  color: white;
}
footer .foot-login{
  width: 100%;
  padding: 30px 0px;
  text-align: center;
  color: white;
  background-image: url(/image/footer.jpg);
  background-position: center;
  
  mix-blend-mode: darken;
  background-size: cover;
}
footer .foot-login p{
  margin:30px 0px 20px 0px;
}
footer .foot-login h3{
  margin-bottom: 30px;
}
footer .foot-login hr{
  width: 4%;
  height: 4px;
  margin: auto;
  background-color: white;
  margin-bottom: 30px;
}
footer .foot-login .btn{
  width: 40%;
  margin: auto;
  display: flex;
  margin-bottom: 30px;
}
footer .foot-login .btn input{
  width: 70%;
  padding: 17px;
  border: none;
  outline: none;
}
footer .foot-login .btn button{
  width: 30%;
  background-color: #FFA500;
  color: rgb(35, 35, 35);
  padding: 15px;
  border: none;
}
@media (min-width: 768px) and (max-width: 1024px) {
  footer .foot-login .btn {
    width: 60%;
  }

  footer{
    margin-top: 20px;

  }

  footer p{
    margin-left: 40px;
  }

  footer .lists .item{
    width: 40%;
  }
  footer .foot{
    flex-wrap: wrap;
    padding: 10px 0px;
  }
  footer .foot-login .btn{
    width: 90%;
    display: flex;
    flex-wrap: wrap;
  }
  footer .btn input,footer.btn button{
    width: 100% !important;
    margin-bottom: 10px;
  }
  footer .foot-login .btn button{
    width: 100% !important;
  }
}
  @media (max-width:767px) {

    footer{
      margin-top: 20px;
    }

    footer p{
      margin-left: 40px;
    }

    footer .lists .item{
      width: 100%;
    }
    footer .foot{
      flex-wrap: wrap;
      padding: 10px 0px;
    }
    footer .foot-login .btn{
      width: 90%;
      display: flex;
      flex-wrap: wrap;
    }
    footer .btn input,footer.btn button{
      width: 100% !important;
      margin-bottom: 10px;
    }
    footer .foot-login .btn button{
      width: 100% !important;
    }
  }

</style>