function xml2html() {
	if (window.XMLHttpRequest)
	  {// codigo para IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp = new XMLHttpRequest();
	  }
	else
	  {// codigo para IE6, IE5
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET","../xml/facturacion.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 
	document.write("<br><br><h1 align='center' style='color:#5C4033'>NUESTROS CLIENTES</h1>");
	document.write("<table border=1 style='color:#5C4033' align='center'><tr><th>Tipo</th><th>Nombre</th><th>Contacto</th><th>Correo</th></tr>");
	var x = xmlDoc.getElementsByTagName("factura");
	for (i=0;i<x.length;i++)
	  { 
	    document.write("<tr><td>");
	    document.write(x[i].getElementsByTagName("tipo")[0].childNodes[0].nodeValue);
	    document.write("</td><td>");
	    document.write(x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
	    document.write(x[i].getElementsByTagName("contacto")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("correo")[0].childNodes[0].nodeValue);
        document.write("</td></tr>");
	  
	  }
	document.write("</table>");
}