import { Link } from "react-router-dom";
const ExtraFirstSection = () => {
    const toysData = [
        {
          id: 1,
          title: "Interactive Learning Toys",
          description: "Engage and educate with interactive toys that make learning fun.",
          image: "https://m.media-amazon.com/images/I/71ky4QmEJvL._AC_SX679_.jpg",
          link: "https://www.amazon.com/Educational-Insights-Numberblocks-Interactive-Activities/dp/B0BXB6XL3D/ref=sr_1_6?keywords=interactive+toys+for+kids&qid=1684650158&sr=8-6"
        },
        {
          id: 2,
          title: "Outdoor Adventure Toys",
          description: "Encourage outdoor play and exploration with exciting adventure toys.",
          image: "https://www.adventuretoys.co.uk/images/product/axilaura.jpg",
          link: "https://www.adventuretoys.co.uk/axi-laura-wooden-playhouse-with-slide/"
        },
        {
          id: 3,
          title: "Imaginative Playsets",
          description: "Enjoyable beautiful creativity and imagination with interactive playsets.",
          image: "https://www.kidkraft.com/media/catalog/product/cache/355e4947c24c58e05deaca62df66d325/2/0/20482_rsm_1.jpg",
          link: "https://www.kidkraft.com/us_en/ultimate-spaceship-20482-pdp.html"
        }
      ];
    
      return (
        <section className="py-10 bg-black w-10/12 mx-auto my-14">
          <div className="container mx-auto ">
            <h2 className="text-3xl font-semibold text-center mb-8 text-warning">Discover More Toys for Kids</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {toysData.map((toy) => (
                <Link to={toy.link} key={toy.id}>
                  <div className=" drop-shadow-lg rounded-lg p-6 flex flex-col items-center transition duration-300 bg-blue-900 ease-in-out hover:bg-blue-100 mx-2">
                    <img src={toy.image} alt={toy.title} className="w-32 h-32 object-cover rounded-full mb-4" />
                    <h3 className="text-xl text-warning font-semibold text-center">{toy.title}</h3>
                    <p className="text-slate-500">{toy.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
    );
};

export default ExtraFirstSection;