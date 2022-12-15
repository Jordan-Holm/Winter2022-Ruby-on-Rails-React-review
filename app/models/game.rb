class Game < ApplicationRecord
    belongs_to :player, class_name: "player", foreign_key: "player_id"

    validates :game_title, :ranked, :last_played, presence: true
end