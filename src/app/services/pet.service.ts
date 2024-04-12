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

  constructor(private http:HttpClient, private router:Router) {

  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${environment.apiUrl}/pets`);
  }
}
