import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styles: []
})
export class PreguntasComponent implements OnInit {
  title: string = "Preguntas Frecuentes"; 
  preguntas: preguntaRespuesta[] = [   
    {"pregunta":"¿Qué hago si no tengo número de seguro social?",
    "respuesta":" No te preocupes, lo puedes realizar a través de internet en la página del IMSS o en Graja te ayudamos a tramitarlo"}, 
    {"pregunta":"¿Puedo darme de alta con ustedes si ya estuve dado(a) de alta en el IMSS y dejé cotizar?",
    "respuesta":" Si, ya sea que nunca hayas cotizado o que alguna vez estuvieras dado de alta en el IMSS y dejastede cotizar, Si puedes integrarte con nosotros."}, 
    {"pregunta":"¿Al afiliarme con ustedes pierdo mi independencia laboral?",
    "respuesta":" No, usted no pierde su independencia laboral, usted sigue siendo un trabajador independiente, pero si gana todos los beneficios de la seguridad social"}, 
    {"pregunta":"¿Como le hago para pertenecer a Graja?",
    "respuesta":`Existen varias maneras de unirte a nuestra sociedad: 
            Sí vives en la Ciudad de México, puedes acudir a nuestras oficinas ubicadas en Avenida Venustiano Carranza, número 122, Colonia Valle de Madero, Cuautepec, Alcaldía Gustavo A. Madero, Código Postal 07100.
            Sí vives fuera de la ciudad puedes afiliarte llamando a este número 55-7579-9934 y uno de nuestros ejecutivos se comunicará contigo. ` }, 
{ "pregunta":"¿Son del gobierno?","respuesta":" No, Graja es una sociedad cooperativa sin fines de lucro.</strong>   una empresa que buscamos gente trabajadora como tú, trabajadores independientes que no tienen como comprobar ingresos y necesitan la seguridad social.  Graja tenemos la convicción de que trabajando dura y arduamente podemos salir adelante y que asociandote con nosotros ahora la seguridad social es una realidad. "}, 
{ "pregunta":"¿Si vivo en el extranjero puedo pertenecer a Graja?","respuesta":" Claro!. Todo mexicano puede asociarse con nosotros desde donde esté y de esta forma compartir los beneficios de la seguridad social con su familia en México."}, 
{ "pregunta":"¿Cuánto tiempo necesito estar afiliado al IMSS para poderme pensionar o jubilar?",
  "respuesta":`Depende de cuando fue afiliado al IMSS por primera vez.
        Para las personas afiliadas antes del año 1997 les corresponde la ley del 73. Por lo que usted requiere 500 semanas y haber cumplido  60 años de edad.
        Para las personas afiliadas después de 1997 les corresponde la ley del 97. Por lo requerirán de 1250 semanas de cotización y de  65 años de edad.`
    }, 
{
"pregunta":"¿Qué beneficios tengo al pertenecer a GRAJA?","respuesta":" Tienes los beneficios de la seguridad social como servicio medico y especialidades, hospitalización, puntos para tu crédito infonavit, semanas cotizadas para tu pensión."}, 
{
"pregunta":"¿Como mujer tengo algún otro beneficio?","respuesta":`Sí, las mujeres aseguradas o el asociado asegurado tienen derecho al beneficio`
    }, 
{
"pregunta":"¿Qué beneficios tengo al inscribirme en Graja a diferencia de hacerlo directamente en el IMSS?",
"respuesta":`Sí tu acudes al IMSS directamente cada servicio tiene un costo pero 
        sí estas asociado con Graja tienes derecho a todos los servicios 
        sin ningún costo adicional.`}, 
{
"pregunta":"¿De qué manera me ayudarán a promover mis servicios como trabajador independiente?",
"respuesta":" Usando nuestra página de internet para crear una red de contactos entre nuestros asociados para así promoverán las actividades y servicios que realizan con otros asociados o con el pú en general."}, 
{
"pregunta":"¿Ustedes pueden tramitar mi pensión?",
"respuesta":" No, porque es un trámite personal, pero en Graja podemos asesorarte para realizar este trámite."}
  ];

  constructor() { }

  ngOnInit() {
  }
}
export interface preguntaRespuesta {
  pregunta:string;
  respuesta:string;
 }


