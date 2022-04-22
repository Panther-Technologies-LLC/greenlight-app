// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import PitchCardIndex from './PitchCardIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
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
    expect(wrapper.contains(pitchCards[0].company_email)).toBeTruthy()
    expect(wrapper.contains(pitchCards[0].company_name)).toBeTruthy()
    expect(wrapper.contains(pitchCards[0].funding)).toBeTruthy()
    expect(wrapper.contains(pitchCards[0].industry)).toBeTruthy()
    expect(wrapper.contains(pitchCards[0].logo)).toBeTruthy()
    expect(wrapper.contains(pitchCards[0].pitch)).toBeTruthy()
  })
})
