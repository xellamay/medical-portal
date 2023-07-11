import React from 'react';
import classes from "./ScrollList.module.scss"

interface Props {
    children: React.ReactNode,
}

const ScrollList: React.FC<Props> = ({ children }) => (
  <div className={classes.list}>
      {children}
  </div>
)

export default ScrollList;
