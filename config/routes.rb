Rails.application.routes.draw do
  
  namespace :api do
    resources :players
      resources :games
    end
  end
end
