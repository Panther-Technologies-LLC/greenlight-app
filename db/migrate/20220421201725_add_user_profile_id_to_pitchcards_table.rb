class AddUserProfileIdToPitchcardsTable < ActiveRecord::Migration[7.0]
  def change
    add_column :pitch_cards, :user_profile_id, :integer
  end
end
