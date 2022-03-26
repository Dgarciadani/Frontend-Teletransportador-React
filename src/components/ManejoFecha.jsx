const fechaHoy = new Date();

export const ManejoFechas ={
        dia: fechaHoy.getDay(),
        hora: fechaHoy.getHours(),
        mins: fechaHoy.getMinutes(),
        horaminuto: fechaHoy.getHours() + fechaHoy.getMinutes() / 100, 
};

