class CreatePaymentTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :payment_types do |t|
      t.string :kind

      t.timestamps
    end
  end
end
