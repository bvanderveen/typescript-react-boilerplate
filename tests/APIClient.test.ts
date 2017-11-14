import { APIClient, APIClientImpl } from '../src/core/APIClient'
import { expect } from 'chai';
//import mocha;

var client: APIClient;

beforeEach(() => {
    client = new APIClientImpl();
})

it('says hello', () => {
    const result = client.greet({ firstName: "Jane", lastName: "Doe" });
    expect(result).to.equal('Hello, Jane Doe');
});