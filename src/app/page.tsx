import { Ticket, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Embedded CSS for the animation, replacing globals.css usage */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] p-6 md:p-12 bg-indigo-900 bg-opacity-90 text-white relative overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-10 left-1/4"></div>
          <div className="w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-2/3 right-1/4"></div>
          <div className="w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 bottom-1/4 left-1/3"></div>
        </div>

        <div className="z-10 max-w-4xl">
          <h1
            className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tight"
            style={{ textShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
            Welcome to <span className="text-pink-400">Milan &apos;25</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 font-light max-w-3xl mb-10 mx-auto">
            The ultimate college fest experience — where culture, innovation,
            and celebration unite.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            {/* Replaced Link with standard <a> tag */}
            <a
              href="/events"
              className="px-8 py-4 text-lg font-semibold bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-105 active:scale-95 ease-out">
              <Sparkles className="inline w-5 h-5 mr-2" /> Explore Events
            </a>
            {/* Replaced Link with standard <a> tag */}
            <a
              href="/ticketing"
              className="px-8 py-4 text-lg font-semibold bg-white text-indigo-600 border-2 border-transparent rounded-full shadow-lg hover:bg-indigo-50 hover:border-indigo-600 transition duration-300 transform hover:scale-105 active:scale-95 ease-out">
              <Ticket className="inline w-5 h-5 mr-2" /> Get Tickets
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
