export function Skills() {
  const SkillsData = [
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      headers: 'HTML',
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      headers: 'CSS',
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      headers: 'JavaScript',
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      headers: 'React',
    },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
     headers: 'Tailwind CSS',
    },
    {
      image: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4',
      headers: 'Supabase',
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      headers: 'Git',
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      headers: 'Figma',
    },
  ];

  return (
    <div className=" bg-blue-100 mt-10 py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10" > My Tech Stack / Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
        {SkillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center mt-10 transition-transform hover:scale-110"
          >
            <img
              src={skill.image}
              alt={skill.headers}
              className="h-20 w-20 object-contain mb-3"
              loading="lazy"
            />
            <p className="text-md font-semibold text-gray-700">{skill.headers}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
