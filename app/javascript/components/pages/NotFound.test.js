import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound.js";

Enzyme.configure({ adapter: new Adapter() });
describe("When home renders", () => {
  it("should render a h1", () => {
    const rendernotFound = shallow(<NotFound />);
    const notFoundHeading = rendernotFound.find("h1").text();
    expect(notFoundHeading).toEqual("Nothing is here");
  });
});
