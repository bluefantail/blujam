class TeamsController < ApplicationController
  def create
    begin
      team = Team.create! name: params[:name]
    rescue ActiveRecord::RecordInvalid
      render json: { success: false, name_failed: true } and return
    end
    
    begin
      team.players.create! email: params[:player_1_email], vec: params[:player_1_vec] if params.include? :player_1_email
    rescue ActiveRecord::RecordInvalid
      render json: { success: false, player_1_failed: true } and return
    end
    
    begin
      team.players.create! email: params[:player_2_email], vec: params[:player_2_vec] if params.include? :player_2_email
    rescue ActiveRecord::RecordInvalid
      render json: { success: false, player_2_failed: true } and return
    end
    
    begin
      team.players.create! email: params[:player_3_email], vec: params[:player_3_vec] if params.include? :player_3_email
    rescue ActiveRecord::RecordInvalid
      render json: { success: false, player_3_failed: true } and return
    end
    
    begin
      team.players.create! email: params[:player_4_email], vec: params[:player_4_vec] if params.include? :player_4_email
    rescue ActiveRecord::RecordInvalid
      render json: { success: false, player_4_failed: true } and return
    end
    
    begin
      team.players.create! email: params[:player_5_email], vec: params[:player_5_vec] if params.include? :player_5_email
    rescue ActiveRecord::RecordInvalid
      render json: { success: false, player_5_failed: true } and return
    end

    render json: { success: true } and return
  end
end
