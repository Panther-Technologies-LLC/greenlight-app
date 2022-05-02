# Preview all emails at http://localhost:3000/rails/mailers/greenlight_mailer
class GreenlightMailerPreview < ActionMailer::Preview
  def new_greenlight_email
    # Set up a temporary order for the preview

    GreenlightMailer.new_greenlight_email
  end
end
