import React from 'react';
import { Text } from "../../../components/text";

interface Props {
  title: React.ReactNode
}

const SectionTitle: React.FC<Props> = ({title}) => (
    <Text tagName="h2" heading>
      {title}
    </Text>
)

export default SectionTitle;
