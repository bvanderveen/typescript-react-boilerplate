
export interface Person {
    firstName: string,
    lastName: string
}

export interface APIClient {
    greet(p: Person);
}

export class APIClientImpl implements APIClient {

    constructor() {

    }

    greet(p: Person) {
        return "Hello, " + p.firstName + " " + p.lastName;
    }

}