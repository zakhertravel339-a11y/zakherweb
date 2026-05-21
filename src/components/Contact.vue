<script setup>

</script>

<template>
  <div class="container-xxl py-5 contact-content">

    <div class="container">

      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">

        <h6 class="section-title bg-white text-center text-primary px-3" style="color: #FFA500!important; font-weight: 600; font-size: 25px; ">Contact Us</h6>

        <hr>

      </div>

      <div class="row g-4">

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">

          <div class="d-flex align-items-center mb-4">

            <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px; background-color:#FFA500!important;margin-bottom: 140px;">

              <i class="fa fa-map-marker-alt text-white" ></i>

            </div>

            <div class="ms-3">

              <h5 class="text-primary" style="color: #FFA500!important;">Office</h5>

              <h2 style="font-weight: 600;">Head Office</h2>

              <p class="mb-0">73 Huseyn Javid Ave, 16 floor, Baku 1073</p>

              <h2 style="font-weight: 600; margin-top: 10px;">Dubai Office</h2>

              <p class="mb-0">SAIF Zone, Gate 3 building Q1-09. Office 103\A, Sharjah</p>

            </div>

          </div>

          <div class="d-flex align-items-center mb-4">

            <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;background-color: #FFA500!important;">

              <i class="fa fa-phone-alt text-white" ></i>

            </div>

            <div class="ms-3">

              <h5 class="text-primary" style="color: #FFA500!important;">Office Phone</h5>

              <p class="mb-1"><i class="fa-solid fa-phone"></i> <a href="tel:+994 12 310 09 32">+994 12 310 09 32</a></p>

            </div>



          </div>

          <div class="d-flex align-items-center mb-4">

            <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;background-color: #FFA500!important;">

              <i class="fa fa-phone-alt text-white"></i>

            </div>

            <div class="ms-3">

              <h5 class="text-primary" style="color: #FFA500!important;">Mobile</h5>

              <p class="mb-0"><a  href="tel:+994 50 253 22 00">+994 50 253 22 00</a>
                <br>
                <a href="tel:+994 50 253 22 09">+994 50 253 22 09</a>
                <br>
                <a href="tel:+994 50 253 22 08 ">+994 50 253 22 08 </a></p>

            </div>



          </div>

          <div class="d-flex align-items-center mb-4">

            <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;background-color: #FFA500!important;">

              <i class="fa fa-phone-alt text-white"></i>

            </div>

            <div class="ms-3">

              <h5 class="text-primary"style="color: #FFA500!important;">Whatsapp</h5>

              <a href="https://wa.me/994502532200" target="_blank">+994 50 253 22 00</a>



            </div>



          </div>



          <div class="d-flex align-items-center">

            <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;background-color: #FFA500!important;">

              <i class="fa fa-envelope-open text-white"></i>

            </div>

            <div class="ms-3">

              <h5 class="text-primary" style="color: #FFA500!important;">Email</h5>

              <p class="mb-0"><a href="mailto:info@zakher.travel">info@zakher.travel</a></p>

            </div>

          </div>

        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">

          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Zakher Trabel&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

              </iframe>
              <a href="https://gachanymph.com/">
                Gacha Nymph APK
              </a>
            </div>
          </div>

        </div>

        <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

          <form>

            <div class="row g-3">

              <div class="col-md-6">

                <div class="form-floating">

                  <input type="text" class="form-control" id="name" placeholder="Your Name">

                  <label for="name">Your Name</label>

                </div>

              </div>



              <div class="col-md-6">

                <div class="form-floating">

                  <input type="phone" class="form-control" id="phone" placeholder="Your Phone">

                  <label for="phone">Your Phone</label>

                </div>

              </div>

              <div class="col-12">

                <div class="form-floating">

                  <input type="email" class="form-control" id="email" placeholder="Your Email">

                  <label for="email">Your Email</label>

                </div>

              </div>

              <div class="col-12">

                <div class="form-floating">

                  <input type="text" class="form-control" id="subject" placeholder="Subject">

                  <label for="subject">Subject</label>

                </div>

              </div>

              <div class="col-12">

                <div class="form-floating">

                  <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 100px"></textarea>

                  <label for="message">Message</label>

                </div>

              </div>

              <div class="col-12">

                <button class="btn btn-primary w-100 py-3"style="background-color: #FFA500!important;" type="submit">Send Message</button>

              </div>

            </div>

          </form>

        </div>

      </div>

    </div>

  </div>

</template>

<style scoped>

.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}

a{
  text-decoration: none;
  color: black;
}

a:hover
{
  color: #ffa500;
}
hr{
  width: 15%;
  height: 4px;
  background-color: #FFA500;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}
</style>