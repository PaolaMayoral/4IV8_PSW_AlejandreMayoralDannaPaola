
function problema1(){


    //se crean las variables
    var ingreso = parseInt(document.getElementById('ingreso').value);

    var meses = parseInt(document.getElementById('meses').value);
    
    //se realiza el calculo
    var dInv = parseFloat(ingreso*0.02*meses);

    //se usan los primeros 2 decimales
    var inversion = dInv.toFixed(2);

    //Regresa los valores a la salida
    document.getElementById('p1-salida').textContent =  'Dinero invertido $' + ingreso + '\n' +
                                                        'Meses que se invirtió ' + meses + '\n' +
                                                        'Ganancia de inversion  ' + inversion;

}

function problema2(){
    
    //creamos variables 

    //sueldo
    var sueldoB = parseInt(document.getElementById('sueldoB').value);
    //venta 1
    var vent1 = parseInt(document.getElementById('vent1').value);
    //venta 2
    var vent2 = parseInt(document.getElementById('vent2').value);
    //venta 3
    var vent3 = parseInt(document.getElementById('vent3').value);
    //calcular comision
    var com = (vent1+vent2+vent3)*0.1;
    //usar los primeros 2 decimales de comision
    var comis = com.toFixed(2);
    //calcular el sueldo final
    var tot = com + sueldoB;
    //usar primeros 2 decimales de comision
    var total = tot.toFixed(2);

    //Regresamos los datos a la salida
    document.getElementById('p2-salida').textContent = 'Total de Ganancia en comisiones: $' + comis + '\n' + 'Total mensual: $' + total;
}

function problema3(){

    //crear variable precio
    var precio = parseInt(document.getElementById('precio').value);

    //calcular el descuento
    var descuento = precio*0.15;
    //usar primeros 2 decimales de descuento
    var desc = descuento.toFixed(2);

    //calcular el precio final
    var tot = precio-desc;

    //Regresamos los valores a la salida
    document.getElementById('p3-salida').textContent = 'El descuento es de $'+desc+ '\n' + 'El precio final del producto es de $'+tot;

}

function problema4(){

    //creamos variables de calificacion

    var c1 = parseInt(document.getElementById('c1').value);
    var c2 = parseInt(document.getElementById('c2').value);
    var c3 = parseInt(document.getElementById('c3').value);
    
    //variables de examen y trabajo final
    var exa = parseInt(document.getElementById('exa').value);

    var trbj = parseInt(document.getElementById('trbj').value);

    //calculamos porcentajes de calificaciones

    var cf = (((c1+c2+c3)/3)*55)/10;

    var exaF = (exa*30)/10;

    var trbjF = (trbj*15)/10;
    
    //Calificacion final total

    var cft = cf + exaF + trbjF;

    //Damos solo 2 decimales a las variables

    var calif = cf.toFixed(2);
    var exam = exaF.toFixed(2);
    var trabaj = trbjF.toFixed(2);
    var cFinal = cft.toFixed(2)

    //Regresamos los valores a la salida

    document.getElementById('p4-salida').textContent =  'El porcentaje obtenido del promedio parcial es de ' + calif + '%' + '\n' + 
                                                        'El porcentaje obtenido del examen es de ' + exam + '%' + '\n' +
                                                        'El porcentaje obtenido del trabajo final es de ' + trabaj + '%' + '\n' +
                                                        'La calificacion final es de ' + cFinal;

}

function problema5(){


    //Creamos variables de alumnos

    var tAlumnos = parseInt(document.getElementById('tAlumnos').value);

    var aMujeres = parseInt(document.getElementById('aMujeres').value);

    var aHombres = parseInt(document.getElementById('aHombres').value);

    //Calculamos los porcentajes

    var pMujeres = aMujeres*100/tAlumnos;

    var pHombres = aHombres*100/tAlumnos;

    //Regresamos los valores a la salida

    document.getElementById('p5-salida').textContent =  'El total es de ' + tAlumnos + '\n' +
                                                        'Hay ' + aMujeres + ' mujeres y ocupan el ' + pMujeres + '% del grupo' + '\n' +
                                                        'Hay ' + aHombres + ' hombres y ocupan el ' + pHombres + '% del grupo' + '\n';                                             
    
}

function problema6(){

    //Creamos variables de años

    var aNac = parseInt(document.getElementById('aNac').value);
    
    var act = parseInt(document.getElementById('act').value);

    //Calculamos la edad

    var edad = act-aNac;

    //Regresamos los valores a la salida

    document.getElementById('p6-salida').textContent = 'Tu edad actual es de ' + edad + ' años';
}

function Numeros(string){
    
    //Creacion de caracteres validos
    var out = '';
    var filtro = '1234567890';
	
    //Recorre el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
	     out += string.charAt(i);
	
    //Retornar valor filtrado
    return out;
}