class Location < ApplicationRecord

  def self.get_user_locations(user_id)
    @user_locations = self.where(user_id: user_id)
  end

  def self.address_by_lat_lon(lat, lon)
    @address = Geocoder.search([lat, lon]).first.address
  end

end
