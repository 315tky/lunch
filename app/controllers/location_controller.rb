class LocationController < ApplicationController
  def create
    render :json => { status: 'success' }
  end
end
