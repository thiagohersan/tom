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
  it 'fails validation when winner_trend_id and skipped are defined' do
    duel = Duel.new(first_trend: trend1, second_trend: trend2, winner_trend_id: trend1.id, skipped: true)
    expect(duel.valid?).to be false
  end
  it 'tells whether it was already answered' do
    duel1 = Duel.new(first_trend: trend1, second_trend: trend2)
    expect(duel1.answered?).to be false
    duel2 = Duel.new(first_trend: trend1, second_trend: trend2, winner_trend_id: trend1.id)
    expect(duel2.answered?).to be true
    duel3 = Duel.new(first_trend: trend1, second_trend: trend2, skipped: true)
    expect(duel3.answered?).to be true
  end
end
