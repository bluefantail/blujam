class TeamsController < ApplicationController
  def create
    begin
      team = Team.create! name: params[:name]
      team.players.create!(params[:player_1_name], params[:player_1_vec]) if params.include? :player_1_name
      team.players.create!(params[:player_2_name], params[:player_2_vec]) if params.include? :player_2_name
      team.players.create!(params[:player_3_name], params[:player_3_vec]) if params.include? :player_3_name
      team.players.create!(params[:player_4_name], params[:player_4_vec]) if params.include? :player_4_name
      team.players.create!(params[:player_5_name], params[:player_5_vec]) if params.include? :player_5_name
    rescue ActiveRecord::RecordInvalid => e
      render json: { success: false, message: e.message } and return
    end
    
    render json: { success: true } and return
  end
end
