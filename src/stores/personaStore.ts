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
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchPersonas(initial = false) {
      if (this.isLoading) return; 
      this.isLoading = true;
      this.error = null;

      if (initial) {
        this.personas = [];
        this.page = 1;
      }

      try {
        const response = await axiosClient.get<PersonaPaginadaResponse>('/personasPaginadas', {
          params: { page: this.page, pageSize: this.pageSize },
        });
        if (Array.isArray(response.data.data)) {
          this.personas.push(...response.data.data);
          this.totalRecords = response.data.totalRecords;
          this.totalPages = response.data.totalPages;
        } else {
          this.error = 'La respuesta no contiene un array válido.';
        }
      } catch (error) {
        this.error = 'Error al obtener personas: ' + error;
      } finally {
        this.isLoading = false;
      }
    },
    async getPersonas() {
      await this.fetchPersonas(true);
    },
    async getMasPersonas() {
      if (this.page < this.totalPages) {
        this.page++;
        await this.fetchPersonas();
      }
    },
  },
});
