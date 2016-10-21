class User < ApplicationRecord
  belongs_to :industry, optional: true
  belongs_to :occupation, optional: true
end
