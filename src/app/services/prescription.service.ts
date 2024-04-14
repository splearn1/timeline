import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from '../models/prescriptions';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http:HttpClient) { }

  getPrescriptions(): Observable<Prescription[]> {
    return this.http.get<Prescription[]>('http://localhost:3000/prescriptions');
  }

  addPrescription(prescription:PrescriptionService) {
    return this.http.post<Prescription>('http://localhost:3000/prescriptions', prescription);
  }

  getPrescriptionById(id: number): Observable<Prescription> {
    return this.http.get<Prescription>(`http://localhost:3000/prescriptions/${id}`);
  }

  updatePrescriptionById(id: number): Observable<Prescription> {
    return this.http.put<Prescription>(`http://localhost:3000/prescriptions/${id}`, this.updatePrescriptionById);
  }

  deletePrescriptionById(id: number): Observable<Prescription> {
    return this.http.delete<Prescription>(`http://localhost:3000/prescriptions/${id}`);
  }
}
