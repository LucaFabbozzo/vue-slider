// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// - al click su una thumb, visualizzare in grande l’immagine corrispondente
// - aggiungere la classe active alla thumb attiva
// Bonus:
// 1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

const { createApp } = Vue;

createApp({
  data(){
    return {
      slider: [
        {
          title: "Obelisco",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt.",
          photo: "/img/01.jpg"
        },
        {
          title: "La pelota",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt.",
          photo: "/img/02.jpg"
        },
        {
          title: "Tango",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt.",
          photo: "/img/03.jpg"
        },
        {
          title: "La Murga",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt.",
          photo: "/img/04.jpg"
        },
        {
          title: "Boxeo",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt.",
          photo: "/img/05.jpg"
        }
      ],
      active: true,
      counterImages: 0,
      isNext: false
    }
  }, 
  methods: {
    nextSlide() {
      this.counterImages++
      if(conterImages = sliders.length) counterImages = 0;
    },
    prevSlide() {
      this.counterImages--
      if(counterImages < 0 ) counterImages = sliders.length - 1;
    }
  }
}).mount('#app')

