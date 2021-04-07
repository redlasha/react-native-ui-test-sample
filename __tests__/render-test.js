import React from "react"
import App from "../App"
import { render } from "@testing-library/react-native"


function getTempComponent(props) {
    return <App {...props} />
}

describe("[App] render", () => {
    let props = {};
    let component = getTempComponent(props);
    it("renders without crashing", () => {
        const rendered = render(component);
        expect(rendered).toMatchSnapshot();
        expect(rendered).toBeTruthy();
    })
});
