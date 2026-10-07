"use client";

const BoardMembers = () => {
  const members = [
    {
      name: "Dr.Chinnadurai Periyasamy",
      position: "Founder-cum-Managing Trustee",
      image: "/images/boardmembers/chinnadurai.png",
    },
    {
      name: "Mr. Emayavarman A., MSW",
      position: "Secretary",
      image: "/images/boardmembers/emayavarman.png",
    },
    {
      name: "Ms.Padma",
      position: "Financial Trustee",
      image: "/images/boardmembers/padma.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading & Content */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Board Members
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our board members bring extensive experience, knowledge, and
            leadership to help guide our organization toward continued growth
            and success.
          </p>
        </div>

        {/* Board Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />

              {/* Content */}
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>

                <p className="text-gray-500">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BoardMembers;
