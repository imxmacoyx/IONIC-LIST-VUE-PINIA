<template>
  <ion-app>
    <ion-content :style="{ 'padding-top': 'env(safe-area-inset-top)', 'padding-bottom': 'env(safe-area-inset-bottom)' }">
    <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
  ion-content {
    --padding-top: var(--ion-safe-area-top);
    --padding-bottom: var(--ion-safe-area-bottom);
  }
</style>