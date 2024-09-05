import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecin } from 'src/app/models/medecin';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-medecin-list',
  templateUrl: './medecin-list.component.html',
  styleUrls: ['./medecin-list.component.scss'],
})
export class MedecinListComponent {
  medecins$!: Observable<Medecin[]>;

  constructor(private medecinService: MedecinService){}
  ngOnInit(): void {
    this.medecins$ = this.medecinService.getAllMedecins();}





}
