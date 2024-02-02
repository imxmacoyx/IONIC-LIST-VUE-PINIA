// src/store/personaStore.ts
import { defineStore } from 'pinia';
import axiosClient from '@/api/axiosClient';
import { Persona, PersonaPaginadaResponse } from '@/interfaces/personaInterface';

export const usePersonaStore = defineStore({
  id: 'persona',
  state: () => ({
    personas: [] as Persona[],
    totalRecords: 0,
    page: 1,
    pageSize: 10,
    totalPages: 1,
  }),
  actions: {
    async getPersonas() {
      this.personas = [];
      this.page = 1;
      await this.fetchPersonas();
    },
    async getMasPersonas() {
      if (this.page < this.totalPages) {
        this.page++;
        await this.fetchPersonas();
      }
    },
    async fetchPersonas() {
      try {
        const response = await axiosClient.get<PersonaPaginadaResponse>('/personasPaginadas', {
          params: { page: this.page, pageSize: this.pageSize },
        });
        if (Array.isArray(response.data.data)) {
          this.personas.push(...response.data.data);
          this.totalRecords = response.data.totalRecords;
          this.totalPages = response.data.totalPages;
        } else {
          console.error('La respuesta no contiene un array:', response.data);
        }
      } catch (error) {
        console.error('Error al obtener personas:', error);
      }
    },
  },
});
