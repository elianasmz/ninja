
class Ninja {
    constructor(nombre,salud,vel,fuerza) {
        this.nombre=nombre;
        this.salud=salud;
        this.vel=vel;
        this.fuerza=fuerza;
    }
    sayName() {
        console.log(`Nombre: ${ this.nombre }`);
    }
    showStats(){
        console.log(`Nombre: ${ this.nombre} Salud: ${ this.salud} Velocidad: ${ this.vel} Fuerza: ${ this.fuerza}`);
    }
    drinkSake(){
        this.salud +=10;
    }
}
class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre,200,10,10);
        this.sabiduria=10;
    }
    //funcion simple de la clase hijo
    speakWisdom() {
        const aumVida = super.drinkSake();
        console.log('"Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."');
    }
}

const ninja1 = new Ninja("Hyabusa");
//ninja1.sayName();
//ninja1.showStats();

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"



