import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../../models/Pokemon.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GalleryRequestsService {


  constructor(private http: HttpClient) {
  }

  getGallery(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environment.serverUrl}/gallery`)
  }

  addPokemonToGallery(name: string): Observable<{ status: number }> {
    const data = {
      pokemonName: name
    }
    return this.http.post<{ status: number }>(`${environment.serverUrl}/gallery`, data)
  }

  removePokemonFromGallery(name: string): Observable<{ status: number }> {
    return this.http.delete<{ status: number }>(`${environment.serverUrl}/gallery/${name}`)
  }
}
