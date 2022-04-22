class AddUserIdToUserProfileTable < ActiveRecord::Migration[7.0]
  def change
    add_column :user_profiles, :user_id, :integer
  end
end
