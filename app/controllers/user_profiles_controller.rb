class UserProfilesController < ApplicationController
    def index
        user_profiles = UserProfile.all
        render json: user_profiles
    end

    def show
      user_profile = UserProfile.find(params[:id])
      render json: user_profile
    end

    def create
    user_profile = UserProfile.create(strong_user_profile_params)
      if user_profile.valid?
        render json: user_profile
      else
        render json: user_profile.errors, status:422
      end
    end

    def update
      user_profile = UserProfile.find(params[:id])
      user_profile.update(strong_user_profile_params)
      if user_profile.valid?
        render json: user_profile
      else
        render json: user_profile.errors, status:422
      end
    end

    def destroy
      user_profile = UserProfile.find(params[:id])
      if user_profile.destroy
        render json: user_profile
      else
        render json: user_profile.errors
      end
    end

    private
    def strong_user_profile_params
      params.require(:user_profile).permit(:is_investor, :first_name, :last_name, :user_id)
    end
end
