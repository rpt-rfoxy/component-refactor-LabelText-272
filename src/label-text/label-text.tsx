import React, { FC, LabelHTMLAttributes } from 'react'
import { elLabelText } from './styles'

interface LabelTextCommonProps {
  variant?: 'soft' | 'strong'
  size?: 'small' | 'medium'
  isRequired?: boolean
}
interface LabelTextAsLabel extends LabelHTMLAttributes<HTMLLabelElement>, LabelTextCommonProps {
  as?: 'label'
}
interface LabelTextAsSpan extends LabelHTMLAttributes<HTMLSpanElement>, LabelTextCommonProps {
  as?: 'span'
}
interface LabelTextAsDt extends LabelHTMLAttributes<HTMLElement>, LabelTextCommonProps {
  as?: 'dt'
}

export type LabelTextProps = LabelTextAsLabel | LabelTextAsSpan | LabelTextAsDt;

export const LabelText: FC<LabelTextProps> = ({ as: Element = 'label', children, isRequired, size = 'medium', variant = 'soft', className, ...rest }) => {
  return (
    <Element {...rest} className={elLabelText} data-size={size} data-variant={variant}>
      {children}
      {isRequired && ' *'}
    </Element>
  )
}
