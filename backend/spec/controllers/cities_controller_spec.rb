require 'rails_helper'

RSpec.describe CitiesController, :type => :controller do

  describe "GET name:string" do
    it "returns http success" do
      get :name:string
      expect(response).to be_success
    end
  end

end
