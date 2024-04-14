import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Med } from '../models/meds';

@Injectable({
  providedIn: 'root'
})
export class MedService {

  constructor(private http:HttpClient) { }

  getMeds(): Observable<Med[]> {
    return this.http.get<Med[]>('http://localhost:3000/meds');
  }

  addMed(med:Med) {
    return this.http.post<Med>('http://localhost:3000/meds', med);
  }

  getMedById(id: number): Observable<Med> {
    return this.http.get<Med>(`http://localhost:3000/meds/${id}`);
  }

  updateMedById(id: number): Observable<Med> {
    return this.http.put<Med>(`http://localhost:3000/meds/${id}`, this.updateMedById);
  }

  deleteMedById(id: number): Observable<Med> {
    return this.http.delete<Med>(`http://localhost:3000/meds/${id}`);
  }
}
