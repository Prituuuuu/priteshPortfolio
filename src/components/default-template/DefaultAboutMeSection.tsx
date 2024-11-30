import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";

export const DefaultAboutMeSection = () => {
  return (
    <Section id="about-me" headingText="Pritesh Parkar">
      <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[650px]">
        <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
          Junior React Developer
        </Typography>
        <Typography tag="p" className="text-color2 text-l sm:text-xl whitespace-pre-line">
          {
            "I am a motivated and results-driven frontend developer with a strong foundation in HTML, CSS, JavaScript, and React. With a background in Management Studies and a specialization in marketing, I bring a unique perspective to web development, combining technical skills with an understanding of user experience and business goals. Currently, I am focused on mastering frontend technologies and applying them to create dynamic, responsive, and user-friendly websites. I am passionate about building clean, efficient code and continuously improving my skills to deliver innovative and high-quality solutions."
          }
        </Typography>
        <div className="flex gap-[12px]">
          <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <IconButton title="GitHub" size="large">
              <GithubIcon />
            </IconButton>
          </Link>
        </div>
      </div>
    </Section>
  );
};
