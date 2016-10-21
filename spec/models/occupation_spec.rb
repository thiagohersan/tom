require 'rails_helper'

RSpec.describe Occupation, type: :model do
  it 'must have a name to be valid' do
    occupation = Occupation.new
    expect(occupation.valid?).to be false
    expect(occupation.errors.messages[:name]).to eq(["can't be blank"])
  end
end
