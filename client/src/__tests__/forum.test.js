import {render , screen, cleanup} from "@testing-library/react";
import AskQuizForm from "../components/AskQuizForm/AskQuizForm"

test("should render ask quiz form", () => {
  render(<AskQuizForm/>)
});
