
EJERCICIO 2:

1. ¿Qué es un servidor HTTP? 
    Un servidor HTTP es el encargado de generar y devolver informacion al Cliente en respuesta a sus peticiones, mediante el protocolo de comunicacion HTTP.

2. ¿Qué son los verbos HTTP? Mencionar los más conocidos
   Los verbos HTTP son palabras utilizadas por el cliente para realizar peticiones al servidor, entre los mas conocidos estan GET, POST, PUT Y DELETE.

3. ¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
   Request y Response son tipos de peticiones que se requieren para una comunicacion HTTP, en el caso de request es iniciada por el Cliente y response es devuelta 	   por el servidor en respuesta a request. Los headers son parte adicional de las peticiones que realiza el cliente y de las respuestas que realiza el servidor.

4. ¿Qué es un queryString? (En el contexto de una url)
   QueryString es una cadena de caracteres que forma parte de la url en el caso de querer enviar datos por medio de un GET.

5. ¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
   El responseCode es el codigo que indica el estado de la respuesta HTTP. Si el codigo comienza con 1 se trata de respuestas informativas, si es 2 respuestas 		   satisfactorias, si es 3 son redireccionamientos, 4 errores del cliente y 5 errores por parte del servidor.


6. ¿Cómo se envía data en un Get y cómo en un POST? 
   En un GET los datos se envian utilizando la Url, en cambio en el POST los datos se envian de forma oculta para el usuario, es decir no se ve en la url.

7. ¿Qué verbo http utiliza el navegador cuando accedemos a una página?
   El verbo utilizado para acceder a unan pagina web es el GET.

8. Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
   Las estructuras de datos JSON son formas de representar datos para poder enviarlos y leerlos de manera simple simulando un objeto.
   Ejemplo:
	{
	  "patente" : 123,
	  "marca" : "Ford"
	}
	
   Las estructuras de datos XML son formas de representar datos mediante etiquetas personalizadas.
   Ejemplo:
	<?xml version="1.0" standalone="no"?>
	<!DOCTYPE persona SYSTEM "persona.dtd">

	<persona>
		<nombre>Alan</nombre>
		<apellido>Rodriguez</apellido>
	</persona>

9. Explicar brevemente el estándar SOAP
   SOAP permite comunicar dos objetos que se encuentra en diferentes procesos por medio de intercambio de datos XML	

10. Explicar brevemente el estándar REST Full
    REST Full se refiere a un servicio web que implementa la arquitectura REST, la cual consiste en enviar datos por medio de JSON.

11. ¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
    Los headers en un request es lo que contiene la informacion basica de una peticion, y se ubica en la primera linea, junto al metodo HTTP, url y version.
    Key Content-type en un header se utiliza para indicar el tipo de dato que sera retornado.

EJERCICIO 3:

En el primer GET obtengo datos del dni, nombre y apellido de diferentes personas. Luego de realizar el POST y hacer el GET nuevamente obtengo los mismos datos, agregando los míos que cargué previamente en el POST.

En la carpeta "imagenes" se encuentran los screen del ejercicio.

----------------------------------------------------------------------------------------
Ejecutar programa para ejercicios:
----------------------------------------------------------------------------------------
Precondicion:instalar Node.js
Abrir GIT Bash en la carpeta VirtualDreams.
Por unica vez ejecutar npm install y esperar a que cargue

EJERCICIO 4: 
Correr comando en git bash: node mostrarPersonas.js

EJERCICIO 5: 
Correr comando en git bash: node servidorExpress.js
Con postman correr un request POST en la url http://localhost:3000/usuario 
con un json de formato
{
  "nombre":"nombre",
  "apellido":"apellido",
  "dni":11222333
}

EJERCICIO 6: 
Correr comando en git bash: node servidorExpress.js
Abrir el archivo crearPersonas.html en un navegador. 
Completar los datos y clickear en enviar.
