/**
 * Greet should render the test hello, and if the name is passed to the component
 * then it should render hello followed by the name.
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "../../components/Greet/Greet";


describe("Greet", () => {

    test("renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    })

    test("renders Hello with a name", () => {
        render(<Greet name="John" />);
        const textElement = screen.getByText("Hello John");
        expect(textElement).toBeInTheDocument();
    })
})