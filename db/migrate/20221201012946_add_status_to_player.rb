class AddStatusToPlayer < ActiveRecord::Migration[7.0]
  def change
    add_column :players, :online_status, :boolean
  end
end
