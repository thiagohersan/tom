require 'rails_helper'

RSpec.describe Duel, type: :model do
  let(:user) { create(:anonymous_user) }
  let(:trend1) { create(:trend) }
  let(:trend2) { create(:trend) }
  it 'must have an user_id and two trends to be valid' do
    duel = Duel.new(user_id: user.id, first_trend: trend1, second_trend: trend2)
    expect(duel.valid?).to be true 
  end
  it 'fails validation without a user' do
    duel = Duel.new(first_trend: trend1, second_trend: trend2)
    expect(duel.valid?).to be false
  end
end
