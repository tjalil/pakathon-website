class Api::V1::CitiesController < ApplicationController

  def index
    cities = City.all

    render json: cities
  end

  def show
    city = City.find(params[:id])

    render json: city
  end
  
end
