import React from 'react';
import classes from "./SectionHeading.module.scss";
import { Text } from "../../../components/text";
import SectionTitle from "../sectionTitle/SectionTitle";
import { Link } from "react-router-dom";

interface Props {
  title: string,
  subtitle?: string,
  link?: string,
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, link }) => (
  <div className={classes.heading}>
    <SectionTitle title={title} />
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

export default SectionHeading;
