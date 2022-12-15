class Api::GamesController < ApplicationController

    before_action :set_parent
    before_action :set_game, only: [:show, :update, :destroy]

    def index
        render json: @player.games
    end

    def show
        render json: @game
    end

    def create
        @game = @player.games.new(game_params)
        if @game.save
            render json: @game
        else
            render json: {errors: @game.error}, status: :unprocessable_entity
        end
    end

    def destroy
        @game.destroy
        render json: { message: 'game deleted'}
    end 

    private

        def game_params
            params.required(:game).permit(:game_title, :ranked, :last_played, :player_id)
        end

        def set_game 
            @game = @player.games.find(params[:id])
        end

        def set_parent
            @player = Player.find(params[:player_id])
        end
end
