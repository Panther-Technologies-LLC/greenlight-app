class GreenlightsController < ApplicationController
  def index
      greenlights = Greenlight.all
      render json: greenlights
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
