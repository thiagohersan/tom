require 'rails_helper'

RSpec.describe PanelController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      a = create(:trend, name: 'a')
      b = create(:trend, name: 'b')
      create(:duel, first_trend: a, second_trend: b, winner_trend: a)
      create(:duel, first_trend: a, second_trend: b, winner_trend: b)
      create(:duel, first_trend: a, second_trend: b, winner_trend: b)
      get :index
      json = JSON.parse(response.body)
      expect(json[0]['name']).to eq('b')
      expect(json[0]['count']).to eq(2)
      expect(json[1]['name']).to eq('a')
      expect(json[1]['count']).to eq(1)
    end
  end

end
