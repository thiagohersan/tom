module ApplicationHelper
  def self.encrypt(value)
    data = value.to_s
    data.encrypt(:symmetric,
                 algorithm: 'des-ecb',
                 password: self.get_password)
  end

  def self.decrypt(data)
    data.decrypt(:symmetric,
                 algorithm: 'des-ecb',
                 password: self.get_password)
  end

  def self.get_password
    ENV['ENCRYPTION_PASSWORD']
  end
end
