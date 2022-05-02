require 'rails_helper'

RSpec.describe "PitchCards", type: :request do
  describe "GET /index" do
    it "gets a list of pitch cards" do
      PitchCard.create(
        company_email:"facebook@gmail.com",
        company_name:"Facebook",
        logo:"https://i.imgur.com/F4uNw2x.png",
        pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi. Porta non pulvinar neque laoreet suspendisse interdum. Arcu cursus euismod quis viverra. Mi in nulla posuere sollicitudin aliquam. Morbi tempus iaculis urna id. Massa massa ultricies mi quis hendrerit. ",
        funding: "$10,000,000",
        industry: "Technology"
      )

      get '/pitch_cards'
      pitch_card = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      end
  end
  describe "POST /create" do
    it "creates a PitchCard" do
      user = User.create(
        email:"asdf@asdf.com",
        password:"123456",
        password_confirmation:"123456"
      )
      user = User.first
      user_profile = user.create_user_profile(
          is_investor: true,
          first_name: "Athen",
          last_name:"Park"
      )
      pitch_card_params = {
        pitch_card: {
          user_profile: user_profile,
          company_email:"facebook@gmail.com",
          company_name:"Facebook",
          logo:"https://i.imgur.com/F4uNw2x.png",
          pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi. Porta non pulvinar neque laoreet suspendisse interdum. Arcu cursus euismod quis viverra. Mi in nulla posuere sollicitudin aliquam. Morbi tempus iaculis urna id. Massa massa ultricies mi quis hendrerit. ",
          funding: "$10,000,000",
          industry: "Technology",
        }
      }

      sign_in user
      post "/pitch_cards", params: pitch_card_params
      expect(response).to have_http_status(200)

      pitch_card = PitchCard.first
      expect(pitch_card.company_email).to eq "facebook@gmail.com"
      expect(pitch_card.company_name).to eq "Facebook"
      expect(pitch_card.logo).to eq "https://i.imgur.com/F4uNw2x.png"
      expect(pitch_card.pitch).to eq "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi. Porta non pulvinar neque laoreet suspendisse interdum. Arcu cursus euismod quis viverra. Mi in nulla posuere sollicitudin aliquam. Morbi tempus iaculis urna id. Massa massa ultricies mi quis hendrerit. "
      expect(pitch_card.funding).to eq "$10,000,000"
      expect(pitch_card.industry).to eq "Technology"
    end
  end
  describe "UPDATE /patch" do
    it "updates a pitch card" do
      user = User.create(
        email:"asdf@asdf.com",
        password:"123456",
        password_confirmation:"123456"
      )
      user = User.first
      user_profile = UserProfile.create(
        is_investor: true,
        first_name: "Mark",
        last_name:"whatever"
      )
      PitchCard.create(
        user_profile: user_profile,
        company_email:"facebook@gmail.com",
        company_name:"Facebook",
        logo:"https://i.imgur.com/F4uNw2x.png",
        pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi. Porta non pulvinar neque laoreet suspendisse interdum. Arcu cursus euismod quis viverra. Mi in nulla posuere sollicitudin aliquam. Morbi tempus iaculis urna id. Massa massa ultricies mi quis hendrerit. ",
        funding: "$10,000,000",
        industry: "Technology"
      )
      pitch_card_facebook = PitchCard.first

      pitch_card_params = {
        pitch_card: {
          company_email:"facebook@gmail.com",
          company_name:"Facebook",
          logo:"https://i.imgur.com/F4uNw2x.png",
          pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi. Porta non pulvinar neque laoreet suspendisse interdum. Arcu cursus euismod quis viverra. Mi in nulla posuere sollicitudin aliquam. Morbi tempus iaculis urna id. Massa massa ultricies mi quis hendrerit. ",
          funding: "$15,000,000",
          industry: "Technology"
        }
      }

      sign_in user
      patch "/pitch_cards/#{pitch_card_facebook.id}", params: pitch_card_params
      pitch_card_mystery = PitchCard.find(pitch_card_facebook.id)
      expect(response).to have_http_status(200)
      expect(pitch_card_mystery.funding).to eq "$15,000,000"
    end
  end
  describe "DELETE /destroy" do
    it "deletes a pitch card" do
      user_profile = UserProfile.create(
        is_investor: true,
        first_name: "Mark",
        last_name:"whatever"
      )
      PitchCard.create(
        user_profile: user_profile,
        company_email:"facebook@gmail.com",
        company_name:"Facebook",
        logo:"https://i.imgur.com/F4uNw2x.png",
        pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi. Porta non pulvinar neque laoreet suspendisse interdum. Arcu cursus euismod quis viverra. Mi in nulla posuere sollicitudin aliquam. Morbi tempus iaculis urna id. Massa massa ultricies mi quis hendrerit. ",
        funding: "$10,000,000",
        industry: "Technology"
      )
      pitch_card_facebook = PitchCard.first
      delete "/pitch_cards/#{pitch_card_facebook.id}"
      expect(response).to have_http_status(200)
      pitch_cards = PitchCard.all
      expect(pitch_cards).to be_empty
    end
  end
end
