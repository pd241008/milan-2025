"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function TicketingPage() {
  const [count, setCount] = useState(1);
  const ticketPrice = 199;
  const totalPrice = count * ticketPrice;

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-6 bg-indigo-900">
      <h2 className="text-5xl font-bold text-white mb-10 text-center">
        Secure Your <span className="text-pink-400">Entry</span>
      </h2>
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-sm text-center border-t-4 border-pink-500">
        <p className="text-2xl font-bold text-indigo-700 mb-6">
          🎟️ Milan 2025 Entry Pass
        </p>

        <div className="flex items-center justify-center space-x-6 mb-8 bg-indigo-50 p-4 rounded-xl">
          <button
            onClick={() => setCount(Math.max(1, count - 1))}
            className="w-10 h-10 bg-indigo-200 text-indigo-800 text-2xl font-bold rounded-full hover:bg-indigo-300 transition active:scale-90"
            aria-label="Decrease ticket quantity">
            −
          </button>
          <span className="text-4xl font-extrabold text-indigo-900">
            {count}
          </span>
          <button
            onClick={() => setCount(count + 1)}
            className="w-10 h-10 bg-indigo-200 text-indigo-800 text-2xl font-bold rounded-full hover:bg-indigo-300 transition active:scale-90"
            aria-label="Increase ticket quantity">
            +
          </button>
        </div>

        <div className="text-2xl font-semibold text-gray-700 mb-6">
          Total:{" "}
          <span className="text-pink-500 font-extrabold">
            ₹{totalPrice.toLocaleString()}
          </span>
        </div>

        <button className="w-full bg-pink-500 text-white py-4 text-xl font-bold rounded-full shadow-lg hover:bg-pink-600 transition transform hover:scale-[1.01] active:scale-95">
          <Send className="inline w-5 h-5 mr-2" /> Proceed to Payment
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Taxes and fees included. Tickets are non-refundable.
        </p>
      </div>
    </section>
  );
}
