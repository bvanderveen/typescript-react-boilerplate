import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

let person = { firstName: "Jane", lastName: "Doe" };

ReactDOM.render(
    <Hello person={person} />,
    document.getElementById("root")
);