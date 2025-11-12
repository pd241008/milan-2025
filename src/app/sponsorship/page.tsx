import { Briefcase } from "lucide-react";

export default function SponsorshipPage() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-indigo-700 mb-6">
          <span className="text-pink-500">Partner</span> with Milan
        </h2>
        <div className="h-1 w-20 bg-pink-500 mx-auto mb-10 rounded-full"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Partner with Milan and showcase your brand to thousands of vibrant
          students, innovators, and professionals from across the country. Our
          sponsorship packages offer unparalleled brand visibility and
          engagement opportunities.
        </p>

        <div className="p-8 bg-indigo-50 rounded-2xl shadow-inner border border-indigo-100">
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">
            Ready to collaborate?
          </h3>
          <a
            href="mailto:milan@srm.edu.in"
            className="inline-block px-10 py-4 text-lg font-semibold bg-indigo-600 text-white rounded-full shadow-xl hover:bg-indigo-700 transition duration-300 transform hover:scale-105 active:scale-95">
            <Briefcase className="inline w-5 h-5 mr-2" /> Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
