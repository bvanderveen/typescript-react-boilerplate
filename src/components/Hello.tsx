import * as React from "react";
import { Person, APIClientImpl } from '../core/APIClient'

export interface HelloProps { person: Person; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        let client = new APIClientImpl();
        let result = client.greet(this.props.person);
        return <h1>{result}!</h1>;
    }
}