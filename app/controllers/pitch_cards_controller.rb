class PitchCardsController < ApplicationController
    def index
        pitch_cards = PitchCard.all
        render json: pitch_cards
    end

    def show
      pitch_card = PitchCard.find(params[:id])
      render json: pitch_card
    end

    def create
    pitch_card = PitchCard.create({**strong_pitch_card_params, user_profile_id: current_user.user_profile.id })
    p pitch_card
      if pitch_card.valid?
        render json: pitch_card
      else
        render json: pitch_card.errors, status:422
      end
    end

    def update
      pitch_card = PitchCard.find(params[:id])
      pitch_card.update({**strong_pitch_card_params, user_profile_id: current_user.user_profile.id})
      debugger
      if pitch_card.valid?
        render json: pitch_card
      else
        render json: pitch_card.errors, status:422
      end
    end

    def destroy
      pitch_card = PitchCard.find(params[:id])
      if pitch_card.destroy
        render json: pitch_card
      else
        render json: pitch_card.errors
      end
    end

    private
    def strong_pitch_card_params
      params.require(:pitch_card).permit(:company_email, :company_name, :logo, :pitch, :funding, :industry)
    end
end
