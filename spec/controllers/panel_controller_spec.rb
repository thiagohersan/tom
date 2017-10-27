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

end
