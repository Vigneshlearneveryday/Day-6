class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Vignesh", "Durairaj",28, "Marine", "nauticalvigneshmenon@gmail.com", 9159352186, "Chennai");
let person2 = new Person("Durairaj","Samynathan", 61, "Aerospace engg", "duraiaerospace009@gmail.com", 9626618912, "chennai");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());

