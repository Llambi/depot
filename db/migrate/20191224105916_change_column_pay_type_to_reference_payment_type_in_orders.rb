class ChangeColumnPayTypeToReferencePaymentTypeInOrders < ActiveRecord::Migration[5.1]
  def change
    remove_column :orders, :pay_type, :integer
    add_column :orders, :payment_type_id, :integer, references: :payment_type
  end
end
