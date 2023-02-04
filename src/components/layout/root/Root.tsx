import React from 'react';

interface Props {
  children: React.ReactNode
}
// TODO: вынести в стили
const Root: React.FC<Props> = ({ children }) => (
  <div style={{ overflow: "none" }}>
    {children}
  </div>
)

export default Root;
