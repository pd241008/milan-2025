export default function TeamsPage() {
  const team = [
    { name: "Aditya ", role: "Coordinator", color: "red" },
    { name: "Prathmesh .", role: "Tech Lead", color: "green" },
    { name: "Akhashat .", role: "Design Lead", color: "blue" },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-500 text-white";
      case "green":
        return "bg-green-500 text-white";
      case "blue":
        return "bg-blue-500 text-white";
      case "purple":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <h2 className="text-5xl font-bold text-center text-indigo-700 mb-12">
        Meet the <span className="text-pink-500">Core Team</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {team.map((m, i) => (
          <div
            key={i}
            className="bg-white shadow-xl rounded-3xl p-8 w-64 text-center transition duration-300 ease-in-out transform hover:scale-105 border border-gray-100">
            {/* Avatar Placeholder with Initial */}
            <div
              className={`h-24 w-24 mx-auto rounded-full mb-4 flex items-center justify-center text-3xl font-bold shadow-md ${getColorClass(
                m.color
              )}`}>
              {m.name.charAt(0)}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{m.name}</h3>
            <p className="text-pink-500 font-medium text-sm">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
