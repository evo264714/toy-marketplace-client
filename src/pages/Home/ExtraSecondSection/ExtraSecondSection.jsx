import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ExtraSecondSection = () => {
    useEffect(() => {
      AOS.init(); // Initialize AOS library
    }, []);
  
    return (
      <section className="py-10 bg-gray-100 w-10/12 mx-auto">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Kids Playground</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-up">
              <div className="flex justify-center items-center mb-4">
                <img
                  className="h-96 w-96 rounded-xl"
                  src="https://www.junglegym.co.uk/media/catalog/product/cache/bc515597db4cec1910a18b2933eb9727/k/i/kids_playground_q3_hy-land.jpg"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-warning">Explore and Have Fun!</h3>
              <p className="text-accent text-center">
                Our kids playground offers a wide range of exciting activities to keep children entertained for hours.
                Let their imaginations run wild in our safe and vibrant environment.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-up">
              <div className="flex justify-center items-center mb-4">
                <img
                  className="h-96 w-96 rounded-xl"
                  src="https://previews.123rf.com/images/yotrak/yotrak1207/yotrak120700160/14484797-modern-children-playground-in-park.jpg"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-error">Hourly Cost</h3>
              <p className="text-accent text-center">Entry Fee: $10 per hour</p>
              <p className="text-accent text-center">Additional charges may apply for certain activities.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ExtraSecondSection;
  