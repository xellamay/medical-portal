import React from 'react';
import Text from "../text/Text";

interface Props {
  title: React.ReactNode
}

const Title: React.FC<Props> = ({title}) => (
  <Text tagName="h2" heading>
    {title}
  </Text>
)

export default Title;
