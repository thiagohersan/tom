class EmailsController < ApplicationController
  def index
  end

  def find
    @result = User.exists?(email: params[:email])
    render 'index'
  end
end
