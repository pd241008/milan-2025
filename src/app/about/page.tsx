import { Heart, TrendingUp, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-indigo-700 mb-6">About Milan</h2>
        <div className="h-1 w-20 bg-pink-500 mx-auto mb-10 rounded-full"></div>
        <p className="text-xl text-gray-700 leading-relaxed">
          Milan is **SRM University premier cultural fest**, bringing together
          talent, creativity, and joy. Over three days, we host a dynamic range
          of competitions, performances, and workshops. Join thousands of
          students across India for a spectacular celebration of **art, music,
          technology, and culture**. It&apos;s more than a fest—it&apos;s an
          experience.
        </p>
        <div className="mt-12 flex justify-center space-x-8">
          <div className="text-center">
            <Heart className="w-10 h-10 text-pink-500 mx-auto mb-2" />
            <p className="font-semibold text-lg text-gray-800">Culture & Art</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-10 h-10 text-pink-500 mx-auto mb-2" />
            <p className="font-semibold text-lg text-gray-800">Innovation</p>
          </div>
          <div className="text-center">
            <Users className="w-10 h-10 text-pink-500 mx-auto mb-2" />
            <p className="font-semibold text-lg text-gray-800">Community</p>
          </div>
        </div>
      </div>
    </section>
  );
}
