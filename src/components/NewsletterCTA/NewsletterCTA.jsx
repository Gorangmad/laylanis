import React from "react";

const NewsletterCTA = () => {
  return (
    <section className="w-full bg-[#DAA520] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[#f7f1e8] text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-wider">
            LET'S STAY IN TOUCH
          </h2>
          <p className="text-[#f7f1e8] text-lg lg:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
            We would love to keep you updated of new arrivals and special
            offers. Enter your email below to never miss out on what's hot at
            Liam's Quality Meats!
          </p>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address here..."
              className="w-full sm:flex-1 px-6 py-4 rounded-sm bg-[#f7f1e8] text-gray-800 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-[#DAA520] text-base"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-12 py-4 rounded-sm border-2 border-[#f7f1e8] text-[#f7f1e8]
              hover:bg-[#f7f1e8] hover:text-[#F4C430] transition-all duration-300 uppercase tracking-widest text-sm font-medium"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
