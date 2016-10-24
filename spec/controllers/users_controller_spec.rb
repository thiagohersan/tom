require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "POST #create" do
    let(:user) { JSON.parse(response.body) }
    it "returns http success" do
      post :create
      expect(response).to have_http_status(:success)
    end
    it "stores a new user in the database"do
      expect {
        post :create
      }.to change(User, :count)
    end
    it "returns an user with an id" do
      post :create
      expect(user['id']).to be_an(Integer)
    end
    it "returns an anonymous user" do
      post :create
      expect(user['anonymous']).to eq(true)
    end
  end

  describe "PATCH #update" do
    it "is pending"
  end

end
