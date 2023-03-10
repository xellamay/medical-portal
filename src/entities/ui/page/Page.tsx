import React from 'react';
import classes from "./Page.module.scss"
import { Text } from "../../../components/text";

interface Props {
  children: React.ReactNode,
  title?: string,
  image?: string,
}

const Page: React.FC<Props> = ({ children, title, image }) => (
    <div className={classes.page}>
      {title &&
        <Text tagName="h2" heading>
          {title}
        </Text>
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
