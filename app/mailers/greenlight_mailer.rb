class GreenlightMailer < ApplicationMailer
  def new_greenlight_email
    @greenlight_email = params[:greenlight_email]
      mail(to: "panthertechllc@gmail.com", subject: "You got a new greenlight!")
  end
end
