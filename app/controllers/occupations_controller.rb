class OccupationsController < ApplicationController
  def index
  	render json: Occupation.all
  end
end
