import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecin } from '../models/medecin';

@Injectable({
  providedIn: 'root',
})
export class MedecinService {
  constructor(private http: HttpClient) {}

  getAllMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>('http://localhost:8082/medecin');
  }

  getMedecinByID(medecinId: number): Observable<Medecin> {
    return this.http.get<Medecin>(`http://localhost:8082/medecin${medecinId}`);
  }
  deleteMedecinByID(medecinId: number): any {
    return this.http.delete<any>(`http://localhost:8082/medecin${medecinId}`);
  }

  createMedecin(newMedecin: Medecin): Observable<Medecin[]> {
    return this.http.post<Medecin[]>(
      'http://localhost:8082/medecin',
      newMedecin
    );
  }

  updateMedecin(updatedMedecin: Medecin): Observable<Medecin[]> {
    return this.http.put<Medecin[]>(
      'http://localhost:8082/medecin',
      updatedMedecin
    );
  }
}
