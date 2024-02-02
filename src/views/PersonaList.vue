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
    <ion-infinite-scroll @ionInfinite="cargarMasPersonas" :disabled="!hasMore" threshold="100px">
      <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Cargando más personas...">
      </ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { usePersonaStore } from '@/stores/personaStore';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent
} from '@ionic/vue';

const personaStore = usePersonaStore();
const hasMore = computed(() => personaStore.hasMore);
const personas = computed(() => personaStore.personas);

onMounted(() => {
  if (personas.value.length === 0) {
    personaStore.fetchPersonas();
  }
});

const cargarMasPersonas = async (event: Event) => {
  if (hasMore.value) {
    await personaStore.fetchPersonas();
  }
  (event.target as HTMLIonInfiniteScrollElement).complete();
};
</script>
