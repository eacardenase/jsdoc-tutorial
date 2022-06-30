## Second Tutorial

Just some random test

```js
/**
 * Class to create a programmer
 * @example
 * const newProgrammer = new Programmer({ id: 1, name: 'Edwin Cardenas', age: 26, isActive: true }, 'JavaScript');
 * newProgrammer.getInfo();
 *
 * @see https://github.com/eacardenase
 *
 * @todo Implement the rest of methods
 */
class Programmer {
    /**
     * @param {User} user User's Information
     * @param {string} language A programming language
     */
    constructor(user, language) {
        this.fullName = user.name;
        this.language = language;
    }

    /**
     * Get programmer information
     * @returns {void}
     */
    getInfo() {
        console.log(
            `I'm ${this.fullName} and my favorite programming language is ${this.language}`
        );
    }
}

/**
 * Know more in class {@link Programmer}
 */
const programmerOne = new Programmer(
    { id: 1, name: 'Edwin Cardenas', age: 26, isActive: true },
    'JavaScript'
);
const programmerTwo = new Programmer(
    { id: 2, name: 'Brayam Pineda', age: 26, isActive: true },
    'Python'
);
```
