class UsersController < ApplicationController
  def create
    user = User.new(anonymous: true)
    user.save
    render json: user 
  end

  def update
  end
end
