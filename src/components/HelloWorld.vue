<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3" style="color: white;">
          Áreas de especilización
        </h2>

        <v-container>
          <v-row justify="center" style="margin: 0 auto; display:flex;">
            <v-col v-for="(item, i) in items" :key="i" cols="12" lg="6" class="d-flex">
              <!-- <v-card :color="item.color" dark> -->
                <v-row justify="center">
                  <v-col cols="12">
                    <h1 class="headline white--text" v-text="item.title"></h1>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-card-subtitle class="white--text" v-text="item.artist"></v-card-subtitle>
                  </v-col>

                  <v-avatar class="ma-3 align-self-center" min-width="200" width="200" height="140" tile>
                    <v-img :src="item.src"></v-img>
                  </v-avatar>
                </v-row>
              <!-- </v-card> -->
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
        {
          color: '#5738C5',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYalyjcn_F4ySNqZuYl_K-ntgGCgx8W7M_iQ&usqp=CAU',
          title: 'Diseño responsivo basado en Mobile First',
          artist: 'Cuando comienzo con el diseño de una nueva aplicación o página web, utilizo la metodología Mobile First, la cual lleva el diseño de lo más pequeño a lo más grande, garantizando un diseño responsivo.',
        },
        {
          color: '#FDB56E',
          src: 'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/7f/c6/2d/7fc62d38-0258-7334-5bad-b942833abd40/AppIcon-0-1x_U007emarketing-0-6-0-0-85-220.png/246x0w.png',
          title: 'Experiencias de realidad aumentada',
          artist: 'En el último año comencé mi especialización en realidad aumentada, desarrollando experiencias interactivas como juegos o manuales para luego dar el paso a publicidad en eventos utilizando herramientas como Vuforia con Unity, ARCore y AR.js para experiencias desde el navegador.',
        },
        {
          color: '#011F7C',
          src: 'https://blog.desafiolatam.com/wp-content/uploads/2018/07/ui_ux_cl.png',
          title: 'Diseño de UX/UI',
          artist: 'Como programador front-end una parte importante de mi trabajo es lograr diseñar y llevar a la realidad una interfaz amigable e intuitiva para le usuario, sin importar desde que dispositivo la utilice.',
        },
        {
          color: '#168EE8',
          src: 'https://miro.medium.com/max/2000/1*WRzDZndJCduHwqgOpWmbhQ.png',
          title: 'Frameworks de JavaScript (React, Vue)',
          artist: 'Es innegable el auge de las aplicaciones móviles, buscando ofrecer una mayor compatibilidad para cualquier dispositivo he desarrollado proyectos con frameworks dinámicos accesibles desde el navegador como React.js y Vue.js.',
        },
      ],
  })
};
</script>
