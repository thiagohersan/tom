class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :company
      t.boolean :completed
      t.references :industry, foreign_key: true
      t.references :occupation, foreign_key: true

      t.timestamps
    end
  end
end
