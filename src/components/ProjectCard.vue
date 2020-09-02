<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto my-2" color="grey lighten-4" width="95%" height="100%">
      <v-img :aspect-ratio="16 / 9" :src="require(`../assets/${image}.png`)">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black v-card--reveal white--text"
            style="height: 100%;"
          >
            <p class="text-center">{{ description }}</p>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative;">
        <h3 class="display-1 font-weight-light mb-2" style="color: #1BA0FF;">{{ name }}</h3>
        <div class="font-weight-light title mb-2">
          <v-chip class="white--text" color="#1BA0FF" small v-for="tag in tags" :key="tag.id">
            {{ tag }}
          </v-chip>
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    tags: Array,
    image: String
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
