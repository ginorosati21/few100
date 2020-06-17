import * as cuid from 'cuid';
class Person {

}
export interface Reportable {
    getReportInfo: () => string
}

export class Employee extends Person implements Reportable {

    private _salary = 100_000;
    private _id: string;
    constructor(public firstName: string, public lastName: string) {
        super();
        this._id = cuid();
    }

    get id() {
        return this._id;
    }

    get salary() {
        return this._salary;
    }

    getReportInfo() {
        return `${this.firstName} ${this.lastName}, Employee`;
    }

    // set salary(newVal: number) {
    //   this._slaary = newVal;
    // }


    giveRaise(amount: number) {
        this._salary += amount;
    }

}