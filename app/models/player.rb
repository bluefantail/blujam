class Player < ActiveRecord::Base
  validates_uniqueness_of :email, message: "is already registered: %{value}"
  
  validates_presence_of :food, :vec, :name
  
  belongs_to :team
end
