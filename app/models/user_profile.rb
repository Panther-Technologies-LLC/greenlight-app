class UserProfile < ApplicationRecord
  belongs_to :user
  has_one :pitchcard
end
