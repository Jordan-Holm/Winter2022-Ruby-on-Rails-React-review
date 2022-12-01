Rails.application.routes.draw do
  
  namespace :api do
    resources :players
  end
end
