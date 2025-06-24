import React from 'react'
import Title from '../layouts/Title'
import { netfixImg, bookImg, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects and Works"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Netfix CLONE"
          des="A streaming platform clone built with modern web technologies. Features include user authentication, movie browsing, and responsive design for all devices."
          githubLink="https://github.com/Debraj245/Netflix-Clone"
          websiteLink="https://debraj245.github.io/Netflix-Clone/"
          src={netfixImg}
        />
        <ProjectsCard
          title="Book my show app"
          des="A movie ticket booking application with seat selection, payment integration, and booking management system. Built with focus on user experience."
          src={bookImg}
        />
        <ProjectsCard
          title="TO-DO-App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
       
      </div>
    </section>
  );
}

export default Projects
