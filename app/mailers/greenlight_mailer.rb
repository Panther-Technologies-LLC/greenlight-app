class GreenlightMailer < ApplicationMailer
  def new_greenlight_email
      @greenlight = params[:order]
      mail(to: <ADMIN_EMAIL>, subject: "You got a new greenlight!")
  end
end
