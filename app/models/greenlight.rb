class Greenlight < ApplicationRecord
  belongs_to :userprofile
  belongs_to :pitchcard
end
