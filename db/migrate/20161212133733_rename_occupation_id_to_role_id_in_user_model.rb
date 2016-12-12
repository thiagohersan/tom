class RenameOccupationIdToRoleIdInUserModel < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :occupation_id, :role_id
  end
end
