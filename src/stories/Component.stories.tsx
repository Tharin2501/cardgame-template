import * as React from "react";

import { storiesOf } from "@storybook/react";
import {Deck} from "../Deck";
import {TestComponent} from "./components/TestComponent";

// Here we add our classes and creates stories for them

storiesOf("Component/Test", module).add("Test Component", () => <TestComponent />);

storiesOf("Class/Deck", module).add("Deck", () => <Deck/>);
