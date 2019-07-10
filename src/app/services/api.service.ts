import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { RespuestaUsuarios, Usuario } from '../interfaces/interface';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  llamarAPI(query: string) {
    query = apiUrl + query;
    return this.http.get<RespuestaUsuarios>(query);
  }

  getUsuarios() {
    return this.llamarAPI(``);
  }
  ////
  agregarAPI(query: string) {
    query = apiUrl + query;
    return this.http.post<RespuestaUsuarios>(query, { });
  }

  aUsuario(query: string) {
    return this.agregarAPI(`?name=` + query);
  }

  eliminarAPI(query: string) {
    query = apiUrl + query;
    return this.http.delete<RespuestaUsuarios>(query, { });
  }

  aEliminar(query: number) {
    return this.eliminarAPI(`/` + query);
  }

  editarAPI(query: string) {
    query = apiUrl + query;

    return this.http.put<RespuestaUsuarios>(query, {});
  }

  editUsuario(query: number, dato: string) {
    return this.editarAPI(`/` + query + `?name=` + dato);
  }
}
