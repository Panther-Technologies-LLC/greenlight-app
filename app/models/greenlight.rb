class Greenlight < ApplicationRecord
  belongs_to :user_profile
  belongs_to :pitch_card
end
