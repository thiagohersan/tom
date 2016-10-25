class DuelsController < ApplicationController
  def create
    return render text: 'Missing user_id', status: 400 unless params.key?(:user_id)
    render json: buildDuels(params[:user_id])
  end

  def update
    return render text: 'Provide winner_tend_id or skipped = true to update',
      status: 400 unless params.key?(:winner_trend_id) || params.key?(:skipped) 
    return render text: 'skipped = false is pointless',
      status: 400 if inconsistentSkip(params)
    return render text: 'Do not provide a winner_trend_id if you are skipping',
      status: 400 if params.key?(:winner_trend_id) && params.key?(:skipped)
    duel = Duel.find(params[:id])
    return render text: 'Already answered',
      status: 400 if duel.answered?
  end

  def inconsistentSkip(params)
    params.key?(:skipped) && params[:skipped] == 'false'
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
