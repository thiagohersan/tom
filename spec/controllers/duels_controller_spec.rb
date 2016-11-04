require 'rails_helper'

RSpec.describe DuelsController, type: :controller do

  describe 'POST #create' do
    let!(:user) { create(:user) }
    let!(:trends) { create_list(:trend, 10) }
    let(:json) { JSON.parse(response.body) }
    let(:duels_count) { trends.length / 2 }
    it 'returns http success' do
      post :create, { user_id: ApplicationHelper::encrypt(user.id) }
      expect(response).to have_http_status(:success)
    end
    it 'fails without an user id' do
      post :create
      expect(response).to have_http_status(403)
    end
    it 'fails with an invalid user id' do
      post :create, user_id: 1
      expect(response).to have_http_status(403)
    end
    it 'creates a set of duels' do
      expect {
        post :create, { user_id: ApplicationHelper::encrypt(user.id) }
      }.to change(Duel, :count).by(duels_count)
    end
    it 'returns a list of duels' do
      post :create, { user_id: ApplicationHelper::encrypt(user.id) }
      expect(json.length).to eq(duels_count)
    end
    it 'returns trends inside the duels' do
      post :create, { user_id: ApplicationHelper::encrypt(user.id) }
      expect(json[0].key?('first_trend')).to eq(true)
      expect(json[0].key?('second_trend')).to eq(true)
    end
    it 'returns trends in a random order' do
      user2 = create(:user)
      user2.id = ApplicationHelper::encrypt(user2.id)
      post :create, { user_id: ApplicationHelper::encrypt(user.id) }
      duels1 = JSON.parse(response.body)
      post :create, { user_id: ApplicationHelper::encrypt(user2.id) }
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
    context 'user leaves application' do
      it 'returns unanswered duels' do
        duel = create(:duel)
        post :create, { user_id: ApplicationHelper::encrypt(duel.user_id) }
        duel_list = JSON.parse(response.body)
        expect(duel_list.length).to eq(1)
        expect(duel_list[0]['id']).to eq(duel.id)
        expect(duel_list[0].key?('first_trend')).to eq(true)
      end
    end
  end

  describe "PATCH #update" do
    it "fails when winner_trend_id or skipped = true is not provided" do
      patch :update, id: 3
      expect(response).to have_http_status(400)
      expect(response.body).to eq('Provide winner_tend_id or skipped = true to update')
    end
    it "fails when skipped = false because it is pointless" do
      patch :update, id: 3, skipped: false
      expect(response).to have_http_status(400)
      expect(response.body).to eq('skipped = false is pointless')
    end
    it 'fails when skipped = true and winner_trend_id is provided' do
      patch :update, id: 3, skipped: true, winner_trend_id: 15
      expect(response).to have_http_status(400)
      expect(response.body).to eq('Do not provide a winner_trend_id if you are skipping')
    end
    it 'fails if duel does not belong to user' do
      user = create(:user)
      duel = create(:duel)
      patch :update, id: duel.id, user_id: ApplicationHelper::encrypt(user.id), winner_trend_id: duel.first_trend.id
      expect(response).to have_http_status(403)
      expect(response.body).to eq('This duel does not belong to the given user')
    end
    it 'fails if used_id is not provided' do
      duel = create(:duel)
      patch :update, id: duel.id, winner_trend_id: duel.first_trend.id
      expect(response).to have_http_status(403)
    end
    it 'fails if used_id is invalid' do
      duel = create(:duel)
      patch :update, id: duel.id, user_id: 1, winner_trend_id: duel.first_trend.id
      expect(response).to have_http_status(403)
    end
    it 'fails when a duel was already patched' do
      duel = create(:answered_duel)
      patch :update, id: duel.id, user_id: ApplicationHelper::encrypt(duel.user.id), winner_trend_id: duel.winner_trend_id 
      expect(response).to have_http_status(400)
      expect(response.body).to eq('Already answered')
    end
    it 'fails when a winner is diferent from the two options' do
      duel1 = create(:duel)
      duel2 = create(:duel)
      patch :update, id: duel2.id, user_id: ApplicationHelper::encrypt(duel2.user.id), winner_trend_id: duel1.first_trend.id
      expect(response).to have_http_status(400)
    end
   it 'updates a duel' do
      duel = create(:duel)
      patch :update, id: duel.id, user_id: ApplicationHelper::encrypt(duel.user.id), winner_trend_id: duel.first_trend.id
      expect(response).to have_http_status(204)
      expect(Duel.find(duel.id).winner_trend_id).to eq(duel.first_trend.id)
    end
  end
end
