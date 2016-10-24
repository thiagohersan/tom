require 'rails_helper'

RSpec.describe Trend, type: :model do
  it 'is not valid without a name' do
    trend = Trend.new(name: 'trend')
    expect(trend.valid?).to be false 
  end
  it 'is not valid without a description' do
    trend = Trend.new(description: 'desc')
    expect(trend.valid?).to be false 
  end
  it 'must have a name and a description' do
    trend = Trend.new(name: 'trend', description: 'desc')
    expect(trend.valid?).to be true 
  end
end
