import {render , screen, cleanup , component} from "@testing-library/react";
import AskQuizForm from "../components/AskQuizForm/AskQuizForm"

test("should render ask quiz form", () => {
  expect(component.contains(<AskQuizForm />)).toBe(false)
});
