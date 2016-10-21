require 'rails_helper'

RSpec.describe IndustriesController, type: :controller do
  describe 'GET #index' do
    let!(:expected_industries) { create_list(:industry, 10).as_json.map { |e| {
      'name': e['name'],
      'id': e['id']
    }}}
    let(:existing_industries) { JSON.parse(response.body).map { |e| {
      'name': e['name'],
      'id': e['id']
    }}}

    it 'returns http success' do
      get :index
      expect(response).to have_http_status(:success)
    end
    
    it 'returns an industry list' do
      get :index
      expect(expected_industries).to eq(existing_industries)
    end
  end
end