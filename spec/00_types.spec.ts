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

    it('type aliases', () => {
        type Artist = string | number;
        const name: Artist = 'Elvis';
        const age: Artist = 100;
    });

    it('basic example', () => {
        // typed array
        const stuff: Array<number | string> = [];
        stuff[0] = 32;
        stuff[1] = 'Dog';
        stuff[2] = 99;
        // stuff[3] = []

        type Artist = [string, string, string, number];
        const artist: Artist = ['Warren', 'Ellis', 'Musician', 58];
        const nonInferrableTypes: [boolean, string] = [true, 'thingy'];

        // const firstName = artist[0];
        // const lastName = artist[1];
        // const age = artist[3];

        const [firstName, lastName, , age] = artist;

        expect(firstName).toBe('Warren');
        expect(lastName).toBe('Ellis');
        expect(age).toBe(58);

    });

    it('type aliases', () => {
        type ThingWithLettersAndStuff = string | number;

        let userName: ThingWithLettersAndStuff;

        userName = 'Bob';
        userName = 92;

        type MathOp = (a: number, b: number) => number;

        const add: MathOp = (a, b) => a + b;
        const subtract: MathOp = (a, b) => a - b;

        function doMath(x: number, y: number, f: MathOp): number {
            return f(x + x, y + y);
        }

        expect(doMath(2, 2, add)).toBe(8);
    });

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

describe('object literls and interfaces', () => {

    it('an anonymous object type is an interface', () => {
        // use an interface because it can be reused
        interface Movie {
            title: string;
            director: string;
            yearReleased: number;
        };

        const lotr: Movie = {
            title: 'Lord of the Rings',
            director: 'Peter Jackson',
            yearReleased: 2001
        };

        function attendMovie(theMovie: Movie) {
            // do domething
        }
    });

    // Jeff said this is super important and life changing
    it('duck typing (structural typing)', () => {
        interface Messageable { message: string }
        function logIt(thingy: Messageable) {
            console.log(thingy.message)
        }

        // logit('tacos');
        const phoneCall = {
            from: 'sean',
            message: 'practice tonight?'
        }

        logIt(phoneCall);
        logIt({ message: 'Time for lunch' });
    });

    it('making extensible interfaces', () => {
        interface Role { role: string; actor: string }
        interface Dictionary<T> {
            [key: string]: T
        }
        interface Movie {
            title: string;
            director: string;
            yearReleased: number;
            cast: Dictionary<Role>
        };
        const thor: Movie = {
            title: 'Thor Ragnorak',
            director: 'Taika Waititi',
            yearReleased: 2017,
            cast: {
                thor: { role: 'Thor', actor: 'Chris Hemsworth' },
                odin: { role: 'Odin', actor: 'Anthony Hopkins' },
                'Loki the Brother': { role: 'Loki', actor: 'Tom Hiddelston' }
            }

        }

        expect(thor.cast.thor.actor).toBe('Chris Hemsworth');
        expect(thor.cast['Loki the Brother'].actor).toBe('Tom Hiddelston');

        interface Person {
            firstName: string;
            lastName: string;
            age?: number,
            [key: string]: any
        }

        const joe: Person = {
            firstName: 'Joseph',
            lastName: 'Schmidt',
            age: 56
        }

        const sue: Person = {
            firstName: 'Susan',
            lastName: 'Schneider'
        }
        const sean: Person = {
            firstName: 'Sean',
            lastName: 'Carlin',
            age: 62,
            occupation: 'Musician',
            eyeColor: 'blue'
        }

        function doIt(p: Person) {
            if (p.age !== undefined) {

            }
        }
    });
});

describe('truth table', () => {

    it('truth table', () => {
        expect('').toBeFalsy();
        expect(null).toBeFalsy();
        expect(0).toBeFalsy();
        expect(NaN).toBeFalsy();

        expect(' ').toBeTruthy();
        expect(-1).toBeTruthy();
        expect({}).toBeTruthy();
        expect([]).toBeTruthy();
    });
});

describe('enums and string unions', () => {

    it('has enums but they are a bit heavy', () => {
        enum SeatType { Window, Aisle, Middle };

        const mySeat: SeatType = SeatType.Window;
    });

    it('has union types for strings', () => {
        type SeatType = 'Aisle' | 'Window' | 'Middle';
        const mySeat: SeatType = 'Middle';
    });
});

describe('spread operator', () => {

    it('as used on arrays', () => {
        const numbers = [2, 3, 4, 5, 6];
        const newNumbers = [1, ...numbers, 7];

        expect(newNumbers).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(numbers).toEqual([2, 3, 4, 5, 6]);
    });

    it('used on objects', () => {
        const movie = {
            title: 'Jaws',
            director: 'Spielberg',
            yearReleased: 1981
        };

        const newMovie = { ...movie, yearReleased: 1977 };
        const another = { ...movie, lead: 'Roy Scheider' };
    });
});