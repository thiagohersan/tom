Rails.application.routes.draw do
  get 'panel' => 'panel#index'

  resources :duels, only: [:create, :update]

  namespace :users do
    post '/' => :create
    patch '/' => :update
    patch '/:id' => :update, constraints: {id: /.*/ }
    patch '/:id/image' => :add_image, constraints: {id: /.*/ }
  end

  namespace :emails do
      get '/' => :index
      post '/' => :find
  end

  get 'roles' => 'roles#index'

  get 'industries' => 'industries#index'

  get 'locale' => 'locale#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
