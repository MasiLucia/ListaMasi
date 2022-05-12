import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {
  img= 'assets/user-profile-icon-free-vector.jpg';
  estudiantes= [
    {
      id: 1,
      nombre: 'Romina',
      nota: 10,
      curso: 'React'
    },
    {
      id: 2,
      nombre: 'Carlos',
      nota: 4,
      curso: 'Vue'
    },
    {
      id: 3,
      nombre: 'Maria',
      nota: 7,
      curso: 'Ciberseguridad'
    },
    {
      id: 4,
      nombre: 'Manuel',
      nota: 9,
      curso: 'React'
    }
  ]

  Estudiante:string[] =[]
  newEstudiante = '';


  constructor() { }

  ngOnInit(): void {
  }

  agregarEst() {
    this.Estudiante.push(this.newEstudiante);
    this.newEstudiante = '';
  }

}
