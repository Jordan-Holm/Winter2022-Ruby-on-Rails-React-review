class Api::PlayersController < ApplicationController

  before_action :set_player, only: [:show, :update, :destroy]

  def index
    render json: Player.all
  end

  def show
    render json: @player
  end

  def create

    @player = Player.new(player_params)
    if @player.save 
      render json: @player
    else
      render json: { errors: @player.errors }, status: :unprocessable_entity
    end

  end

  def update

    if @player.update(player_params)
      render json: @player
    else
      render json: { errors: @player.errors }
    end

  end

  def destroy
    @player.destroy 
    render json: { message: "Player deleted"}
  end

  private

    def set_player
      @player = Player.find(params[:id])
    end

    def player_params
      params.require(:player).permit(:username, :age, :console, :online_status)
    end


end
