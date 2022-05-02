# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
pitch_card_1 = [
    {
        company_email:"panthertech@gmail.com",
        company_name:"Panther Technologies",
        logo:"https://i.imgur.com/F4uNw2x.png",
        pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi. Porta non pulvinar neque laoreet suspendisse interdum. Arcu cursus euismod quis viverra. Mi in nulla posuere sollicitudin aliquam. Morbi tempus iaculis urna id. Massa massa ultricies mi quis hendrerit. ",
        funding: "$5000",
        industry: "Technology"
    }
]
user = User.create(
  email:"asdf@asdf.com",
  password:"123456",
  password_confirmation:"123456"
)
user_profile_1 = user.create_user_profile(
    is_investor: true,
    first_name: "Athen",
    last_name:"Park"
)

user.user_profile.create_pitch_card(
    pitch_card_1.first
)
