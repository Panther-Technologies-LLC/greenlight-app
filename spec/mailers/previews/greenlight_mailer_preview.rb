# Preview all emails at http://localhost:3000/rails/mailers/greenlight_mailer
class GreenlightMailerPreview < ActionMailer::Preview
  def new_greenlight_email
    # Set up a temporary order for the preview
    #greenlight_email = Greenlight.new(investor_email: "joe@gmail.com", message: "I want to place an order!")

    # GreenlightMailer.with(greenlight: greenlight_email).new_greenlight_email
    GreenlightMailer.new_greenlight_email
  end
end
