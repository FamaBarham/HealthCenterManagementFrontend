import { Component, Input } from '@angular/core';
import { Medecin } from 'src/app/models/medecin';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss'],
})
export class MedecinComponent {
  @Input() medecin!: Medecin;

  ngOnInit(): void {}
}
