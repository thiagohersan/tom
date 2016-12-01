class LocaleController < ApplicationController
  def self.locale
    lang = ENV['LANG']
    lang && lang.size >= 2 ? lang[0,2] : 'en' 
  end
  def index
    render json: { locale: LocaleController::locale }
  end
end
