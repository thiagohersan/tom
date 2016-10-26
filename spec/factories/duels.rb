FactoryGirl.define do
  factory :duel do
    user { create(:user) }
    first_trend { create(:trend) }
    second_trend { create(:trend) }
    winner_trend_id nil
    skipped nil 
    trait :answered do
      first_trend { create(:trend) }
      winner_trend_id { first_trend.id }
    end
    factory :answered_duel, traits: [:answered]
  end
end
