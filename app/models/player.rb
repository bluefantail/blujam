class Player < ActiveRecord::Base
  validates_uniqueness_of :email
  
  belongs_to :team
end
