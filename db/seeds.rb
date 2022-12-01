Player.delete_all

5.times do
    console = [ 
        "X-box", 
        "Playstation",
        "Switch",
        "PC"
    ]
    @player = Player.create(
        username: Faker::Games::LeagueOfLegends.champion,
        age: rand(18...65),
        console: console.sample,
        online_status: [true, false].sample
    )
end