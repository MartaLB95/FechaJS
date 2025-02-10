

const fecha= new Date();

const diasSemana=["domingo", "lunes", "martes", "miercoles","jueves", "viernes", "sabado"] ;
const meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const diaSemana=diasSemana[fecha.getDay()];
const dia=fecha.getDate();
const mes= meses[fecha.getMonth()];
const year=fecha.getFullYear();
const hora=fecha.getHours();
const minutos=fecha.getMinutes().toString().padStart(2, "0");

const fechaActual=`Hoy es ${diaSemana}, ${dia} de ${mes} de ${year}, y son las ${hora}:${minutos}.`;


const zonaFecha=document.getElementById("zona-fecha");
zonaFecha.innerHTML=fechaActual;