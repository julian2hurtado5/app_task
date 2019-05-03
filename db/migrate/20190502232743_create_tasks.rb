class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.boolean :done, default: false

      t.timestamps
    end
  end
end
