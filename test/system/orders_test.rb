require "application_system_test_case"

class OrdersTest < ApplicationSystemTestCase
  # test "visiting the index" do
  #   visit orders_url
  #
  #   assert_selector "h1", text: "Order"
  # end
  test "checking routint number" do
    visit store_index_url

    first('.catalog li').click_on "Add"

    click_on 'Checkout'

    fill_in 'order_name', with: 'Dave Thomas'
    fill_in 'order_address', with: '123 Main Street'
    fill_in 'order_email', with: 'dave@example.com'

    assert_selector "#order_routing_number"
  end
end
