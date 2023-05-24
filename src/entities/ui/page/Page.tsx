import React from 'react';
import classes from "./Page.module.scss"
import { Text } from "../../../components/text";
import SectionTitle from "../sectionTitle/SectionTitle";

interface Props {
  children: React.ReactNode,
  title?: string,
  image?: string,
}

const Page: React.FC<Props> = ({ children, title, image }) => (
  <div className={classes.page}>
    {title &&
        <SectionTitle title={title}/>
    }
    {image &&
        <div>
            <img className={classes.page__img} src={image} alt={title}/>
        </div>
    }
    <div className={classes.page__content}>
      {children}
    </div>
  </div>
)

export default Page;
