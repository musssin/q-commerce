<script setup lang="ts">
import Banner from '@/components/Banner.vue';
</script>

<template>
  <v-col cols="12">
    <Banner />
    <v-col
      cols="12"
      class="block-top"
    >
      <div
        class="text-light-blue-lighten-5 pt-16 pa-2"
        color=""
      >
        <v-col
          sm="12"
          md="6"
          class=""
        >
          <span
            class="text-h3 text-white"
            style="z-index: 99"
            >Онлайн - магазин<br />
            Электро - бытовой техники</span
          >
          <br />
          <span class="text-h6"
            >Лучшие цены на электронику в нашем интернет-магазине! Мы предлагаем
            широкий выбор современных гаджетов, компьютеров, ноутбуков,
            телевизоров и многое другое.</span
          >
        </v-col>
      </div>
    </v-col>
    <!-- <v-col cols="6" style="background-color: yellow;"></v-col>
    <v-col cols="6"></v-col> -->
    <!-- <div class="avds pa-3"> -->
    <v-row
      justify="space-between"
      class="pl-4 pr-0 mt-3 avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between"
    >
      <div class="avds_small">
        <div
          class="avds_background"
          style="
            background-image: url('https://preview.colorlib.com/theme/sublime/images/avds_small.jpg');
          "
        ></div>
        <div class="avds_small_inner">
          <div class="avds_discount_container">
            <img
              src="images/discount.png"
              alt=""
            />
            <div>
              <div class="avds_discount">
                <div>20<span>%</span></div>
                <div>Скидка</div>
              </div>
            </div>
          </div>
          <div class="avds_small_content">
            <div class="avds_title">Смартфоны</div>
            <div class="avds_link"><a href="/products">Посмотреть</a></div>
          </div>
        </div>
      </div>
      <div class="avds_large">
        <div
          class="avds_background"
          style="
            background-image: url('https://cdn.create.vista.com/api/media/medium/208061162/stock-photo-smartphone-laptop-black-background-wooden');
          "
        ></div>
        <div class="avds_large_container">
          <div class="avds_large_content">
            <div class="avds_title">Профессиональные ноутбуки</div>
            <div class="avds_text">
              Ноутбуки высочайшего качества, которые имеют на борту новейшие
              процессоры и видеокарты
            </div>
            <div class="avds_link avds_link_large">
              <a href="/products">Посмотреть</a>
            </div>
          </div>
        </div>
      </div>
    </v-row>
    <!-- </div> -->
    <div class="avds_xl pa-3">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="avds_xl_container clearfix">
              <div
                class="avds_xl_background"
                style="
                  background-image: url('https://preview.colorlib.com/theme/sublime/images/avds_xl.jpg');
                "
              ></div>
              <div class="avds_xl_content">
                <div class="avds_title">Удивительные деваисы</div>
                <div class="avds_text">
                  Деваисы на все случаи жизни, призванные облегчить вам жизнь!
                </div>
                <div class="avds_link avds_xl_link">
                  <a href="/products">Посмотреть</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="icon_boxes">
      <div class="container">
        <v-row class="row icon_box_row">
          <v-col
            cols="4"
            class="icon_box_col"
          >
            <div class="icon_box">
              <div class="icon_box_image">
                <img
                  src="https://preview.colorlib.com/theme/sublime/images/icon_1.svg"
                  alt=""
                />
              </div>
              <div class="icon_box_title">Бесплатная доставка</div>
              <div class="icon_box_text">
                <p>Бесплатная доставка по всему Казахстану!</p>
              </div>
            </div>
          </v-col>

          <v-col
            cols="4"
            class="col-lg-4 icon_box_col"
          >
            <div class="icon_box">
              <div class="icon_box_image">
                <img
                  src="https://preview.colorlib.com/theme/sublime/images/icon_2.svg"
                  alt=""
                />
              </div>
              <div class="icon_box_title">Возврат товара</div>
              <div class="icon_box_text">
                <p>
                  Вы можете вернуть товар в течение 14 дней после получения,
                  если он вас чем то не устроил!
                </p>
              </div>
            </div>
          </v-col>

          <v-col
            cols="4"
            class="col-lg-4 icon_box_col"
          >
            <div class="icon_box">
              <div class="icon_box_image">
                <img
                  src="https://preview.colorlib.com/theme/sublime/images/icon_3.svg"
                  alt=""
                />
              </div>
              <div class="icon_box_title">Круглосуточная поддержка</div>
              <div class="icon_box_text">
                <p>
                  Наша техническая поддержка готова оказать вам помощь в любое
                  время!
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="footer_overlay"></div>
    <footer class="footer">
      <div
        class="footer_background"
        style="background-image: url(images/footer.jpg)"
      ></div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center"
            >
              <div class="footer_logo"><a href="#">Q - commerce</a></div>
              <div class="copyright ml-auto mr-auto">
                Copyright ©2023 Все права защищены<i
                  class="fa fa-heart-o"
                  aria-hidden="true"
                ></i>
                by <br />
                <a
                  href="tel:77076065918"
                  target="_blank"
                  >Aizada Amanova</a
                ><br /><a href="tel:77076065918">+7 (707) 606 5918</a>
              </div>
              <div class="footer_social ml-lg-auto mb-2">
                Контакты:
                <ul>
                  <li></li>
                  <li><a href=""></a></li>
                  <li>
                    <a href="https://wa.me/77076065918"
                      ><img
                        src="https://www.svgrepo.com/show/110197/whatsapp.svg"
                        width="30"
                        height="30"
                    /></a>
                  </li>
                  <li>
                    <a href="mailto:011119650651@stud.satbayev.university"
                      ><img
                        src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-file-gmail-icon-svg-wikimedia-commons-0.png"
                        width="35"
                        height="35"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </v-col>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900');

.block-top {
  background-image: url('../src/assets/blue_blur.jpg');
  background-size: cover;
  height: 600px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-style: normal;
  font-weight: bolder;
  font-size: xx-large;
}

.avds {
  width: 100%;
  background: #ffffff;
  z-index: 2;
}

.avds_container {
  width: 100%;
  height: 490px;
  padding-left: 60px;
  padding-right: 60px;
}

/* Ad Small*/

.avds_small {
  width: calc((100% * 0.391) - 15px);
  height: 100%;
  padding: 30px;
}

.avds_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.avds_small_inner {
  width: 100%;
  height: 100%;
  border: solid 2px #ffffff;
}

.avds_discount_container {
  position: absolute;
  right: 36px;
  bottom: 0;
}

.avds_discount_container > div {
  position: relative;
  width: 100%;
  height: 100%;
}

.avds_discount {
  position: absolute;
  bottom: 71px;
  right: 0;
  width: 152px;
  text-align: center;
}

.avds_discount div:first-child {
  font-size: 60px;
  font-weight: 700;
  color: #1b1b1b;
  line-height: 0.75;
}

.avds_discount div:first-child span {
  font-size: 36px;
  font-weight: 700;
  vertical-align: super;
}

.avds_discount div:last-child {
  font-size: 14px;
  font-weight: 400;
  color: #1b1b1b;
  margin-top: 1px;
}

.avds_small_content {
  max-width: 250px;
  padding-top: 57px;
  padding-left: 31px;
  padding-right: 30px;
}

.avds_title {
  font-size: 48px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.16;
}

.avds_link {
  margin-top: 18px;
  padding-left: 4px;
}

.avds_link a {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
}

.avds_link a::after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #ffffff;
  content: '';
}

/* Ad Large */

.avds_large {
  width: calc((100% * 0.608) - 15px);
  height: 100%;
}

.avds_large_container {
  width: 100%;
  height: 100%;
  padding-top: 39px;
  padding-left: 32px;
  padding-bottom: 44px;
}

.avds_large_content {
  max-width: 567px;
  height: 100%;
  background: rgba(0, 0, 0, 0.63);
  padding-right: 130px;
  padding-left: 30px;
  padding-top: 51px;
  padding-bottom: 30px;
}

.avds_text {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  line-height: 2.14;
  margin-top: 11px;
  padding-left: 2px;
}

.avds_link_large {
  margin-top: 40px;
}

/*********************************
7. Products
*********************************/

.products {
  width: 100%;
  background: #ffffff;
  padding-top: 99px;
  z-index: 2;
}

.product {
  width: calc((100% - 90px) / 4);
  margin-bottom: 59px;
}

.product_image {
  width: 100%;
}

.product_image img {
  max-width: 100%;
}

.product_content {
  width: 100%;
  padding-top: 36px;
  padding-bottom: 38px;
}

.product_title a {
  font-size: 18px;
  font-weight: 500;
  color: #1b1b1b;
  line-height: 1.1;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}

.product_title a:hover {
  color: #e95a5a;
}

.product_price {
  font-size: 16px;
  font-weight: 500;
  color: #6c6a74;
  line-height: 0.75;
  margin-top: 13px;
}

.product_extra {
  position: absolute;
  top: 0;
  left: 54px;
  width: 66px;
  height: 36px;
  text-align: center;
  -webkit-transform-origin: top left;
  -moz-transform-origin: top left;
  -ms-transform-origin: top left;
  -o-transform-origin: top left;
  transform-origin: top left;
  transform: rotate(90deg);
}

.product_extra a {
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  line-height: 36px;
}

.product_new {
  background: #6c6a74;
}

.product_sale {
  background: #e95a5a;
}

.product_hot {
  background: #1b1b1b;
}

/*********************************
8. Ad Extra Large
*********************************/

.avds_xl {
  width: 100%;
  background: #ffffff;
  z-index: 2;
}

.avds_xl_container {
  width: 100%;
  height: 345px;
  padding-top: 34px;
  padding-right: 35px;
  padding-bottom: 30px;
  padding-left: 30px;
}

.avds_xl_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.avds_xl_content {
  width: 391px;
  height: 100%;
  background: #e95a5a;
  float: right;
  padding-top: 28px;
  padding-left: 42px;
  padding-right: 30px;
}

.avds_xl_link {
  margin-top: 18px;
}

.icon_boxes {
  width: 100%;
  padding-top: 99px;
  padding-bottom: 99px;
  background: #ffffff;
  z-index: 2;
}
.icon_box_row {
}
.icon_box {
  width: 100%;
  text-align: center;
}
.icon_box_image {
  width: 75px;
  height: 75px;
  margin-left: auto;
  margin-right: auto;
}
.icon_box_image img {
  max-width: 100%;
}
.icon_box_title {
  font-size: 18px;
  font-weight: 500;
  color: #1b1b1b;
  margin-top: 33px;
}
.icon_box_text {
  margin-top: 20px;
}

.footer_overlay {
  width: 100%;
  height: 129px;
  background: transparent;
  z-index: 1;
}
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
.footer_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.footer_content {
  width: 100%;
  height: 129px;
}
.footer_logo {
  width: 30%;
}
.footer_logo a {
  font-size: 30px;
  line-height: 0.75;
  color: #1b1b1b;
  font-weight: 700;
}
.copyright {
  width: 40%;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #1b1b1b;
}
.footer_social {
  width: 30%;
  text-align: right;
}
.footer_social ul li {
  display: inline-block;
}
.footer_social ul li:not(:last-child) {
  margin-right: 26px;
}
.footer_social ul li a i {
  font-size: 17px;
  color: #1b1b1b;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.footer_social ul li a i:hover {
  color: #ffffff;
}
</style>
