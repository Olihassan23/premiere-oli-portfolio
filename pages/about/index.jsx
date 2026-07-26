import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";


import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
{
  title: "Skills",
  info: [
    {
      title: "Video Editing",
      icons: [
        "/adobe-premiere-pro-icon.svg",
        "/adobe-after-effects-icon.svg",
        "/adobe-photoshop-icon.svg",
      ],
    },
    {
  title: "Creative Tools",
  icons: [
    "/canva-icon.svg",
    "/adobe-creative-cloud-svgrepo-com.svg",
    "/chatgpt-icon.svg",
  ],
},
  ],
},

  {
    title: "experience",
    info: [
      {
        title: "Video Editing",
        stage: "2023-2026",
      },
      {
        title: "Motion graphics",
        stage: "2025 - 2026",
      },
      {
        title: "Working With Clients",
        stage: "2024-2026",
      },
    ],
  },
  
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center pt-20">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Professional <span>Video Editing</span> That Keeps Viewers Watching
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I help YouTubers, brands, and businesses create engaging videos that stand out. My expertise includes YouTube documentary editing, Vox-style explainers, Magnet Media-inspired storytelling, cash cow content, cinematic edits, Reels, Shorts, videography, screencasts, green screen compositing, and color grading—delivering videos designed to maximize audience retention.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={200} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>
<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
  {aboutData[index].info.map((item, itemI) => (
    <div
      key={itemI}
      className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
    >
      <div className="font-light mb-2 md:mb-0">
        {item.title}
      </div>

      {item.stage && (
        <>
          <div className="hidden md:flex">-</div>
          <div>{item.stage}</div>
        </>
      )}

      {item.icons && (
        <>
          <div className="hidden md:flex">-</div>

          <div className="flex gap-x-4">
            {item.icons.map((icon, iconI) => (
              <img
                key={iconI}
                src={icon}
                alt=""
                className="w-8 h-8 object-contain"
              />
            ))}
          </div>
        </>
      )}
    </div>
  ))}
</div>
           
        </motion.div>
      </div>
    </div>
  );
};

export default About;
