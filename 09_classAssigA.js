class Vehicle {
    constructor( company ,color ,model ,price ,mileage){
        this.company = company;
        this.color = color;
        this.model = model;
        this.price = price;
        this.mileage = mileage;
    }
    detail(){
        console.log(`Vehicle Details => Company: ${this.company}, Color: ${this.color}, Model: ${this.model}, Price: ${this.price}, Mileage: ${this.mileage}`);
    }
}
console.log(`=========================== Step 01 ===============================`);
const bolero = new Vehicle("Mahindra", "White", "Bolero","10.91 L", "17km/l");
bolero.detail();

const creta = new Vehicle("Hyundai", "White", "Creta","11.00 L", "17.4 to 21.8 kmpl");
creta.detail();

const thar = new Vehicle("Mahindra", "White", "Thar","17.60 L", "15.2kmpl");
thar.detail();

const chopper = new Vehicle("Helicopters", "White", "Chopper","5 to 20 crores", "250-400miles");
chopper.detail();

const bike = new Vehicle("Hero", "Red", "Bike","1.30 L", "55km/l");
bike.detail();

console.log(`-------------------------------- create an array and Treversing array -------------------------------- `);
const arrayOfVehicle= [bolero, creta , thar, chopper,bike ]
for (const element of arrayOfVehicle) {
    element.detail();
}

console.log(`=========================== Step 02 ===============================`);
class Collage {
    constructor( name ,location ,grade ,branches ){
        this.name = name;
        this.location = location;
        this.grade = grade;
        this.branches = branches;
       
    }
    detail(){
        console.log(`Vehicle Details => name: ${this.name}, location: ${this.location}, grade: ${this.grade}, branches: ${this.branches}`);
    }
}
const fabtech = new Collage("Fabtech", "Sangola", "A", 7);
fabtech.detail();

const sveri = new Collage("Sveri", "Pandharpur", "A++", 8);
sveri.detail();

const coep = new Collage("COEP", "Pune", "A++", 12);
coep.detail();

const kit = new Collage("KIT", "kholapur", "A++", 11);
kit.detail();
