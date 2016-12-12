class RenameOccupationsToRoles < ActiveRecord::Migration[5.0]
  def change
    rename_table :occupations, :roles
  end
end
