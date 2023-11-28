import "./tet.scss"

export default function Testtimo() {
  const data = [
    {
      id: 1,
      name: "Aman kishor",
      title: "Web Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/twitter.png",
      desc:
        "HI this is aman kishor greeting how are you and how are you doing these days",
    },
    {
      id: 2,
      name: "sachin",
      title: "App Devloper",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/twitter.png",
      desc:
        "I  am a  app devloper have devloped  and have good knowledge of all the liabraies of it",
      featured: true,
    },
    {
      id: 3,
      name: "sekhu",
      title: "ui_ux Designer",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/twitter.png",
      desc:
        " Hi I am  ui-ux desiner i have made  many design  that are  good enough .  ",
    },
  ];
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
