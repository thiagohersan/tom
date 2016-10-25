FactoryGirl.define do
  factory :duel do
    user { create(:user) }
    first_trend { create(:trend) }
    second_trend { create(:trend) }
    winner_trend_id nil
    skipped false
  end
end
