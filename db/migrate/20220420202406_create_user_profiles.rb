class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.boolean :is_investor
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
  end
end
