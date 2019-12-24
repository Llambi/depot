class PaymentType < ApplicationRecord
  validates :kind, uniqueness: true, presence: true
  has_many :orders, dependent: :destroy

  def to_str
    kind
  end
end
