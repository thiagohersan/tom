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

  describe "GET #cubes" do
    it "returns cube/trend relative hotness" do
      a = create(:trend, name: 'a')
      b = create(:trend, name: 'b')
      create(:duel, first_trend: a, second_trend: b, winner_trend: a)
      create(:duel, first_trend: a, second_trend: b, winner_trend: b)
      create(:duel, first_trend: a, second_trend: b, winner_trend: b)

      get :cubes, id: a.id
      expect(response.body.to_i).to eq(50)

      get :cubes, id: b.id
      expect(response.body.to_i).to eq(100)
    end

    it "ignores skipped duels" do
      a = create(:trend, name: 'a')
      b = create(:trend, name: 'b')
      create(:duel, first_trend: a, second_trend: b, winner_trend: a)
      create(:duel, first_trend: a, second_trend: b, winner_trend: nil)
      create(:duel, first_trend: a, second_trend: b, winner_trend: nil)

      get :cubes, id: a.id
      expect(response.body.to_i).to eq(100)
    end
  end

  describe "GET #treemap" do
    it "returns a list of all trends with number of wins and hotness" do
      a = create(:trend, name: 'a')
      b = create(:trend, name: 'b')
      create(:duel, first_trend: a, second_trend: b, winner_trend: a)
      create(:duel, first_trend: a, second_trend: b, winner_trend: b)
      create(:duel, first_trend: a, second_trend: b, winner_trend: b)

      get :treemap
      json = JSON.parse(response.body)
      expect(json[0][0]).to eq('b')
      expect(json[0][1]).to eq('Trend-O-Meter')
      expect(json[0][2]).to eq(2)
      expect(json[0][3]).to eq(100)
      expect(json[1][0]).to eq('a')
      expect(json[0][1]).to eq('Trend-O-Meter')
      expect(json[1][2]).to eq(1)
      expect(json[1][3]).to eq(50)
    end
  end

end
