class UserProfile < ApplicationRecord
  belongs_to :user
  has_one :pitch_card
  has_many :greenlights
end
