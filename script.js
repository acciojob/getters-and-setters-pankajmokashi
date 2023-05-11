//complete this code
class Person {
	constructor(name, age){
		this.name = name
		this.age = age
	}
	set setAge(age){
		this.age = age
	}
	get getName(){
		return this.name
	}
}

class Student extends Person {
	constructor(name) {
	    super(name);
	}
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name) {
	    super(name);
	}
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
