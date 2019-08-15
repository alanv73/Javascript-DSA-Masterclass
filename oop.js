{
    class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        console.log(`Full Name: ${this.firstName} ${this.lastName}`);
    }
    markLate(){
        this.tardies++;
        console.log(`${this.firstName} ${this.lastName} has been late ${this.tardies} times`);
        if(this.tardies >= 3){
            console.log(`${this.firstName} ${this.lastName} has been expelled!`);
        }
    }
    addScore(score){
        this.scores.push(score);
        console.log(`${this.firstName} ${this.lastName} scores: ${this.scores}`);
    }
    getAvg(){
        console.log(`${this.firstName} ${this.lastName} average score: ${this.scores.reduce((a,b) => a + b) / this.scores.length}`);
    }
    static enrollStudents(...students){
        students.forEach((student) => console.log(`Enrolling ${student.firstName} ${student.lastName}...`));
    }
}

    var bob = new Student("Bob", "Smith");
    var sam = new Student("Sam", "Jones", 2);

    console.log(bob);
    console.log(sam);
    bob.fullName();
    sam.fullName();
    Student.enrollStudents(bob, sam);
    bob.addScore(50);
    bob.addScore(60);
    bob.addScore(70);
    bob.getAvg();
}