class Admin::TeamsController < ApplicationController
  before_action :authenticate_admin!
  
  def index
    @teams = Team.all
  end
  
  def show
    @team = Team.find(params[:id])
  end
  
  def destroy
    @team = Team.find(params[:id])
    @team.destroy
    
    redirect_to admin_teams_url
  end
end
