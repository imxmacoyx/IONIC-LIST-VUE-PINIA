import { defineStore } from "pinia";
import axiosClient from "@/api/axiosClient";
import axios from 'axios';
import { Persona, PersonaPaginadaResponse } from "@/interfaces/personaInterface";

export const usePersonaStore = defineStore({
    id: 'persona',
    state: () => ({
      personas: [] as Persona[],
      isLoading: false,
      page: 1,
      hasMore: true,
    }),
    actions: {
      async fetchPersonas() {
        if (this.isLoading || !this.hasMore) return;
  
        this.isLoading = true;
        try {
          const response = await axiosClient.get<PersonaPaginadaResponse>(`/personasPaginadas?page=${this.page}`);
          this.personas = [...this.personas, ...response.data.data];
          
          if (response.data.page >= response.data.totalPages) {
            this.hasMore = false;
          } else {
            this.page++;
          }
        } catch (error) {
          console.error('Error al obtener personas:', error);
        } finally {
          this.isLoading = false;
        }
      },
    },
  });