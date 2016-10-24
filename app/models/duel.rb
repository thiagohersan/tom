class Duel < ApplicationRecord
  belongs_to :user
  belongs_to :first_trend, class_name: 'Trend'
  belongs_to :second_trend, class_name: 'Trend'
  belongs_to :winner_trend, class_name: 'Trend', optional: true
end
