require 'rails_helper'

RSpec.describe EmailsController, type: :controller do

  describe "POST #find" do
    it "returns http success" do
      post :find
      expect(response).to have_http_status(:success)
    end
    it "stores a new user in the database"do
      user = create(:user)
      post :find, email: user.email
      expect(assigns(:result)).to eq("Sim")
    end
    it "returns false if email does not exist"do
      post :find, email: 'crazy@mail.com' 
      expect(assigns(:result)).to eq("Não")
    end
  end
end
