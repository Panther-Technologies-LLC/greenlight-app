import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PitchCardNew from './PitchCardNew'
Enzyme.configure({adapter: new Adapter()})

describe("When PitchCardNew renders", () => {
  let newPitchCard
  beforeEach(() => {
    newPitchCard = shallow(<PitchCardNew />)
  })
    it("displays a heading", () => {
        const pitchCardNewHeader = newPitchCard.find("h2")
        expect(pitchCardNewHeader.text()).toEqual("Create a PitchCard!")
    })
    it("displays a form", () => {
        const newForm = newPitchCard.find("Form")
        expect(newForm.length).toEqual(1)
    })
    it("displays a company name input", () => {
        const pitchCardNewNameInput = newPitchCard.find("[name='company_name']")
        expect(pitchCardNewNameInput.length).toEqual(1)
    })
    it("displays a company email input", () => {
        const pitchCardNewEmailInput = newPitchCard.find("[name='company_email']")
        expect(pitchCardNewEmailInput.length).toEqual(1)
    })
    it("displays a logo", () => {
        const pitchCardNewLogo = newPitchCard.find("[name='logo']")
        expect(pitchCardNewLogo.length).toEqual(1)
    })
    it("displays a funding", () => {
        const pitchCardNewFunding = newPitchCard.find("[name='funding']")
        expect(pitchCardNewFunding.length).toEqual(1)
    })
    it("displays a pitch", () => {
        const pitchCardNewPitch = newPitchCard.find("[name='pitch']")
        expect(pitchCardNewPitch.length).toEqual(1)
    })
    it("displays an industry", () => {
        const pitchCardNewIndustry = newPitchCard.find("[name='industry']")
        expect(pitchCardNewIndustry.length).toEqual(1)
    })
})
