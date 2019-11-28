class LocationsController < ApplicationController
  def new 
    user_id = session[:user_id]
    address = Location.address_by_lat_lon(params[:latitude], params[:longitude])
    Location.create(name: params[:name], 
                    description: params[:description],
		    user_id: current_user.id, # current_user is a helper method
                    longitude: params[:longitude],
                    latitude: params[:latitude],
                    address: address)
  end

  def show 
    @location = Location.last
  end

end
