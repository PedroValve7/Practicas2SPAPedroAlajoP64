import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  deducibles = [
    {
      nombre: 'Vivienda',
      descripcion: 'Esta es una descripción de Vivienda.',
      imagen: 'https://via.placeholder.com/300x200.png?text=Vivienda'
    },
    {
      nombre: 'Salud',
      descripcion: 'Esta es una descripción de Salud.',
      imagen: 'https://via.placeholder.com/300x200.png?text=Salud'
    },
    {
      nombre: 'Educacion',
      descripcion: 'Esta es una descripción de Educación.',
      imagen: 'https://via.placeholder.com/300x200.png?text=Educacion'
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  informacion() {
    alert('Esta es información adicional');
  }

  borrarDeducible(deducible: { nombre: string, descripcion: string, imagen: string }) {
    const index = this.deducibles.indexOf(deducible);
    if (index > -1) {
      this.deducibles.splice(index, 1);
    }
  }
}
