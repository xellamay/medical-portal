import React from 'react';
import classes from "./Section.module.scss";

interface Props {
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ children }) => (
  <div className={classes.section}>
    {children}
  </div>
)

export default Section;
