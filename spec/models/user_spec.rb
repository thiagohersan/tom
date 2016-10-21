require 'rails_helper'

RSpec.describe User, type: :model do
  it 'must be valid without data' do
    user = User.new
    expect(user.valid?).to be true
  end
end
