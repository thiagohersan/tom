require 'rails_helper'

RSpec.describe DuelsController, type: :controller do

  describe 'POST #create' do
    let!(:user) { create(:user) }
    let!(:trends) { create_list(:trend, 10) }
    let(:json) { JSON.parse(response.body) }
    let(:duels_count) { trends.length / 2 }
    it 'returns http success' do
      post :create, { user_id: user.id }
      expect(response).to have_http_status(:success)
    end
    it 'fails withou an user id' do
      post :create
      expect(response).to have_http_status(400)
    end
    it 'creates a set of duels' do
      expect {
        post :create, { user_id: user.id }
      }.to change(Duel, :count).by(duels_count)
    end
    it 'returns a list of duels' do
      post :create, { user_id: user.id }
      expect(json.length).to eq(duels_count)
    end
    it 'returns trends inside the duels' do
      post :create, { user_id: user.id }
      expect(json[0].key?('first_trend')).to eq(true)
      expect(json[0].key?('second_trend')).to eq(true)
    end
    it 'returns trends in a random order' do
      post :create, { user_id: user.id }
      duels1 = JSON.parse(response.body)
      post :create, { user_id: user.id }
      duels2 = JSON.parse(response.body)
      expect(
        duels1[0]['first_trend']['id'] !=
          duels2[0]['first_trend']['id'] ||
        duels1[0]['second_trend']['id'] !=
          duels2[0]['second_trend']['id'] ||
        duels1[1]['first_trend']['id'] !=
          duels2[1]['first_trend']['id'] ||
        duels1[1]['second_trend']['id'] !=
          duels2[1]['second_trend']['id']).to eq(true)
    end
  end

  describe "PATCH #update" do
    it "is pending"
  end

end
