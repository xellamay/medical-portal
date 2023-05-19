import React from 'react';
import { Text } from "../../../components/text";
import classes from "./Section.module.scss";

interface Props {
  children: React.ReactNode,
  title?: string,
  subtitle?: string,
}

const Section: React.FC<Props> = ({ children, title, subtitle }) => (
    <div className={classes.section}>
      <div className={classes.section__heading}>
        {title &&
            <Text tagName="h2" heading>
              {title}
            </Text>
        }
        {subtitle &&
            <Text large>
              {subtitle}
            </Text>
        }
      </div>
      <div>
        {children}
      </div>
    </div>
)

export default Section;
