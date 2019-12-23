class ProductsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for "products"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
