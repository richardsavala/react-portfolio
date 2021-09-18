import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto lfex sm:flex-nowrap flex-wrap">
        <div
          className="g:w-2/3 md:w1/2 bg-gray- 900 rounded-lg overflow-hidden
        sm:mr-10 p-10 flex items end justify-start relative"
        >
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960899.6256571757!2d-118.56711054951474!3d43.55438970624503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54afb2bb781a17cb%3A0x6edc428b43754d9c!2sCaldwell%2C%20ID!5e0!3m2!1sen!2sus!4v1631943112198!5m2!1sen!2sus"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Caldwell, ID 83605</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                richardsavala2@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">208-965-5450</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
