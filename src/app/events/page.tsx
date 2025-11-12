import { Calendar } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      name: "Battle of Bands",
      desc: "Rock it out with live performances and compete for the ultimate title. Gear up for high-energy music!",
      date: "March 5",
      icon: (
        <svg
          className="w-8 h-8 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19V6l12-3v16l-12 3zm0 0h12m-6 0V6"
          />
        </svg>
      ),
    },
    {
      name: "Techathon",
      desc: "Innovate and build for tomorrow in this 24-hour coding challenge. Solutions for a sustainable future.",
      date: "March 6",
      icon: (
        <svg
          className="w-8 h-8 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
      ),
    },
    {
      name: "Fashion Night",
      desc: "A runway showcase of creativity, glamour, and style. Walk the ramp and set the trend for the year.",
      date: "March 7",
      icon: (
        <svg
          className="w-8 h-8 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v5m-2 2h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-indigo-50">
      <h2 className="text-5xl font-bold text-center text-indigo-700 mb-12">
        Flagship <span className="text-pink-500">Events</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-pink-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="mb-4">{e.icon}</div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-3">
              {e.name}
            </h3>
            <p className="text-gray-600 mb-4">{e.desc}</p>
            <div className="flex items-center text-sm font-semibold text-pink-500 bg-pink-50 p-2 rounded-lg w-fit">
              <Calendar className="w-4 h-4 mr-2" /> {e.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
