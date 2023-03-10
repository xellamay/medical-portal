import React from 'react';
import classes from "./Section.module.scss";
import { Text } from "../../../components/text";
import { Link } from "react-router-dom";

interface Props {
  // TODO: не обрабатываю undefiend
  title?: string,
  subtitle?: string,
  children: React.ReactNode,
  hrefSubtitle?: string,
}

const Section: React.FC<Props> = ({ title, subtitle, children, hrefSubtitle }) => (
  <div className={classes.section}>
    <div className={classes.section__heading}>
      <Text tagName="h2" heading>
        {title}
      </Text>
      {hrefSubtitle ? (
        <Link to={hrefSubtitle}>
          <Text large>
            {subtitle}
          </Text>
        </Link>
      ) : (
        <Text large>
          {subtitle}
        </Text>
      )}
    </div>
    <div className={classes.section__content}>
      {children}
    </div>
  </div>
);

export default Section;
