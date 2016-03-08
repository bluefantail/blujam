class TeamsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    begin
      ActiveRecord::Base.transaction do
        team = Team.create! name: params[:name]
      
        team.players.create! email: params[:player_1_email], vec: params[:player_1_vec] if params.include? :player_1_email
        team.players.create! email: params[:player_2_email], vec: params[:player_2_vec] if params.include? :player_2_email
        team.players.create! email: params[:player_3_email], vec: params[:player_3_vec] if params.include? :player_3_email
        team.players.create! email: params[:player_4_email], vec: params[:player_4_vec] if params.include? :player_4_email
        team.players.create! email: params[:player_5_email], vec: params[:player_5_vec] if params.include? :player_5_email
      end
    rescue ActiveRecord::RecordInvalid => e
      render json: {successs: false, message: e.message } and return
    end

    render json: { success: true } and return
  end
end
