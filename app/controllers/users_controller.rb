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
                               :industry_id, :role_id)
    user.completed = true
    user.update(parameters)
  end

  def add_image
    user = User.find(ApplicationHelper::decrypt(params[:id]))

    user_images_dir = ENV['USER_IMAGES_FOLDER']
    FileUtils.mkdir_p(user_images_dir) unless File.exists?(user_images_dir)
    user_image_path = File.join(user_images_dir, "#{user.id}.jpg")

    File.open(user_image_path, 'wb') do|f|
      f.write(Base64.decode64(params[:image_base64]))
    end
    user.update({:image => user_image_path})
  end
end
