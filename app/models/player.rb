class Player < ActiveRecord::Base
  validates_uniqueness_of :email, message: "This email is already registered: #{email}"
  
  validates_presence_of :food, :vec, :name
  
  belongs_to :team
end
