class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :description
      t.float :longitude
      t.float :latitude
      t.integer :user_id

      t.timestamps
    end
  end
end
