class Order < ApplicationRecord

  validates :name, :address, :email, presence: true
  validate :valid_payment_type?, on: :create
  belongs_to :payment_type, optional: true
  has_many :line_items, dependent: :destroy

  def add_line_items_from(cart)
    cart.line_items.each do |item|
      item.cart_id = nil
      line_items << item
    end
  end

  private

  def valid_payment_type?
    if PaymentType.find(payment_type_id).nil?
      errors.add(:base, 'Payment type not valid')
    end
  end
end
