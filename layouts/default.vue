<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#"><img src="~/static/logo.png" alt=""></b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto d-flex align-items-center">
          <b-nav-item data-scroll href="#trabajos">TRABAJOS</b-nav-item>
          <b-nav-item data-scroll href="#estudio">ESTUDIO</b-nav-item>
          <b-nav-item data-scroll href="#contacto">CONTACTO</b-nav-item>
          <b-nav-item href="https://www.facebook.com/KlouEstudioCreativo" target="_blank"><span class="img img-face"></span></b-nav-item>
          <b-nav-item href="https://twitter.com/infoKlou" target="_blank"><span class="img img-twitter"></span></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt/>
    <footer class="footer">
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center py-4">
            <p class="titulo mb-0">copyright 2014. todos los derechos reservados</p>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>
<script>
import SmoothScroll from 'smooth-scroll'
export default {
  data () {
    return {
      scroll: ''
    }
  },
  mounted () {
    this.scroll = new SmoothScroll('a[href*="#"]', {
      speed: 700
    })
  }
}
</script>

<style lang="scss">
.navbar {
  background: transparent !important;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  .navbar-toggler {
    border: 0;
  }
  .nav-link {
    color: #22BAB7 !important;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    transition: .3s;
    &:hover {
      color: white !important;
    }
  }
  .img {
    width: 25px;
    height: 24px;
    transition: .3s;
    display: inline-block;
  }
  .img-face {
    background-image: url('~/static/iconface-h.png');
    &:hover {
      background-image: url('~/static/iconface-hover.png');
    }
  }
  .img-twitter {
    background-image: url('~/static/icontweet-h.png');
    &:hover {
      background-image: url('~/static/icontweet-hover.png');
    }
  }
}

.footer {
  background-color: #131a1d;
  .titulo {
    color: #7D8C97;
    font-size: 0.68em;
  }
}
@media (max-width: 767px) {
  .navbar {
    .navbar-nav {
      background: #131a1d;
    }
  }
}
</style>
