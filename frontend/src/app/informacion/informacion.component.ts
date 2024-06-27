import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {

  deducibles = [
    { 
      nombre: 'Vivienda', 
      descripcion: 'Los gastos deducibles de vivienda incluyen:\n\n- Intereses hipotecarios: Puedes deducir los intereses pagados en tu hipoteca.\n- Impuestos sobre la propiedad: Los impuestos pagados sobre la propiedad de tu vivienda son deducibles.\n- Seguros de hipoteca: Las primas del seguro hipotecario también pueden ser deducibles.\n- Mantenimiento y reparaciones: Algunos costos de mantenimiento y reparaciones pueden ser deducibles.', 
      imagen: 'https://img.freepik.com/vector-gratis/plantilla-pegatina-sola-casa-aislada_1308-64529.jpg' 
    },
    { 
      nombre: 'Salud', 
      descripcion: 'Los gastos deducibles de salud incluyen:\n\n- Consultas médicas: Las visitas al médico son deducibles.\n- Hospitalizaciones: Los gastos de hospitalización pueden deducirse.\n- Medicamentos recetados: Los costos de medicamentos recetados son deducibles.\n- Seguros de salud: Las primas del seguro de salud pueden ser deducibles.\n- Tratamientos médicos: Los gastos en tratamientos médicos.', 
      imagen: 'https://img.freepik.com/vector-gratis/grupo-personal-medico-que-lleva-iconos-relacionados-salud_53876-43071.jpg' 
    },
    { 
      nombre: 'Alimentacion', 
      descripcion: 'En algunos casos, los gastos de alimentación pueden ser deducibles si están relacionados con el trabajo o viajes de negocios. Esto incluye comidas de negocios y viáticos.', 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGpncNDaWqG99RE4rZMsaCBvzoeJuUiDhkA&s' 
    },
    { 
      nombre: 'Vestimenta', 
      descripcion: 'Los gastos de vestimenta deducibles suelen ser aquellos necesarios para el trabajo, como uniformes o ropa de protección que no son adecuados para el uso diario.', 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9p488_ZUS7mrLcH1rqUXt4U6whY4xEcJppQ&s' 
    },
    { 
      nombre: 'Educacion', 
      descripcion: 'Los gastos deducibles de educación incluyen:\n\n- Matrículas: Los costos de matrículas escolares o universitarias.\n- Libros y suministros: Materiales necesarios para el estudio.\n- Cuotas: Cuotas relacionadas con la mejora de habilidades profesionales o la obtención de un título académico.', 
      imagen: 'https://profuturo.education/wp-content/uploads/2023/10/Portada-5.jpg' 
    }
  ];

  constructor() { }

  informaciongasto(deducible: { nombre: string, descripcion: string, imagen: string }) {
    alert(`Información sobre ${deducible.nombre}:\n\n${deducible.descripcion}`);
  }

  borrarDeducible(deducible: { nombre: string, descripcion: string, imagen: string }) {
    const index = this.deducibles.indexOf(deducible);
    if (index > -1) {
      this.deducibles.splice(index, 1);
    }
  }
}
