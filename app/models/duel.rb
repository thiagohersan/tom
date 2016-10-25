class MyValidator < ActiveModel::Validator
  def validate(record)
    if !!record[:winner_trend_id] && !!record[:skipped]
      record.errors[:logic] << 'Having a winner and being skipped makes no sense.'
    end
  end
end

class Duel < ApplicationRecord
  include ActiveModel::Validations
  validates_with MyValidator

  belongs_to :user
  belongs_to :first_trend, class_name: 'Trend'
  belongs_to :second_trend, class_name: 'Trend'
  belongs_to :winner_trend, class_name: 'Trend', optional: true

  def answered?
    !!winner_trend_id || !!skipped
  end
end
