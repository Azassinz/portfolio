<template>
  <v-app>
    <v-main>
      <v-container fluid style="min-height: 100%; background-color: #1BA0FF;" class="pa-0">
        <v-row no-gutters>
          <v-col cols="12" sm="4" xl="3" class="d-flex flex-column pa-0">
            <v-container class="pa-0">
              <v-row no-gutters justify="center">
                <v-col class="pa-0" cols="11">
                  <profile-card />
                </v-col>
                <v-col class="pa-0" cols="11">
                  <about-me />
                </v-col>
                <jobs-timeline />
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" sm="8" xl="9" class="d-flex flex-column pa-0">
            <expertise-areas />
            <projects-cards />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ExpertiseAreas from "./components/ExpertiseAreas.vue";
import ProfileCard from "./components/ProfileCard.vue";
import AboutMe from "./components/AboutMe.vue";
import ProjectsCards from "./components/ProjectsCards.vue";
import JobsTimeline from "./components/JobsTimeline.vue";

export default {
  name: "App",

  components: {
    ExpertiseAreas,
    ProfileCard,
    AboutMe,
    ProjectsCards,
    JobsTimeline,
  },

  data: () => ({
    //
  })
};
</script>
