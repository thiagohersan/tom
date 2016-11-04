class EmailsController < ApplicationController
  def index
  end

  def find
    @result = (User.exists?(email: params[:email])) ? "Sim" : "Não"
    render 'index'
  end
end
