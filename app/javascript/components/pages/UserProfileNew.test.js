import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UserProfileNew from './UserProfileNew'
Enzyme.configure({adapter: new Adapter()})

describe("When UserProfileNew renders", () => {
  let newUserProfile
  beforeEach(() => {
    newUserProfile = shallow(<UserProfileNew />)
  })
    it("displays a heading", () => {
        const userProfileNewHeader = newUserProfile.find("h2")
        expect(userProfileNewHeader.text()).toEqual("User Profile")
    })
    it("displays a form", () => {
        const newForm = newUserProfile.find("Form")
        expect(newForm.length).toEqual(1)
    })
    it("displays a is investor input", () => {
        const userProfileInvestorInput = newUserProfile.find("[name='is_investor']")
        expect(userProfileInvestorInput.length).toEqual(1)
    })
    it("displays a first name input", () => {
        const userProfileFirstNameInput = newUserProfile.find("[name='first_name']")
        expect(userProfileFirstNameInput.length).toEqual(1)
    })
    it("displays a last name input", () => {
        const userProfileLastNameInput = newUserProfile.find("[name='last_name']")
        expect(userProfileLastNameInput.length).toEqual(1)
    })
})
