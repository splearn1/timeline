import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vet } from '../models/vets';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private http:HttpClient) { }
  getVets(): Observable<Vet[]> {
    return this.http.get<Vet[]>('http://localhost:3000/vets');
  }
  updateVetById(id: number): Observable<Vet> {
    return this.http.put<Vet>(`http://localhost:3000/vets/${id}`, this.updateVetById);
  }
}
