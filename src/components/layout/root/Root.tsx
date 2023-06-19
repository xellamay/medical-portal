import React from 'react';
import { BrowserRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode
}

const Root: React.FC<Props> = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

export default Root;
