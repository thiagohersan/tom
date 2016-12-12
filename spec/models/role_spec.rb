require 'rails_helper'

RSpec.describe Role, type: :model do
  it 'must have a name to be valid' do
    role = Role.new
    expect(role.valid?).to be false
    expect(role.errors.messages[:name]).to eq(["can't be blank"])
  end
end
