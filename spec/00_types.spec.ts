describe('declaring variables', () => {
    it('implicitly typed variables', () => {
        let x = 10; // since I initialized this to a number, it inferred that I want this to be a number data type
        x = 10;
        // x = 'tacos'; // can't do this because x is a number
    });
    it('union types', () => {
        let y: number;
        y = 13;
        y = 13.33
        y = 123_123_123; // can use underscores in place of commas to make it more readable
        y = 0xff; // hex, base 16
        y = 0o22; // octal, base 8
        y = 0b10101; // binary, base 2

        let z: number | string;
        z = 12;

        z = 'tacos';

    });
    it('has const keyword', () => {
        // you cannot reassign go that variable
        const PI = 3.14;
        // PI = 3;

        const friends = ['Sean', 'Amy', 'Chip'];
        friends[2] = 'Everett'; // it is possible to change the values in a const array
        expect(friends[2]).toBe('Everett');
        expect(friends).toEqual(['Sean', 'Amy', 'Everett']);     // use toEqual for deep equality
    });
    it('has a var keyword but it is evil and you should not use it', () => {
        const age = 22;
        let message;
        if (age > 21) {
            message = 'Old Enough';
        } else {
            message = 'Too Young';
        }

        expect(message).toBe('Old Enough');
    });
})

describe('strings', () => {

    it('declaring them', () => {
        const s1 = 'Hello World';
        const s2 = 'Hello World';
        expect(s1).toBe(s2);

        const name = 'Bob';
        const salary = 123_000;

        const message = `the name is ${name} and the salary is ${salary} per year`;
        // you can only use ${} with backticks
        // backticks also allow for string builder type strings
    });
});

describe('array literals', () => {

    it('declaring them', () => {
        const favoriteNumbers = [1, 3, 9, 20];
        const favNumbers: number[] = [];
        favNumbers[0] = 12;

        // let stuff: number | string[];

        const stuff: (number | string)[] = [];
        stuff[0] = 12;
        stuff[1] = 'pizza';

        // this is the prefferred declaration style for union types
        const things: Array<number | string> = [];

    });
});

describe('tuples', () => {

    it('the problem and solution using OOP', () => {

        interface FormattedNameResponse { formattedName: string, numberOfLetters: number };
        function formatName(first: string, last: string): FormattedNameResponse {
            const formattedName = `${last}, ${first}`;
            return {
                formattedName,
                numberOfLetters: formattedName.length
            }
        }

        const result = formatName('Han', 'Solo');
        expect(result.formattedName).toBe('Solo, Han');
        expect(result.numberOfLetters).toBe(9);
    });

    it('using a tuple', () => {

        function formatName(first: string, last: string): [string, number] {
            const formattedName = `${last}, ${first}`;
            return [formattedName, formattedName.length];
        }

        // const result = formatName('Han', 'Solo');

        // expect(result[0]).toBe('Solo, Han');
        // expect(result[1]).toBe(9);

        const [n1, n2] = formatName('Han', 'Solo');

        expect(n1).toBe('Solo, Han');
        expect(n2).toBe(9);

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const [first, , third] = numbers;
        expect(first).toBe(1);
        expect(third).toBe(3);

        const [head, ...tail] = numbers; // the three dots here are called the 'spread' operator.
        expect(head).toBe(1);
        expect(tail).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    });

});