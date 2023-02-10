import React from 'react';
import cn from 'classnames';
import { Classes, Intent } from '@blueprintjs/core';
import Styles from './Text.module.scss';

interface IProps {
  className?: string;
  text?: string;
  max?: number;
  children?: React.ReactNode;
  heading?: boolean,
  bold?: boolean;
  uppercase?: boolean;
  large?: boolean;
  small?: boolean;
  disabled?: boolean;
  muted?: boolean;
  overflowed?: boolean;
  running?: boolean;
  monospace?: boolean;
  intent?: string;
  tagName?: string;
}

const Text: React.FC<IProps> = ({
  className,
  text = '',
  max,
  children,
  heading,
  bold = false,
  uppercase = false,
  large = false,
  small = false,
  disabled = false,
  muted = false,
  overflowed = false,
  running = false,
  monospace = false,
  intent,
  tagName = 'span'
}) => {
  const classList = cn(className, {
    [Classes.UI_TEXT]: true,
    [Styles.bold]: bold,
    [Styles.uppercase]: uppercase,
    [Classes.HEADING]: heading,
    [Classes.TEXT_LARGE]: large,
    [Classes.TEXT_SMALL]: small,
    [Classes.RUNNING_TEXT]: running,
    [Classes.MONOSPACE_TEXT]: monospace,
    [Classes.TEXT_DISABLED]: disabled,
    [Classes.TEXT_MUTED]: muted,
    [Classes.TEXT_OVERFLOW_ELLIPSIS]: overflowed,
    [Classes.INTENT_PRIMARY]: intent === Intent.PRIMARY,
    [Classes.INTENT_SUCCESS]: intent === Intent.SUCCESS,
    [Classes.INTENT_WARNING]: intent === Intent.WARNING,
    [Classes.INTENT_DANGER]: intent === Intent.DANGER,
    [Classes.INTENT_DANGER]: intent === Intent.DANGER
  });

  const maxTextLength = typeof max === 'number' ? max : text.length;

  const isLongText = text.length > maxTextLength;

  const getText = () => {
    if (isLongText) {
      const str = text.substr(0, max);
      // возвращает строку до последнего пробела, что бы не разрывать слова
      return `${str.substr(0, str.lastIndexOf(' '))}...`;
    }

    return text;
  };

  const htmlTitle = isLongText ? text : '';

  return (

    React.createElement(
      tagName,
      {
        className: classList,
        title: htmlTitle
      },
      [getText(), children]
    )
  );
};

//    <span className={classList} title={htmlTitle}>
//       {translate(getText())}
//       {children}
//     </span>
export default Text;
