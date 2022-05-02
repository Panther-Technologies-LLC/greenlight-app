class GreenlightsController < ApplicationController
  def index
    greenlights = current_user.user_profile.greenlights
    greenlight_list= greenlights.map do |greenlight| 
      greenlight.attributes.merge(pitchcard: greenlight.pitch_card)
    end
    render json: greenlight_list
  end

  def create
  greenlight = Greenlight.create(strong_greenlight_params)
    if greenlight.valid?
      render json: greenlight
    else
      render json: greenlight.errors, status:422
    end
  end

  def destroy
    greenlight = Greenlight.find(params[:id])
    if greenlight.destroy
      render json: greenlight
    else
      render json: greenlight.errors
    end
  end

  private
  def strong_greenlight_params
    params.require(:greenlight).permit(:user_profile_id, :pitch_card_id)
  end
end
