import React from "react";
import { Breadcrumbs, Footer, Nav, ThemeChanger } from "../src/components";

//icons
import {
  RiBookFill,
  RiGlobalFill,
  RiMoneyEuroBoxFill,
  RiUser3Fill,
} from "react-icons/ri";

import { withPublic } from "../src/routes";
import InfoCard from "../src/components/infoCard";

const About = () => {
  const aboutData = [{}];
  return (
    <>
      <Nav />
      <Breadcrumbs />
      <ThemeChanger />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="prose dark:prose-invert">
            <h1 className="">
              Know more <br /> about{" "}
              <span className="text-green-500">GFGSC-KSRIET</span>
            </h1>
            <p>
              The GeeksForGeeks Student Chapter at KSRIET is a thriving community founded by Mr. A.S. Bose, a forward-thinking 3rd-year B.Tech IT student from the batch of 2021-2025, on December 13, 2023. Comprising a President, Vice President, and 11 core members from diverse domains, the chapter is dedicated to nurturing leadership and technical skills among its members. Through workshops, seminars, and collaborative projects, students explore the realms of technology and management, while fostering a culture of peer-to-peer learning and community engagement. The chapter serves as a dynamic platform for students to grow, learn, and thrive together, transcending boundaries and unlocking new opportunities for personal and professional development.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
            <InfoCard
              title="Founder"
              description="This GFG Student Chapter has been Spearheaded by Mr. A.S. Bose, a visionary 3rd-year B.Tech IT student from the batch of 2021-2025, this chapter came into existence on December 13, 2023."
              icon={RiGlobalFill}
            />
            <InfoCard
              title="Objective"
              description="GeeksForGeeks Student Chapter at KSRIET is a dynamic hub of learning and collaboration, founded with a vision to empower students with technical prowess and leadership acumen."
              icon={RiBookFill}
            />
            <InfoCard
              title="Roles"
              description=" At the core of this chapter's structure are its dedicated roles, meticulously crafted to foster holistic development among its members. The President, Vice President, and 11 core members from diverse domains form the backbone of this organization. Each member brings unique expertise and perspective, enriching the collective learning experience."
              icon={RiUser3Fill}
            />
            <InfoCard
              title="Outcomes"
              description="Through peer-to-peer learning and mentorship, members leverage collective wisdom to overcome challenges and unlock new frontiers of knowledge.
              In essence, the GeeksForGeeks Student Chapter at KSRIET is not just a club; it's a vibrant ecosystem where students cultivate skills, forge lifelong connections, and embark on a transformative journey towards excellence."
              icon={RiMoneyEuroBoxFill}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default withPublic(About);
