import React, { Component } from "react";
import MatDB from "../db/materias.json";

const fechaHoy = new Date();

const ManejoFechas = {
  dia: fechaHoy.getDay(),
  hora: fechaHoy.getHours(),
  mins: fechaHoy.getMinutes(),
  horaminuto: fechaHoy.getHours() + fechaHoy.getMinutes() / 100,
};

class MateriasHoy extends Component {
  state = { Materias: MatDB, manejoDeFechas: ManejoFechas };

  componentDidMount() {
    //filtrar las materias por el dia de Hoy
   this.setState({materias: this.state.Materias.filter(materia => materia.dia.includes(this.state.manejoDeFechas.dia))});

  }

  render() {
    console.log(this.state.Materias);
    return (
      <>
        <h1>Materias de Hoy</h1>
        <div>
          <ul>
            {this.state.Materias.map((materia, index) => <li key={index}> </li>)}
          </ul>
        </div>
      </>
    );
  }
}

export default MateriasHoy;
