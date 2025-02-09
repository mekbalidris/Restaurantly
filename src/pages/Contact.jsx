export default function Contact() {
    return (
      <div id="contact" className="bg-secondbg py-16 px-6">
      <div className="text-center mb-10">
      <div className="relative flex justify-center items-center">
        <div className="w-16 h-[2px] bg-white"></div>
        <h3 className="text-3xl font-bold mx-3 title">Contact</h3>
        <div className="w-16 h-[2px] bg-white"></div>
      </div>
    </div>
        {/* Map Section */}
        <div className="flex justify-center">
          <iframe
            className="w-full max-w-5xl h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12610.338522212548!2d-74.0094475!3d40.7127752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a317acb486d%3A0x2e5dcf2c9e7206e2!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1675000000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
  
        {/* Contact Info & Form */}
        <div className="flex flex-col lg:flex-row justify-between items-start max-w-5xl mx-auto mt-12 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 w-full lg:w-1/3">
            <div className="flex items-center gap-4">
              <div className="bg-golden p-3 rounded-lg">
              <span className="text-2xl">📍</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-golden p-3 rounded-lg">
              <span className="text-2xl">📞</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Call Us</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-golden p-3 rounded-lg">
              <span className="text-2xl">📧</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Email Us</h4>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-golden p-3 rounded-lg">
              <span className="text-2xl">⏰</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Open Hours</h4>
                <p>Monday-Saturday: 11:00 AM - 23:00 PM</p>
              </div>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="p-3 bg-transparent border border-golden rounded-lg w-full" />
                <input type="email" placeholder="Your Email" className="p-3 bg-transparent border border-golden rounded-lg w-full" />
              </div>
              <input type="text" placeholder="Subject" className="p-3 bg-transparent border border-golden rounded-lg w-full" />
              <textarea placeholder="Message" rows="5" className="p-3 bg-transparent border border-golden rounded-lg w-full"></textarea>
              <button type="submit" className="bg-golden text-black py-2 px-6 rounded-lg hover:opacity-80 transition">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  