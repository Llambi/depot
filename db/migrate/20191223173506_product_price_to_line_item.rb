class ProductPriceToLineItem < ActiveRecord::Migration[5.1]
  def up
    LineItem.all.each do |line_item|
      line_item.price = Product.find(line_item.product_id).price
      line_item.save
    end
  end
end
