/Objects - Contains group os properties and behaviour. Contains variables and methods

//Collection of key value pairs

 

//Employee(Object) - name, id, salary(properties)

//                     Bonus(), getempdetails(), setempdetails()   - Methods

 

// Using Object type

let employee = {         //[When creating the object supppose like employee:object. We can't access the methods and variables]

    name: "John",

    age:30,

    salary:50000,

    job: "Engineer",

    getdetails: function () {

        //console.log(this.name, this.age, this.salary, this.job);

        return `${this.name} is a ${this.job} earning ${this.salary}`

    }

}

console.log(typeof(employee))

 

//Accessing object :

//Appraoch 1:

console.log(employee.name, employee.job, employee.salary)

console.log(employee.getdetails())

 

//Braccket Notation

//Approach 2

console.log(employee["name"], employee["job"], employee["salary"])

console.log(employee["getdetails"]())

 

//Modify the value in the object

employee.job = "Manager"

console.log(employee.name, employee.job, employee.salary)

console.log(employee.getdetails())

 

//Inline type object: Here we mention the datatype of the objecct

let student:{

    name:string,

    id: number,

    grade: string,

    getSummary: () => string

} =

{

    name: "Kevin",

    id:  56,

    grade: "A",

    getSummary: function()

    {

        return `${this.name} id is ${this.id} and scored grade ${this.grade}`

    }

}

console.log(student.getSummary())

 

let student2:{

    name:string,

    id: number,

    grade: string,

    getSummary: () => string

} =

{

    name: "Marcus",

    id:  57,

    grade: "B",

    getSummary: function()

    {

        return `${this.name} id is ${this.id} and scored grade ${this.grade}`

    }

}

console.log(student2.getSummary())

 

//In Inline type object, this is thee issue. Whenever we want to add new student we need to add all the details like above for total of 10 objects.

 

// For this we have another approach. alias.

// Appraoch 3 - Using "type" aliases

type Product={

    name: string,

    price: number,

    getinfo: () => string

}

 

let book1: Product={

    name: "Wukong",

    price: 500,

    getinfo: function(){

        return `${this.name} costs ${this.price}`

    }

}

 

let book2: Product={

    name: "RiseKung",

    price: 800,

    getinfo: function(){

        return `${this.name} costs ${this.price}`

    }

}

 

let book3: Product={

    name: "KingKong",

    price: 1000,

    getinfo: function(){

        return `${this.name} costs ${this.price}`

    }

}

 

console.log(book1.getinfo())

console.log(book2.getinfo())

console.log(book3.getinfo())

 

//The above 3 types are only important for interview but won't be used in Playwright.