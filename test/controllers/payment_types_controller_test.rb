require 'test_helper'

class PaymentTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @payment_type = payment_types(:one)
  end

  test "should get index" do
    get payment_types_url
    assert_response :success
  end

  test "should get new" do
    get new_payment_type_url
    assert_response :success
  end

  test "should show payment_type" do
    get payment_type_url(@payment_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_payment_type_url(@payment_type)
    assert_response :success
  end

  test "should update payment_type" do
    patch payment_type_url(@payment_type), params: { payment_type: { kind: @payment_type.kind } }
    assert_response :success
  end

  test "should destroy payment_type" do
    assert_difference('PaymentType.count', -1) do
      delete payment_type_url(@payment_type)
    end

    assert_redirected_to payment_types_url
  end
end
