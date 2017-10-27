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
    parameters = params.permit(:id, :name, :email, :company,
                               :industry_id, :role_id)
    user = User.find(ApplicationHelper::decrypt(parameters[:id]))
    user.completed = true
    parameters.delete(:id)
    user.update(parameters)
  end

  def add_image
    parameters = params.permit(:id, :image_base64)
    user = User.find(ApplicationHelper::decrypt(parameters[:id]))

    user_images_dir = ENV['USER_IMAGES_FOLDER']
    FileUtils.mkdir_p(user_images_dir) unless File.exists?(user_images_dir)
    user_image_path = File.join(user_images_dir, "#{user.id}.jpg")

    File.open(user_image_path, 'wb') do|f|
      f.write(Base64.decode64(parameters[:image_base64]))
    end
    user.update({:image => user_image_path})
  end
end
