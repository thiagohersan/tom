class UsersController < ApplicationController
  def create
    user = User.new(anonymous: true)
    user.save
    
    render json: {
      id: ApplicationHelper::encrypt(user['id']),
      anonymous: true
    }, status: 201 
  end

  def update
    user = User.find(ApplicationHelper::decrypt(params[:id]))
    parameters = params.permit(:name, :email, :company,
                               :industry_id, :occupation_id)
    user.completed = true
    user.update(parameters)
  end
end
