require 'rails_helper'

RSpec.describe ApplicationHelper, type: :helper do

  before(:each) do
    ENV['ENCRYPTION_PASSWORD'] = "yay"
  end

  describe 'encrypt' do
    it 'encrypts data' do
      expect(ApplicationHelper::encrypt(1)).not_to eq(1)
    end
    it 'should change encrypted data with a new password' do
      data = ApplicationHelper::encrypt(1)
      ENV['ENCRYPTION_PASSWORD'] = "yay1"
      data1 = ApplicationHelper::encrypt(1)
      expect(data).not_to equal(data1)
    end
  end

  describe 'decrypt' do
    it 'should decrypt data' do
      data = "data"
      crypted = ApplicationHelper::encrypt data
      expect(ApplicationHelper::decrypt crypted).to eq(data)
    end
  end

  describe 'get_password' do
    it 'should get the encryption password' do
      expect(ApplicationHelper::get_password).to eq(ENV['ENCRYPTION_PASSWORD'])
    end
  end
end
