import React from 'react';
import classes from "./Heading.module.scss";
import Text from "../text/Text";
import Title from "../title/Title";
import { Link } from "react-router-dom";

interface Props {
  title: string,
  subtitle?: string,
  link?: string,
}

const Heading: React.FC<Props> = ({ title, subtitle, link }) => (
  <div className={classes.heading}>
    <Title title={title} />
    <div>
      {link ? (
        <Link to={link}>
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
  </div>
)

export default Heading;
