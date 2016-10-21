require 'rails_helper'

RSpec.describe OccupationsController, type: :controller do
  describe 'GET #index' do
    let!(:expected_occupations) { create_list(:occupation, 10).as_json.map { |e| {
      'name': e['name'],
      'id': e['id']
    }}}
    let(:existing_occupations) { JSON.parse(response.body).map { |e| {
        'name': e['name'],
        'id': e['id']
      }}}
    
    it 'returns http success' do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'returns occupation list' do
      get :index
      expect(existing_occupations).to eq(expected_occupations)
    end
  end
end
