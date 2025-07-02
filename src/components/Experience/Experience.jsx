import React from "react";
import { Timeline } from "../ui/timeline";
import { stealthStartup, dentalLogo, max1, max2, max3, max4 } from "../../assets";


export function Experience() {
  const data = [
    {
      title: "April 2025 - June 2025",
      content: (
        <div>
          <div className="flex items-center gap-4">
            <img
              src={dentalLogo}
              alt="Stealth Fintech AI Startup Logo"
              className="w-10 h-10 rounded-full object-cover border border-white"
            />
            <a href="https://max-dental-care.com/">
              <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                  Max Dental Care
              </h1>
            </a>
          </div>

          <h2 className="text-xl text-neutral-800 dark:text-neutral-200">
                Software Engineer Intern
          </h2>

          <div className="mb-8">
            <ul className="text-white list-disc pl-5 marker:text-white">
              <li>Engineered full-stack dental care website using React.js and Node.js with Express implementing component-based architecture and RESTful APIs delivering scalable healthcare service platform for patient engagement</li>
              <li>Optimized performance through lazy loading and component rendering ensuring fast load times across the platform</li>
              <li>Architected API endpoints with robust error handling and MongoDB integration achieving 500ms avg response times</li>
              <li>Utilized AWS Amplify analytics dashboard to monitor user engagement and system metrics ensuring 99.9% uptime</li>
              <li>Integrated Joi validation middleware for form sanitization and security, establishing robust input validation</li>
              <li>Technology used: React.js, Node.js, Express.js, MongoDB, Git, AWS</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={max1}
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={max2}
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={max3}
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={max4}
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "June 2024 - August 2024",
      content: (
        <div>
          <div className="flex items-center gap-4">
            <img
              src={stealthStartup}
              alt="Stealth Fintech AI Startup Logo"
              className="w-10 h-10 rounded-full object-cover border border-white"
            />
            <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                Stealth Fintech AI Startup
            </h1>
          </div>

          <h2 className="text-xl text-neutral-800 dark:text-neutral-200">
                Full Stack Software Engineer Intern
          </h2>

          <div>
            <ul className="text-white list-disc pl-5 marker:text-white">
              <li>Developed core features for AI-powered risk assessment MVP using Python/FastAPI backend and TypeScript/Vue.js rontend, contributing to full product lifecycle from conceptualization to launch</li>
              <li>Built asynchronous data processing components using Python asyncio and Redis queuing for financial data streams, reducing model training time from 3 hours to 90 minutes</li>
              <li>Developed responsive dashboard components with Chart.js visualizations for real-time model performance monitoring, enabling the product team to track key metrics and make data-driven decision</li>
              <li>Optimized database queries and implemented Redis caching for PostgreSQL database, supporting MVP testing work- loads while maintaining consistent sub-300ms response times</li>
              <li>Collaborated closely with senior engineers and product team throughout development lifecycle, translating business re- quirements into technical features and contributing to successful MVP launch for upcoming fundraising</li>
              <li>Technology used: Python, Vue.js, TypeScript, FastAPI, PostgreSQL, Redis, ELK Stack, Git</li>
            </ul>
          </div>


        </div>
      ),
    }
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
