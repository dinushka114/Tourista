import {render , screen, cleanup , component} from "@testing-library/react";
import BlogPost from "../components/Trip/BlogPost"


test("should render Blog Post Component", () => {
  expect(component.contains(<BlogPost />)).toBe(false)
});
