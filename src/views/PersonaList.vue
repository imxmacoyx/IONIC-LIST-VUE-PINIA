<template>
  <ion-content>
    <ion-list>
      <ion-item v-for="persona in personas" :key="persona.id">
        <ion-label>
          <h2>{{ persona.nombre }}</h2>
          <p>{{ persona.email }}</p>
        </ion-label>
      </ion-item>
    </ion-list>
    <ion-infinite-scroll
      @ionInfinite="masInformacion"
      :threshold="'100px'"
      :disabled="!infiniteScrollEnabled"
    >
      <ion-infinite-scroll-content
        loading-spinner="bubbles"
        loading-text="Cargando más personas..."
      ></ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import { usePersonaStore } from '@/stores/personaStore';
import { IonContent, IonList, IonItem, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';

const personaStore = usePersonaStore();
const infiniteScrollEnabled = computed(() => personaStore.page < personaStore.totalPages && !personaStore.isLoading);

onMounted(() => {
  personaStore.getPersonas();
});

const masInformacion = async (event: CustomEvent<void>) => {
  await personaStore.getMasPersonas();
  (event.target as HTMLIonInfiniteScrollElement).complete(); 
};

const personas = computed(() => personaStore.personas);
</script>

<style scoped>
</style>
