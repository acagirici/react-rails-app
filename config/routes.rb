Rails.application.routes.draw do
  get 'user/index'
  root 'currencies#index'
  post 'search', to: 'currencies#search'
  post 'calculate', to: 'currencies#calculate'
end
