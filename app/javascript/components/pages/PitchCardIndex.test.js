import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PitchCardIndex from './PitchCardIndex'
Enzyme.configure({adapter: new Adapter()})

describe("When PitchCardIndex renders", () => {
  const pitchCards = [{
    id:1,
    company_email: "testing@test.com",
    company_name: "hello",
    funding:"$4,000",
    industry:"Tech",
    logo:"hello",
    pitch:"test"
  }]
  it("displays a heading", () => {
    const wrapper = shallow(<PitchCardIndex pitchCards={pitchCards}/>)
    const test = wrapper.find("#header").text()
    expect(test).toEqual("Pitch Cards")
    expect(wrapper.contains(pitchCards[0].company_name)).toBeTruthy()
    expect(wrapper.contains(pitchCards[0].funding)).toBeTruthy()
    expect(wrapper.contains(pitchCards[0].industry)).toBeTruthy()
    expect(wrapper.contains(pitchCards[0].logo)).toBeTruthy()
    expect(wrapper.contains(pitchCards[0].pitch)).toBeTruthy()
  })
})
