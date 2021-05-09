const autos = require('./autos');
const persona = {
nombre: 'Juan',
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
};
let concesionaria = {
   autos: autos,
   buscarAuto: function buscarAuto(patente){
    for(let i = 0; i < this.autos.length; i ++){
        if(this.autos[i].patente === patente)
            return autos[i];
    }
    return null;
   },
   venderAuto: function venderAuto(patente){
       if(this.buscarAuto(patente)!=null)
           this.autos[this.autos.indexOf(this.buscarAuto(patente))].vendido =true;
   },
   autosParaLaVenta: function autosParaLaVenta(){
      return this.autos.filter(disponibles => disponibles.vendido == false);
   },
   autosNuevos: function autosNuevos(){
       return (this.autosParaLaVenta().filter(ceroK => ceroK.km <=100));
   },
   listaDeVentas: function listaDeVentas(){
       return this.autosParaLaVenta().map(precio => precio.precio);
    },
   totalDeVentas: function totalDeVentas(){
      return this.listaDeVentas().reduce((con, val)=> con + val,0 );
   },
   puedeComprar: function puedeComprar(auto,persona){
      return (persona.capacidadDePagoTotal>auto.precio && persona.capacidadDePagoEnCuotas>auto.precio/auto.cuotas);   
   },
   autosQuePuedeComprar: function autosQuePuedeComprar(persona){
      let paraLaVenta = this.autosParaLaVenta();
      let paraComprar = [];
      for(let i = 0; i < paraLaVenta.length; i ++)
      {
         if(this.puedeComprar(paraLaVenta[i], persona))
         paraComprar.push(paraLaVenta[i]);
      }
      return paraComprar;
   }
};

console.log(concesionaria.autos);
//console.log(concesionaria.buscarAuto('APL123'));
//console.log(concesionaria.buscarAuto('JJK116'));
//console.log(concesionaria.buscarAuto('otro'));
//console.log(concesionaria.venderAuto('APL123'));
//console.log(concesionaria.venderAuto('JJK116'));
//console.log(concesionaria.venderAuto('otro'));
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
/*Esta función no funciona en  VS CODE ya que no tiene alguna referencia pero en playground si funciona */
//console.log(concesionaria.puedeComprar(auto,persona));
//console.log(concesionaria.autosQuePuedeComprar(persona));