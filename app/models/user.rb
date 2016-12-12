class User < ApplicationRecord
  belongs_to :industry, optional: true
  belongs_to :role, optional: true
end
