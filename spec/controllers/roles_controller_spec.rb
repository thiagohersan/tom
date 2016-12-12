require 'rails_helper'

RSpec.describe RolesController, type: :controller do
  describe 'GET #index' do
    let!(:expected_roles) { create_list(:role, 10).as_json.map { |e| {
      'name': e['name'],
      'id': e['id']
    }}}
    let(:existing_roles) { JSON.parse(response.body).map { |e| {
        'name': e['name'],
        'id': e['id']
      }}}
    
    it 'returns http success' do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'returns role list' do
      get :index
      expect(existing_roles).to eq(expected_roles)
    end
  end
end
