export interface Persona {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  eliminado: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PersonaPaginadaResponse {
  totalRecords: number;
  page: number;
  pageSize: number;
  totalPages: number;
  data: Persona[];
}
