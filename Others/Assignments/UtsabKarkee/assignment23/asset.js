/*
  Inheritance ---> IS-A Relationship [IS A TEST]
  Employee is a Person ---> true
  class Person{} class Employee extends Person{}
  Is Person always Employee ---> No, can be Employer/Soldier/Prisoner/Criminal.
  But Employee is always a Person.

  Student is a College ---> false. [So, we cannot model Student and College as IS-A relationship]
  But College has Students.  HAS-A Relationship [Car has an Engine]
  class Student{}
  class College{
    #students;        ------> # --> private Similar to private in Java.[...  ---> similar to varargs introduced in Java 1.5]
    constructor(...student){
      this.#students = [];
      //add all elements of students to #students
    }
  }

*/

class Asset {
  #type;
  constructor(type) {
    if (this.constructor != Asset) {
      this.#type = type;
    } else {
      throw new Error("Asset cannot be instantiated.");
    }
  }
  getType() {
    return this.#type;
  }

  getInfo() {
    return this.#type;
  }
}

class BankAccount extends Asset {
  #name;
  #balance;

  constructor(type, name, balance) {
    super(type);
    if (this.constructor != BankAccount) {
      this.#name = name;
      this.#balance = balance;
    } else {
      throw new Error("BankAccount cannot be instantiated.");
    }
  }
  getName() {
    return this.#name;
  }
  getBalance() {
    return this.#balance;
  }
  getInfo() {
    return super.getInfo() + " " + this.#name + " " + this.#balance;
  }
}

class SavingsAccount extends BankAccount {
  #savingsInterestRate;
  constructor(type, name, balance, savingsInterestRate) {
    super(type, name, balance);
    this.#savingsInterestRate = savingsInterestRate;
  }
  getSavingsInterestRate() {
    return this.#savingsInterestRate;
  }
  getInfo() {
    return super.getInfo() + " " + this.#savingsInterestRate;
  }
}

class CheckingsAccount extends BankAccount {
  #debitCardPurchaseAvailable;
  constructor(type, name, balance, debitCardPurchaseAvailable) {
    super(type, name, balance);
    this.#debitCardPurchaseAvailable = debitCardPurchaseAvailable;
  }
  getSavingsInterestRate() {
    return this.#debitCardPurchaseAvailable;
  }
  getInfo() {
    return super.getInfo() + " " + this.#debitCardPurchaseAvailable;
  }
}

const bankAccounts = [
  new SavingsAccount("Saving", "Chamunda", 100000, 10),
  new CheckingsAccount("Checking", "Tridevi", 100000, true),
].forEach(function (account) {
  console.log(account.getInfo());
});

class College {
  #name;
  #establishedDate;
  #moto;
  #students;

  constructor(name, establishedDate, moto, student) {
    if (Array.isArray(student)) {
      this.#students = [];
      this.#establishedDate = establishedDate;
      this.#moto = moto;
      this.#name = name;
      this.#addStudents(student);
    } else {
      throw new Error("Four Parameter Must be Array Type");
    }
  }

  #addStudents(students) {
    const aStudents = this;
    students.forEach(function (student) {
      aStudents.#students.push(student);
    });
  }

  getName() {
    return this.#name;
  }

  getEstablishedDate() {
    return this.#establishedDate;
  }

  getMoto() {
    return this.#moto;
  }

  getInfo() {
    return this.#name + " " + this.#establishedDate + " " + this.#moto + " ";
  }
  getStudents() {
    return this.#students;
  }
}

class Student {
  #name;
  #dateOfBirth;
  #gender;

  constructor(name, dateOfBirth, gender) {
    this.#name = name;
    this.#gender = gender;
    this.#dateOfBirth = dateOfBirth;
  }

  getName() {
    return this.#name;
  }

  getDateOfBirth() {
    return this.#dateOfBirth;
  }

  getGender() {
    return this.#gender;
  }

  getInfo() {
    return this.getName() + " " + this.#gender + " " + this.#dateOfBirth;
  }
}

const students = [
  new Student("Parvati", new Date(1997, 0, 1), "Female"),
  new Student("Chamunda", new Date(1999, 10, 16), "Female"),
  new Student("Kali", new Date(1996, 5, 11), "Female"),
  new Student("Laxmi", new Date(1995, 8, 24), "Female"),
];

const college = new College(
  "Saraswati Pathshala",
  new Date(1990, 11, 21),
  "Learning",
  students
);
console.log(college.getInfo());
console.log(college.getStudents());

document.querySelector("title").innerText = "Inheritance";
