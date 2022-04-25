import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PitchCardShow from './PitchCardShow'
Enzyme.configure({adapter: new Adapter()})

describe("When PitchCardShow renders", () => {
  const pitchCard = {
    id:1,
    company_email: "testing@test.com",
    company_name: "hello",
    funding:"$4,000",
    industry:"Tech",
    logo:"hello",
    pitch:"test"
  }
  it("displays a pitch card", () => {
    const wrapper = shallow(<PitchCardShow pitchCard={pitchCard}/>)
    console.log(wrapper.debug())
    const test = wrapper.find("#header").text()
    expect(test).toEqual("Pitch Card Show")
  })
})
