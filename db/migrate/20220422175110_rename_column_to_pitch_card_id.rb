class RenameColumnToPitchCardId < ActiveRecord::Migration[7.0]
  def change
    rename_column :greenlights, :pitchcard_id, :pitch_card_id
  end
end
