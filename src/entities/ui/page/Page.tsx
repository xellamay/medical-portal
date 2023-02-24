import React from 'react';
import classes from "./Page.module.scss"

interface Props {
  children: React.ReactNode
}

const Page: React.FC<Props> = ({ children }) => (
    <div className={classes.page}>
      {children}
    </div>
)

export default Page;
