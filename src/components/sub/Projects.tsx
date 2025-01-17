import { FC } from "react";
import ShowWhenScroll from "../effects/ShowWhenScroll";
import { aboutMePageTexts } from "@/public/data/persianTexts";
import ProjectCard from "./ProjectCard";
import { projects, ProjectType } from "@/public/data/projects";
import { TiltEffect } from "@/components";

const Projects: FC = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center">
      <ShowWhenScroll className="mb-24">
        <h4 className="text-4xl font-extrabold">{aboutMePageTexts.projects.projectsTitle}</h4>
      </ShowWhenScroll>

      <ShowWhenScroll className="mx-5 grid grid-cols-1 gap-14 xl:mx-44 xl:grid-cols-3 xl:gap-10">
        {projects.map((item: ProjectType) => (
          <TiltEffect key={item.liveLink} style={{ height: "100%" }}>
            <ProjectCard
              liveLink={item.liveLink}
              githubLink={item.githubLink}
              src={item.src}
              title={item.title}
              description={item.description}
              skills={item.skills}
              imgBgColor={item.imgBgColor}
            />
          </TiltEffect>
        ))}
      </ShowWhenScroll>
    </section>
  );
};

export default Projects;
