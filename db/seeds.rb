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
    # {
    #     company_email:"chinchilla_company@gmail.com",
    #     company_name:"The Chinchilla Company",
    #     logo:"https://scalebranding.com/wp-content/uploads/2021/09/chinchilla.jpg",
    #     pitch: "We are the Chinchilla company and we like Chinchillas.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi.",
    #     funding: "$100000",
    #     industry: "Pet"
    # },
    # {
    #     company_email:"Ichiran_business@gmail.com",
    #     company_name:"Ichiran Ramen",
    #     logo:"https://images.getbento.com/4SGlQCmcTvubLzGX4hsG_ichiran_logo.png",
    #     pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi.",
    #     funding: "$200000000",
    #     industry: "Food"
    # },
    # {
    #     company_email:"mergegames@gmail.com",
    #     company_name:"Merge Games",
    #     logo:"https://images.squarespace-cdn.com/content/v1/5b113545ee17595a184efefb/1527855250543-Z8W91B391XN82BFGF0XA/Merge-Logo_White.png?format=1500w",
    #     pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi.",
    #     funding: "$1000000",
    #     industry: "Video Games"
    # },
    # {
    #     company_email:"mozilla@gmail.com",
    #     company_name:"Mozilla Firefox",
    #     logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
    #     pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi.",
    #     funding: "$2000000",
    #     industry: "Technology"
    # },
    # {
    #     company_email:"kazuhiramiller@gmail.com",
    #     company_name:"Miller's Chemical Burgers",
    #     logo:"https://preview.redd.it/zzuuvdgsuzg31.gif?format=png8&s=504abf6a45041c3f1a56f014db4a0dadc790de33",
    #     pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi.",
    #     funding: "$5000000",
    #     industry: "Food"
    # }
]
user = User.find 1
user_profile_1 = user.create_user_profile(
    is_investor: true,
    first_name: "Athen",
    last_name:"Park"
)

user.user_profile.create_pitch_card(
    pitch_card_1.first
)
