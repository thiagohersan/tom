class UsersController < ApplicationController
  def create
    user = User.new(anonymous: true)
    user.save
    render json: user, status: 201 
  end

  def update
  end
end
