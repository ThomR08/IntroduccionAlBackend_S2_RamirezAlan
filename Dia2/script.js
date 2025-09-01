class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`¡Hola!, soy ${this.name}`);
    }
}

class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(
            `Mi nombre es ${this.name}, yo seré tu profesor de ${this.teaches}`,
        );
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

class Estudent extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(
            `Mi nombre es ${this.name}, yo seré tu profesor de ${this.teaches}`,
        );
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

class Student extends Person {
    #year;

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(
            `¡Hola! me llamo ${this.name} y estoy en el año ${this.#year}.`,
        );
    }

    canStudyArchery() {
        return this.#year > 1;
    }
}

class Example {
    somePublicMethod() {
        this.#somePrivateMethod();
    }

    #somePrivateMethod() {
        console.log("¿Me llamaste?");
    }
}