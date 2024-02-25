
class Ninja {
    constructor(nombre,salud,vel,fuerza) {
        this.nombre=nombre;
        this.salud=0;
        this.vel=3;
        this.fuerza=3;
    }
    sayName() {
        console.log(`Nombre: ${ this.nombre }`);
    }
    showStats(){
        console.log(`Nombre: ${ this.nombre}`);
        console.log(`Salud: ${ this.salud}`);
        console.log(`Velocidad: ${ this.vel}`);
        console.log(`Fuerza: ${ this.fuerza}`);
    }
    drinkSake(){
        this.salud +=10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

