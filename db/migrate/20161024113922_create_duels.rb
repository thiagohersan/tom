class CreateDuels < ActiveRecord::Migration[5.0]
  def change
    create_table :duels do |t|
      t.references :user, foreign_key: true
      t.references :first_trend
      t.references :second_trend
      t.references :winner_trend
      t.boolean :skipped

      t.timestamps
    end
  end
end
