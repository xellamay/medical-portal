import React from 'react';
import classes from "./Section.module.scss";
import { Text } from "../../../components/text";

interface Props {
  // TODO: не обрабатываю undefiend
  title?: string,
  subtitle?: string,
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ title, subtitle, children }) => (
  <div className={classes.section}>
    <div className={classes.section__heading}>
      <Text tagName="h2" heading>
        {title}
      </Text>
      <Text tagName="a" large>
        {subtitle}
      </Text>
    </div>
    <div className={classes.section__content}>
      {children}
    </div>
  </div>
)

export default Section;
