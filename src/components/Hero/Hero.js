import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of my is to help aspiring and esteblished developers to take
        their development skills to the next level and buil awesome apps.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://www.github.com/MOLDOGAZY")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
