class CreatePitchCards < ActiveRecord::Migration[7.0]
  def change
    create_table :pitch_cards do |t|
      t.string :company_email
      t.string :company_name
      t.text :logo
      t.text :pitch
      t.string :funding
      t.string :industry

      t.timestamps
    end
  end
end
