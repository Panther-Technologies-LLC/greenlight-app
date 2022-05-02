Rails.application.routes.draw do
  resources :greenlights
  resources :pitch_cards
  resources :user_profiles
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  get '/contact', :to => 'greenlights#create_email'
  root 'home#index'
end
