
enum EPersons {
    Infant,
    Child,
    Adult,
}
interface IPerson {
    category: EPersons;
    canSignContract(): boolean;
    printDetail(): void;
}

abstract class Person implements IPerson        {
    dob: string;
    category: EPersons;
    constructor(dob: string, category: EPersons){
        this.dob = dob;
        this.category = category;
    }

    abstract canSignContract() : boolean;

    printDetail() {
        console.log(this.canSignContract());
    }
}
class Infant extends Person {
    canSignContract() {
        return false;
    }
}
class Child extends Person {
    canSignContract() {
        return false;
    }
}
class Adult extends Person {
    canSignContract() {
        return true;
    }
}
class PersonFactory {
    getPerson(dob: string) {
        let date = new Date(dob);
        let today = new Date();
        let totalYearMilli = today.getTime() - date.getTime();
        let yearOld = new Date(totalYearMilli);
        let ageDate = Math.abs(yearOld.getUTCFullYear() - 1970);
        let person;
        if(ageDate > 18) {
            person = new Adult(dob, EPersons.Adult)
        } else if(ageDate < 18 && ageDate > 2) {
            person = new Child(dob, EPersons.Child)
        } else {
            person = new Infant(dob, EPersons.Infant)
        }
        person.printDetail();
    }
}

new PersonFactory().getPerson('1990-11-21')
new PersonFactory().getPerson('1992-05-21')
new PersonFactory().getPerson('1998-11-21')
new PersonFactory().getPerson('2017-11-21')
new PersonFactory().getPerson('2012-11-21')