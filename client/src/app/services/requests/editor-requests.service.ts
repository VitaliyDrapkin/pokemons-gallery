import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../../models/Pokemon.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EditorRequestsService {

  constructor(private http: HttpClient) {
  }

  getPokemonsCollection(value: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environment.serverUrl}/pokemons?search=${value}`)
  }

}
