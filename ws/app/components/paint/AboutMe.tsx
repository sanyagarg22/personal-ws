"use client";

// Work experience data - replace with your actual experiences
const workExperiences = [
  {
    company: "Company Name",
    role: "Software Engineer",
    period: "2023 - Present",
    description: "Brief description of your role and key achievements.",
  },
  {
    company: "Another Company",
    role: "Intern / Junior Developer",
    period: "2022 - 2023",
    description: "What you did and learned during this experience.",
  },
  {
    company: "Third Company",
    role: "Position Title",
    period: "2021 - 2022",
    description: "Another work experience description.",
  },
];

export function AboutMe() {
  return (
    <div className="flex-1  overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex items-start">
          <div className="flex-1">
            <div className="text-7xl font-bold mb-8" style={{ color: "#7092be" }}>
              about me
            </div>
            <div className="text-gray-600 text-xl mb-10 max-w-2xl">
              I'm a software engineer and recent graduate from Rice University currently based in the SF bay area. In addition to doodling in Microsoft Paint, I like to dabble in many forms of art, try new foods and restaurants (and keep track of them on Beli), and play pickleball and squash. Feel free to check out some of my art and other projects below!
            </div>
            
            {/* Work Experience Section */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-6" style={{ color: "#7092be" }}>
                work experience
              </h3>
              <div className="flex flex-col gap-4 max-w-2xl">
                {workExperiences.map((experience, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg border-2 border-[#b8d0ec] p-5 shadow-sm hover:shadow-md hover:border-[#7092be] transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{experience.role}</h4>
                        <p className="text-[#7092be] font-medium">{experience.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 -ml-8">
            <img 
              src="/pfp.jpg" 
              alt="Profile Picture" 
              className="w-80 h-90 object-cover rounded-[50%]"
              style={{ borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%" }}
            />
          </div>
        </div>
      </div>
      
      {/* Art Gallery Section */}
      <Art />
    </div>
  );
}

export function Art() {
  return (
    <div className="bg-[#dce8f5] p-8 border-t-2 border-[#b8d0ec]">
      <div className="max-w-7xl mx-auto">
        <div className="text-6xl font-bold mb-10 mt-12 text-gray-600">
          my art
        </div>
        <div className="grid grid-cols-3 gap-6">
          {/* Placeholder art images - replace with your actual art */}
          <div>
            <img 
              src="/art1.jpg" 
              alt="Art piece 1" 
              className="w-full h-auto object-cover rounded border-2 border-gray-300"
            />
          </div>
          <div>
            <img 
              src="/art2.jpg" 
              alt="Art piece 2" 
              className="w-full h-auto object-cover rounded border-2 border-gray-300"
            />
          </div>
          <div>
            <img 
              src="/art3.jpg" 
              alt="Art piece 3" 
              className="w-full h-auto object-cover rounded border-2 border-gray-300"
            />
          </div>
          <div>
            <img 
              src="/art4.jpg" 
              alt="Art piece 4" 
              className="w-full h-auto object-cover rounded border-2 border-gray-300"
            />
          </div>
          <div>
            <img 
              src="/art5.jpg" 
              alt="Art piece 5" 
              className="w-full h-auto object-cover rounded border-2 border-gray-300"
            />
          </div>
          <div>
            <img 
              src="/art6.jpg" 
              alt="Art piece 6" 
              className="w-full h-auto object-cover rounded border-2 border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

