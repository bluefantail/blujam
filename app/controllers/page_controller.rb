class PageController < ApplicationController
  def index
  	@teams = Team.all
  end
end
