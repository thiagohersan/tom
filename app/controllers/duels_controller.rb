class DuelsController < ApplicationController
  def create
    return render status: 400 unless params.key?(:user_id)
    render json: buildDuels(params[:user_id])
  end

  def update
  end

  def duelToJson(duel)
    return duel.as_json(only: [:id, :created_at, :updated_at],
                        include: [:first_trend, :second_trend])
  end

  def buildDuels(user_id)
    duels = []
    Trend.all.shuffle.each_slice(2) do |firstTrend, secondTrend|
      duel = Duel.new(user_id: params[:user_id], 
               first_trend: firstTrend,
               second_trend: secondTrend)
      duel.save
      duels.push(duelToJson(duel))
    end
    return duels
  end
end
