import { IconNameProps } from '../../enums/icon-name.js'
import { Image, Media } from '@tribeplatform/gql-client/types'

export type ContainerAlignmentVerticalOption = 'start' | 'center' | 'end'
export type ContainerAlignmentHorizontalOption = ContainerAlignmentVerticalOption | 'stretch'
export type DetailedContainerAlignment = {
  vertical?: ContainerAlignmentVerticalOption
  horizontal?: ContainerAlignmentHorizontalOption
  self?: ContainerAlignmentHorizontalOption
}
export type ContainerAlignment = ContainerAlignmentVerticalOption | DetailedContainerAlignment
export type ContainerPaddingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type ContainerMaxSize = ContainerSize | 'none'
export type DetailedContainerPaddingAxis = {
  size: ContainerPaddingSize
  disableOnMobile?: boolean
  onlyOnMobile?: boolean
}
export type ContainerPaddingAxis = ContainerPaddingSize | DetailedContainerPaddingAxis
export type ContainerPadding = ContainerPaddingAxis | {
  top?: ContainerPaddingAxis
  bottom?: ContainerPaddingAxis
  left?: ContainerPaddingAxis
  right?: ContainerPaddingAxis
  vertical?: ContainerPaddingAxis
  horizontal?: ContainerPaddingAxis
}

export interface BlockDefaultProps {
  callbackId?: string;
  name?: string;
  className?: string;
}

export interface FormDefaultProps extends BlockDefaultProps {
  required?: boolean
  invalid?: boolean
  name: string
  label?: string
  secondaryLabel?: string
  tertiaryLabel?: string
  placeholder?: string
  helperText?: string
  error?: string
  hidden?: boolean
  size?: 'default' | 'compact'
}

export interface AccordionBlockProps extends BlockDefaultProps {
  title: string;
  items: {
    title: string;
    description: string;
    defaultOpen?: boolean;
  }[];
}

export interface AlertBlockProps extends BlockDefaultProps {
  title?: string;
  align?: 'leading' | 'center';
  status?: 'error' | 'warning' | 'success' | 'info' | 'neutral' | 'primary';
  rounded?: boolean;
  withClose?: boolean;
  // icon?: any; // TODO: should be ReactNode
}

export interface ButtonBlockProps extends BlockDefaultProps {
  text?: string;
  link?: string
  variant?: 'primary' | 'secondary' | 'secondaryNeutral' | 'tertiary' | 'tertiaryNeutral' | 'plain' | 'plainNeutral';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  autoDisabled?: boolean;
  autoLoading?: boolean;
  // trailingIcon?: IconComponentType // TODO: Icon Type
  // leadingIcon?: IconComponentType // TODO: Icon Type
  tooltip?: string
  pressed?: boolean
  destructive?: boolean;
  textAlign?: 'center' | 'start' | 'end';
  truncate?: boolean;
}

export interface CallToActionBlockProps extends BlockDefaultProps {
  title?: string;
  action?: {
    type: 'button' | 'link';
    text?: string;
    href: string;
    openInNewWindow?: boolean;
  };
  alignment?: 'left' | 'center';
  image?: Media;
  description?: string;
}

export interface CardBlockProps extends BlockDefaultProps {
  padding?: 'sm' | 'md';
  attached?: 'top' | 'bottom' | 'left' | 'right' | 'all' | 'none';
  transparent?: boolean;
}

export interface CardContentBlockProps extends BlockDefaultProps {
}

export interface CardHeaderBlockProps extends BlockDefaultProps {
  title?: string;
  description?: string;
  size?: 'xs' | 'sm' | 'md';
  withBorder?: boolean;
}

export interface CardFooterBlockProps extends BlockDefaultProps {
  withBorder?: boolean;
}

export interface ContainerBlockProps extends BlockDefaultProps {
  size?: ContainerSize
  maxSize?: ContainerMaxSize
  childrenSizes?: ContainerSize[]
  direction?: 'vertical' | 'horizontal' | 'vertical-reverse' | 'horizontal-reverse' | 'grid'
  grow?: boolean
  shrink?: boolean
  spacing?: ContainerPaddingAxis
  padding?: ContainerPadding
  alignment?: ContainerAlignment
  order?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
  }
  hide?: {
    default: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
  }
  opacity?: 'none' | 'low' | 'medium' | 'high'
}

export interface DividerBlockProps extends BlockDefaultProps {
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  position?: 'center' | 'trailing';
}

export interface FormBlockProps extends BlockDefaultProps {
  defaultValues?: Record<string, unknown> | string;
}

export interface IconBlockProps extends BlockDefaultProps {
  name?: IconNameProps;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  iconType?: 'solid' | 'outline';
  color?: 'default' | 'primary' | 'positive' | 'negative' | 'attention' | 'highlight';
}

export interface IframeBlockProps extends BlockDefaultProps {
  src: string;
  height: number;
  title?: string;
  hidden?: boolean;
}

export interface ImageBlockProps extends BlockDefaultProps {
  url: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  shape?: 'circle' | 'square' | 'rounded';
}

export interface InputBlockProps extends BlockDefaultProps {
  readonly?: boolean;
  hideValue?: boolean;
  value?: string;
  copy?: boolean;
  required?: boolean;
  invalid?: boolean;
  hidden?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  leadingIcon?: string;
}

export interface LinkBlockProps extends BlockDefaultProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rounded?: 'none' | 'base' | 'avatar';
  disabled?: boolean
  truncate?: boolean
  variant?: 'inherit' | 'neutral' | 'accent';
}

export interface MarkdownBlockProps extends BlockDefaultProps {
  text?: string;
}

export interface RichTextBlockProps extends BlockDefaultProps {
  content: string;
  hidden?: boolean;
  textColor?: 'dark' | 'light';
  backgroundColor?: string;
  wrapper?: 'none' | 'card' | 'card-with-padding'
}

export interface SelectBlockProps extends FormDefaultProps {
  isSearchable?: boolean;
  dataCallbackId?: string;
  hideClearIcon?: boolean;
  avatarRounded?: 'none' | 'sm' | 'md' | 'base' | 'avatar';
  avatarSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

  disabled?: boolean
  value?: string;
  items?: { value: string, text: string, avatar?: string }[]
  invalid?: boolean
  placeholder?: string

  label?: string;
  required?: boolean;
  helperText?: string;
}

export interface TextBlockProps extends BlockDefaultProps {
  value?: string;
  align?: 'leading' | 'center' | 'trailing';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  truncate?: boolean;
  format?: 'plain' | 'markdown';
}

export interface TextareaBlockProps extends BlockDefaultProps {
  value?: string;
  required?: boolean;
  invalid?: boolean;
  hidden?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
}

export interface ToggleBlockProps extends FormDefaultProps {
  title?: string;
  description?: string;
  checked?: boolean;
  // size?: 'sm' | 'md';
  size?: 'default' | 'compact'
  required?: boolean;
  invalid?: boolean;
  label?: string;
  placeholder?: string;
  hidden?: boolean
}

/**
 * @deprecated
 */
export interface AddToCalendarButtonProps extends BlockDefaultProps {
  event: {
    title: string
    description?: string
    location?: string
    start: string
    end: string
  }
}

/**
 * @deprecated
 */
export interface AnnouncementBlockProps extends BlockDefaultProps {
  title?: string
  description?: string
  actionText?: string
  actionUrl?: string
  align?: 'left' | 'center'
  viewStyle?: 'simple' | 'vibrant'
  hidden?: boolean
}

/**
 * @deprecated
 */
export interface AnnouncementBannerBlockProps extends BlockDefaultProps {
  title: string
  url: string
  style: 'primary' | 'neutral' | 'warning' | 'error' | 'info'
  rounded: boolean
}

/**
 * @deprecated
 */
export interface HeroBannerBlockProps extends BlockDefaultProps {
  layout: 'imageFull' | 'imageRight' | 'imageLeft' | 'imageBottom' | 'imageTop'
  contentSpacing: number
  mediaAspectRatio: number
  icon?: Media
  eyebrow: string
  heading: string
  description: string
  textColor: 'dark' | 'light'
  textAlignment: 'center' | 'start' | 'end'
  mediaType: 'image' | 'video' | 'color'
  // image: Image
  // video: File
  mediaTint: number
  backgroundColor: string
  actionType: 'button' | 'search' | 'none'
  buttonActions: {
    id: string
    name: string
    url: string
    type: 'primaryButton' | 'secondaryButton' | 'textLink'
    target: 'blank' | 'self'
  }[]
  searchAction: {
    searchFor: 'all' | 'post' | 'member' | 'space'
    placeholder?: string
    searchSource: 'allSpaces' | 'currentSpace' | 'specificSpaces'
    spaceIds?: string[]
  }
}

/**
 * @deprecated
 */
export interface LinkMenuBlockProps extends BlockDefaultProps {
  title: string
  items: {
    text?: string
    href?: string
    image?: Media
    openInNewWindow?: boolean
  }[]
}