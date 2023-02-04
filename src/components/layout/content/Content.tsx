import React from "react";
import classes from "./Content.module.scss"

interface Props {
  children: React.ReactNode
}

const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.content}>
      {children}
    </div>
  )
}

export default Content;
