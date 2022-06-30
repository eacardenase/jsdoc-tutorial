//@ts-check

/**
 * Person Object
 * @type {{id: number, firstName: string, lastName: string, age: number}}
 */
const person = {
    id: 1,
    firstName: 'Edwin',
    lastName: 'Cardenas',
    age: 26,
};

/**
 * Person Object 2
 * @type {{id: number | string, firstName: string, lastName: string, age: number | null}}
 */
const person2 = {
    id: '2',
    firstName: 'Edwin',
    lastName: 'Cardenas',
    age: null,
};
