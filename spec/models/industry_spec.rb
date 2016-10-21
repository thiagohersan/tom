require 'rails_helper'

RSpec.describe Industry, type: :model do
  it 'must have a name to be valid' do
    industry = Industry.new
    expect(industry.valid?).to be false
    expect(industry.errors.messages[:name]).to eq(["can't be blank"])
  end
end
