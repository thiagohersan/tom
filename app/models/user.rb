class User < ApplicationRecord
  belongs_to :industry, optional: true
  belongs_to :role, optional: true
  belongs_to :area, optional: true
end
