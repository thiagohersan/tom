require 'rails_helper'
 
RSpec.describe IndustriesController, type: :controller do

  describe "GET #index" do

    let!(:industries) { create_list(:industry, 10) }
    let(:industry) { JSON.parse(response.body)[0] }

    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
    it "returns an industry list" do
      get :index
      expect(industry['name']).to eq(industries[0][:name]) 
    end

  end

end
