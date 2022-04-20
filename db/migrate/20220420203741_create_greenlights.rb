class CreateGreenlights < ActiveRecord::Migration[7.0]
  def change
    create_table :greenlights do |t|
      t.integer :user_profile_id
      t.integer :pitchcard_id

      t.timestamps
    end
  end
end
