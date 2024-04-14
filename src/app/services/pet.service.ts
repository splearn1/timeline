import { Injectable } from '@angular/core';
import { Pet } from '../models/pets';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http:HttpClient, private router:Router) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${environment.apiUrl}/pets`);
  }

  addPet(pet:Pet) {
    return this.http.post<Pet>(`${environment.apiUrl}/pets`, pet);
  }

  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${environment.apiUrl}/pets/${id}`);
  }

  updatePet(pet:Pet): Observable<Pet> {
    return this.http.put<Pet>(`${environment.apiUrl}/pets/${pet.id}`, pet);
  }

  deletePet(id: number): Observable<Pet> {
    return this.http.delete<Pet>(`${environment.apiUrl}/pets/${id}`);
  }
}
