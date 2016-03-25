class PageController < ApplicationController
  def index
  	@teams = Team.verified
  end
end
