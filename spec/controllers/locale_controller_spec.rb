require 'rails_helper'

RSpec.describe LocaleController, type: :controller do

  describe 'GET #index' do
    context 'LANG environment variable is set' do
      before(:each) do
        ENV['LANG'] = 'pt'
      end

      it 'returns http success' do
        get :index
        expect(response).to have_http_status(:success)
      end
      it 'returns some locale' do
        get :index
        expect(JSON.parse(response.body)['locale']).not_to eq(nil) 
      end
      it 'return a locale from environment variable' do
        get :index
        expect(JSON.parse(response.body)['locale']).to eq('pt')
      end
    end

    context 'LANG environment variable is not set' do
      before(:all) do
        ENV['LANG'] = nil 
      end
      it 'returns the default locale' do
        get :index
        expect(JSON.parse(response.body)['locale']).to eq('en') 
      end
    end
  end

  describe '#locale' do
    context 'LANG environment variable is set' do
      before(:all) do
        ENV['LANG'] = 'pt_BR.UTF-8'
      end

      it 'return the first two characters of LANG environment variable' do
        expect(LocaleController::locale).to eq('pt')
      end
    end

    context 'LANG environment variable is shorter than two characters' do
      before(:all) do
        ENV['LANG'] = 'a'
      end

      it 'returns default locale' do
        expect(LocaleController::locale).to eq('en')
      end
    end

    context 'LANG environment variable is not set' do
      before(:all) do
        ENV['LANG'] = nil
      end

      it 'returns default locale' do
        expect(LocaleController::locale).to eq('en')
      end
    end
  end
end
