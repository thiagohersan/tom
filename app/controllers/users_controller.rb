class UsersController < ApplicationController
  def create
    user = User.new(anonymous: true)
    user.save
    render json: user, status: 201 
  end

  def update
    user = User.find(params[:id])
    parameters = params.permit(:name, :email, :company,
                               :industry_id, :occupation_id)
    user.completed = true
    user.update(parameters)
  end
end
