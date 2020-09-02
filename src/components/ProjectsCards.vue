<template>
  <v-container grid-list-xl>
    <v-row no-gutters>
      <v-col>
        <h1 class="text-center" style="color: white;">Proyectos</h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        class="d-flex flex-column pa-0"
        cols="12"
        lg="4"
        md="3"
        v-for="(project, index) in projects"
        :key="index"
      >
        <project-card
          :name="project.name"
          :tags="project.tags"
          :image="project.imagen"
          :description="project.description"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ProjectsCards",

  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          name: "IJX UX",
          imagen: "ijx-ux",
          url: "",
          description: "Interfaz del primer robot de inspección de tuberias mexicano",
          tags: ["JavaFX", "React.js", "Node.js"]
        },
        {
          name: "Billete con realidad aumentada",
          imagen: "billete-ra",
          url: "",
          description: "Billete de $50 que permite controlar un modelo 3D del robot IJX mediante la realidad aumentada",
          tags: ["Vuforia", "Unity"]
        },
        {
          name: "Logotipo RA",
          imagen: "arjs",
          url: "",
          description: "Aplicación web que muestra un modelo dinámico del robot IJX al acceder a la url desde el navegador y apuntar al marcador del logotipo del robot",
          tags: ["AR.js"]
        },
        {
          name: "IJ Ranch",
          imagen: "ij-ranch",
          url: "",
          description: "Aplicación para control y monitoreo de ganado",
          tags: ["Vue.js", "Vuetify", "Vuex"]
        },
        {
          name: "IJ School App",
          imagen: "ij-school",
          url: "",
          description:
            "Aplicación para seguimiento escolar de estudiantes y administración escolar",
          tags: ["BootstrapVue", "Vue.js", "Jenkins", "TypeScript"]
        },
        {
          name: "SM2F4.0",
          imagen: "sm2f4",
          url: "",
          description: "Aplicación para monitoreo de dispositivos industriales",
          tags: ["Vue.js", "Vuetify", "Vuex"]
        },
        {
          name: "Alineación",
          imagen: "anclas",
          url: "",
          description: "Aplicación que permite crear un ancla en la nube de una pieza para guardar su posición y poder reubicarla de manera precisa mediante la realidad aumentada",
          tags: ["Unity", "ARCore", "Cloud Anchors", "Firebase"]
        },
        {
          name: "Portal a otro mundo",
          imagen: "portal",
          url: "",
          description: "Aplicación que permite crear una puerta que se convierte en un portal que brinda la sensación de inmersión mediante la realidad aumentada",
          tags: ["Unity", "ARCore"]
        },
        {
          name: "Triptico Aumentado",
          imagen: "triptico",
          url: "",
          description: "Aplicación que permite reproducir videos publicitarios en las imagenes de un tríptico",
          tags: ["Unity", "ARCore"]
        },
      ]
    };
  }
};
</script>
