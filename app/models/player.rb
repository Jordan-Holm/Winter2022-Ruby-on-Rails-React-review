class Player < ApplicationRecord

    validates :username, :age, :console, presence: true
end
