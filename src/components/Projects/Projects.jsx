"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { projects } from "../../constants";
import {Github } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-10 py-12 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-center">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var w-full max-w-sm h-full">
              <CardBody className="flex flex-col 	bg-gradient-to-r from-gray-950 via-[#1a1733] to-gray-950 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] w-full h-full rounded-xl p-6 border transition-all duration-300 hover:border-white/[0.4]">
                
                <CardItem translateZ="100" className="w-full mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-52 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-300"
                  />
                </CardItem>

                <CardItem translateZ="50" className="text-lg sm:text-xl font-bold text-white mb-2">
                  {project.name}
                </CardItem>

                <CardItem
                  translateZ="60"
                  as="p"
                  className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed mb-4"
                >
                  {project.description}
                </CardItem>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-mono ${tag.color} bg-white/10`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-auto px-4 py-2 rounded-xl bg-gray-950 text-white text-xs  border border-[#3a2f4b] font-semibold shadow hover:opacity-90 transition"
                >
                  <Github className="text-white"/> View Code →
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
