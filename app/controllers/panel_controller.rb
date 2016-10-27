class PanelController < ApplicationController
  def index
    hash = Duel.joins(:winner_trend).group(:name, :description).count
    list = []
    hash.keys.each do |k|
      list.push({ :name => k[0], :description => k[1], :count => hash[k] })
    end
    render json: list.to_json
  end
end
