let contenido = {
    inicio:`<button>Anterior</button>
    <h3>Estado del Contrato</h3>
    <button id="aconectar" onclick='next(id)'>A conectar</button>
    <button id="conectado"onclick='next(id)'>Conectado</button>
    <button id="desconectado"onclick='next(id)'>Desconectado</button>`,
    conectado:`<button id="inicio" onclick='next(id)'>Anterior</button>
    <h3>El led power esta encendido</h3>
    <p>imagen</p>
    <button id="encendidosi" onclick='next(id)'>Si</button>
    <button id="encendidono" onclick='next(id)'>No</button>`,
    aconectar:`<button id="inicio" onclick='next(id)'>Anterior</button>
    <h3>Verificar Razón</h3>
    <p>Ver en calipso, intalacion nueva, etc</p>
    `,
    desconectado:`<button id='inicio'onclick='next(id)'">Anterior</button>
    <h3>Gestion comercial</h3>
    <p>Ver en calipso</p>
    `,
    encendidosi:`<button id="conectado" onclick='next(id)'>Anterior</button>
    <h3>Led los encendido</h3>
    <p>imagen</p>
    <button id="losencendido" onclick='next(id)'>Si</button>
    <button id="niveles"onclick='next(id)'>No</button>`,
    encendidono:`<button id="conectado" onclick='next(id)'>Anterior</button>
    <h3>Encender Onu con botón power</h3>
    <p>imagen</p>
    <h3>¿Encendió el led power?</h3>
    <button id="encendidosi"  onclick='next(id)'>Si</button>
    <button onclick='next(id)'>No</button>`,
    transformador:`<button id="encendidono" onclick='next(id)'>Anterior</button>
    <h3>Verificar transformador</h3>
    <p>imagen</p>
    <p>Pedir que conecte a otro transformador o tomacorrientes</p>
    <h3>¿Encendió el led power?</h3>
    <button id="encendidosi" onclick='next(id)'>Si</button>
    <button id="service" onclick='next(id)'>No</button>`,
    service:`<button id="transformador" onclick='next(id)'>Anterior</button>
    <h3>Agendar para service</h3>
    <p>imagen</p>`,
    losencendido:`<button id="encendidosi" onclick='next(id)'>Anterior</button>
    <h3>Ajustar conector SC/UPC/APC</h3>
    <p>imagen</p>
    <h3>Luego de ajustar sigue en rojo</h3>
    <button id="service" onclick='next(id)'>Si</button>
    <button id="niveles" onclick='next(id)'>No</button>`,
    niveles:`<button id="losapagado" onclick='next(id)'>Anterior</button>
    <h3>Verificar en dsa</h3>
    <p>Nivel de luz, conexion segun contrato</p>
    <p>imagen</p>
    <p>nivel de luz, potencia, etc</p>
    <h3>Valores normales?</h3>
    <button id="ip" onclick='next(id)'>Normal</button>
    <button id="service" onclick='next(id)'>Distinto</button>`,
    ip:`<button id="niveles" onclick='next(id)'>Anterior</button>
    <h3>Toma ip de navegacion?</h3>
    <p>imagen</p>
    <button id="" onclick='next(id)'>Si</button>
    <button id="" onclick='next(id)'>No</button>`,
}
/*
modelo:`<button id="" onclick='next(id)'>Anterior</button>
    <h3></h3>
    <p>imagen</p>
    <button id="" onclick='next(id)'>Si</button>
    <button id="" onclick='next(id)'>No</button>`,
*/
const contenedor = document.querySelector('.contenedor');
contenedor.innerHTML = contenido.inicio
//funcion next recibe el id del siguiente elemento en base a los datos del id del boton
let next = (id)=>{
    contenedor.innerHTML = contenido[id]
    console.log(contenido[id])
}