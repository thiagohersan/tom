class PanelController < ApplicationController
  def index
    hash = Duel.joins(:winner_trend).group(:name, :description).order('count_all desc').count
    list = []
    hash.keys.each do |k|
      list.push({ :name => k[0], :description => k[1], :count => hash[k] })
    end
    render json: list.to_json
  end

  def cubes
    trends_by_win_frequency = Duel.group(:winner_trend_id).count.reject{|k, v| k.nil?}
    trend_win_frequency = trends_by_win_frequency[params['id'].to_i]
    most_voted_votes = trends_by_win_frequency.values.max
    trend_hotness = (trend_win_frequency.to_f / most_voted_votes) * 100

    render json: { :hotness => trend_hotness.to_i }
  end
end
