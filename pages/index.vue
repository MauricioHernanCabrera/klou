<template>
  <div>
    <a data-scroll href="#home" v-if="scrollY > 50" class="btn-fab"></a>
    <section class="home" id="home">
      <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                background="#000000"
                :interval="4000"
                v-model="slide"
                img-width="1024"
                img-height="480"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
        <b-carousel-slide v-for="diapositiva in diapositivas" :key="diapositiva.titulo" :img-src="diapositiva.src">
          <div class="contenedor">
            <h1 class="titulo">{{ diapositiva.titulo }}</h1>
            <p class="texto">{{ diapositiva.texto }}</p>
          </div>
        </b-carousel-slide>

        <div class="contenedor-trabajos-controles" id="trabajos">
          <ul class="trabajos-controles">
            <li 
              v-for="control in controlesDeTrabajo" 
              :key="control.titulo" 
              class="control-item">
              <a 
                @click="cambiarControlActivo(control.titulo)" 
                class="enlace" 
                :class="{ 'activo': controlActivo === control.titulo }" 
                data-scroll 
                href="#trabajos">{{ control.titulo }}
              </a>
            </li>
          </ul>
        </div>
      </b-carousel>
    </section>

    <section class="trabajos">
      <b-container fluid>
        <transition-group name="fade" tag="b-row" mode="out-in">
          <b-col 
            v-if="mostrarTrabajos" 
            class="contenedor-img px-0" 
            v-for="trabajo in trabajosActuales" 
            :key="trabajo.id"
            cols="12" md="6" lg="4">
            <img class="img-fluid" :src="trabajo.src" alt="trabajo.titulo">
            <div class="hover">
              <h3 class="titulo">{{ trabajo.titulo }}</h3>
              <p class="texto">{{ trabajo.texto }}</p>
            </div>
          </b-col>
        </transition-group>
      </b-container>
    </section>

    <section class="estudio py-5" id="estudio">
      <b-container>
        <b-row class="row-1">
          <b-col cols="12" class="py-0 pb-md-2">
            <h2 class="titulo text-center">Entrega y pasión para la excelencia de cada proyecto</h2>
            <p class="texto text-center"><span class="resaltado">Klou Estudio Creativo</span> surge en el año 2007, compuesto por Jorge Velázquez y Gabriel Jofré. En el transcurso de los años hemos formado un gran equipo de trabajo especializados en diseño, ilustración, dirección de arte, multimedia y comunicación; de esta manera, complementamos arte, creatividad y funcionalidad.</p>
          </b-col>
        </b-row>
        <b-row class="row-2">
          <b-col 
            v-for="estudio in estudios"
            :key="estudio.titulo"
            cols="12" md="6" lg="3"
            class="text-center py-3">
            <img class="img-fluid py-2" :src="estudio.src" alt="estudio.titulo">
            <h3 class="titulo">{{ estudio.titulo }}</h3>
            <ul class="lista-de-habilidades">
              <li 
                v-for="habilidad in estudio.habilidades"
                :key="habilidad"
                class="habilidad-item">{{ habilidad }}
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>


    <section class="contacto" id="contacto">
      <b-container class="py-5">
        <b-row class="py-5">
          <b-col cols="12" class="d-flex justify-content-center align-items-center flex-column">
            <img class="img mb-2" src="~/static/kloucontact.png" alt="kloucontact">
            <p class="texto text-center">
              <span class="direccion">güemes 3558 5e. caba. arg</span>
              <br>
              <span class="telefono">+54 11 5368 0128 </span>
              <a class="mail" href="mailto:info@klou.com.ar">info@klou.com.ar</a>
            </p>

            <b-btn v-b-modal.modalPrevent class="btn-contacto mb-3">Contactanos</b-btn>

            <b-modal id="modalPrevent"
                    ref="modal">
              <b-alert v-if="alertaMensajeEnviado" variant="success">Se envio el mensaje</b-alert>
              <b-form @submit="onSubmit">
                <b-form-group>
                  <b-form-input
                    type="text"
                    v-model="form.name"
                    required
                    placeholder="NOMBRE">
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-input
                    type="text"
                    v-model="form.phone"
                    required
                    placeholder="TELEFONO">
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-input
                    type="email"
                    v-model="form.email"
                    required
                    placeholder="EMAIL">
                  </b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-textarea id="textarea1"
                    v-model="form.message"
                    placeholder="MENSAJE"
                    required
                    :rows="3"
                    :max-rows="6">
                  </b-form-textarea>
                </b-form-group>
                
                <b-button class="btn-submit" type="submit" variant="primary">ENVIAR</b-button>
                <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
              </b-form>
            </b-modal>

            <div class="contenedor-enlaces">
              <a class="enlace px-1" href="https://www.facebook.com/KlouEstudioCreativo" target="_blank"><span class="img img-face"></span></a>
              <a class="enlace px-1" href="https://twitter.com/infoKlou" target="_blank"><span class="img img-twitter"></span></a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>

import SmoothScroll from 'smooth-scroll'
import trabajos from '~/mixins/trabajos'

export default {
  mixins: [trabajos],
  data () {
    return {
      scroll: '',
      scrollY: 0,
      alertaMensajeEnviado: false,
      form: {
        email: '',
        name: '',
        phone: '',
        message: ''
      },
      slide: 0,
      sliding: null,
      diapositivas: [
        {
          src: require('~/static/banner1.jpg'),
          titulo: 'la fiera',
          texto: 'flyer para obra de teatro'
        },
        {
          src: require('~/static/banner2.jpg'),
          titulo: 'coworking',
          texto: 'desarrollo de website'
        },
        {
          src: require('~/static/banner3.jpg'),
          titulo: 'amics',
          texto: 'desarrollo website'
        }
      ],
      estudios: [
        {
          titulo: 'identidad',
          habilidades: [
            'naming', 'diseño de logo', 'desarrollo de marca', 'papelería', 'señaletica'
          ],
          src: require('~/static/iconident.jpg')
        },
        {
          titulo: 'digital',
          habilidades: [
            'sitios web', 'responsive web design', 'eCommerce', 'fan pages', 'desarrollo CMS'
          ],
          src: require('~/static/icondigital.jpg')
        },
        {
          titulo: 'editorial',
          habilidades: [
            'catálogos, folletos',
            'diarios, revistas, libros',
            'publicidades',
            'afiches, flyers',
            'banners'
          ],
          src: require('~/static/iconedit.jpg')
        },
        {
          titulo: 'otros',
          habilidades: [
            'producción fotográfíca', 'packaging', 'google adwords', 'hosting web', 'producción gráfica'
          ],
          src: require('~/static/iconotros.jpg')
        },
      ],
    }
  },
  mounted () {
    this.scroll = new SmoothScroll('a[href*="#"]', {
      speed: 700
    })
    window.onscroll =  () => {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollY = scroll
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    onSubmit (evt) {
      this.alertaMensajeEnviado = true
      this.form.email = ''
      this.form.name = ''
      this.form.phone = ''
      this.form.message = ''
      setTimeout(() => {
        this.$refs.modal.hide()
        this.alertaMensajeEnviado = false
      }, 1000)
    },
    cambiarControlActivo (numeroDeControl) {
      if (this.controlActivo !== numeroDeControl) {
        this.controlActivo = numeroDeControl
        this.mostrarTrabajos = false
        setTimeout(() => {
          this.mostrarTrabajos = true
        }, 100)
      }
    },
  },
  computed: {
    trabajosActuales () {
      return this.trabajos.filter((trabajo) => {
        return trabajo.categorias.includes(this.controlActivo)
      })
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Raleway', Helvetica, sans-serif;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0,0);
}

.home {
  height: 100vh;
  .w-100 {
    object-fit: cover;
    height: 100vh;
  }
  .carousel-caption {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 0;
    padding-bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .contenedor {
      width: 100%;
    }
    .titulo {
      font-weight: 900;
      color: #22BAB7;
      font-size: 4.1em;
      line-height: 1.1em;
    }
    .texto {
      font-size: 1.325em;
      color: #22BAB7;
    }
  }
  .contenedor-trabajos-controles {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    .trabajos-controles {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .control-item {
        padding: 20px 10px;
        cursor: pointer;
        font-size: 1.1em;
        font-weight: 700;
        .enlace {
          color: #C1CBD2;
          text-decoration: none;
          transition: .3s;
          &:hover {
            color: #22BAB7;
          }
        }
        .activo {
          color: #22BAB7;
        }
      }
    }
  }
}
.trabajos {
  background-color: #131A1D;
  .row {
    min-height: 100vh;
  }
  .contenedor-img {
    position: relative;
    &:hover .hover {
      opacity: 1;
    }
    .hover {
      transition: .3s;
      background-color: rgba(41,168,166,0.9);
      opacity: 0;
      display: flex;
      cursor: pointer;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .titulo {
        font-size: 1.6875rem;
        font-weight: 900;
        color: #FFF;
      }
      .texto {
        color: #FFF;
      }
    }
  }
}
.estudio {
  background: #edf0f2;
  .row-1 {
    .titulo {
      color: #435561;
      font-weight: 900;
      font-size: 2.3125rem;
    }
    .texto {
      font-size: 1rem;
      .resaltado {
        color: #22BAB7;
      }
    }
  }
  .row-2 {
    .titulo {
      font-size: 1.4em;
      color: #22BAB7;
    }
    .lista-de-habilidades {

      .habilidad-item {

      }
    }
  }
}
.contacto {
  background-image: url('~/static/mapa-big.jpg');
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  background-size: cover;
  .btn-submit {
    background: #22BAB7;
    border: 0;
    border-radius: 1px;
    padding: 10px 16px;
  }
  .modal-footer {
    display: none;
  }
  .img {

  }
  .texto {
    font-size: 1.2125em;
    font-weight: 600;
    .direccion {
      color: #7D8C97;
    }
    .telefono {
      color: #22BAB7;
    }
    .mail {
      color: #DAE1E6;
    }
  }
  .btn-contacto {
    display: block;
    background: none;
    border: 2px solid #22BAB7;
    border-radius: 1px;
    padding: 6px 10px;
    color: #22BAB7;
    font-weight: 600;
    transition: .3s;
    cursor: pointer;
    &:hover {
      background: #22BAB7;
      color: #222222;
    }
  }
  .contenedor-enlaces {
    .enlace {
      .img {
        width: 41px;
        height: 41px;
        transition: .3s;
        display: inline-block;
      }
      .img-face {
        background-image: url('~/static/iconface.png');
        &:hover {
          background-image: url('~/static/iconface-over.png');
        }
      }
      .img-twitter {
        background-image: url('~/static/icontweet.png');
        &:hover {
          background-image: url('~/static/icontweet-over.png');
        }
      }
      // .img:nth-child(2):hover {
      //   background: url('~/static/icontweet-over.png');
      // }
    }
  }
}
.btn-fab {
  position: fixed;
  z-index: 1000;
  border: 0;
  bottom: 10px;
  right: 10px;
  width: 3.1875em;
  height: 3.1875em;
  cursor: pointer;
  background: url('~/static/ui.totop.png') no-repeat left -3.1875em;
  &:hover {
    background-image: url('~/static/ui.totop.png');
    background-repeat: no-repeat;
    background-position: left 0;
  }
}
</style>
