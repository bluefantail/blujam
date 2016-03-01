class Team < ActiveRecord::Base
  validates_uniqueness_of :name
  
  has_many :players
end
