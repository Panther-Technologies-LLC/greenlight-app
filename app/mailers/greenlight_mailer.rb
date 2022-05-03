class GreenlightMailer < ApplicationMailer
  def new_greenlight_email
      mail(to: "jangjade86@gmail.com", subject: "You got a new greenlight!")
  end
end
