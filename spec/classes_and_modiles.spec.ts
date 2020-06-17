// must use index.ts in hr folder and export classes from that file
import { Employee, Retiree, Contractor } from './hr';

describe('classes and modules', () => {

    it('creating an instance of a class', () => {
        const bob = new Employee('Bob', 'Smith');
        const steve = new Retiree();
        const barb = new Contractor();

        expect(bob.firstName).toBe('Bob');
        expect(bob.lastName).toBe('Smith');

        bob.firstName = 'Robert';
        expect(bob.firstName).toBe('Robert');

        expect(bob.salary).toBe(100_000);
        // bob.salary = 200_000 // can't do it it is read -only

        bob.giveRaise(1000);
        expect(bob.salary).toBe(101_000);
        console.log('** BOB HAS AN ID OF ' bob.id);
    });
});

function getReport(thing: Reportable) {

}