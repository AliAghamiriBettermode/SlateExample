import {
  AccordionBlockProps, AddToCalendarButtonProps,
  AlertBlockProps, AnnouncementBannerBlockProps, AnnouncementBlockProps,
  BlockDefaultProps,
  ButtonBlockProps,
  CallToActionBlockProps,
  CardBlockProps,
  CardContentBlockProps,
  CardFooterBlockProps,
  CardHeaderBlockProps,
  ContainerBlockProps,
  DividerBlockProps,
  FormBlockProps, HeroBannerBlockProps,
  IconBlockProps,
  IframeBlockProps,
  ImageBlockProps,
  InputBlockProps,
  LinkBlockProps, LinkMenuBlockProps,
  MarkdownBlockProps,
  RichTextBlockProps,
  SelectBlockProps,
  TextareaBlockProps,
  TextBlockProps,
  ToggleBlockProps,
} from './block-props-model.js'
import _ from 'lodash'
import { BlockName } from '../../enums/block-name.js'
import { v4 } from 'uuid'
import { Slate } from 'slate-react'

export class Block {
  id: string
  name!: BlockName
  children: Block[] | string[] = []
  _children: string[] = []
  props!: BlockDefaultProps

  protected constructor(name: BlockName, children: Block[] | string[], props: BlockDefaultProps, id?: string) {
    this.id = id ?? v4()
    this.name = name
    this.children = children
    this.props = props
  }

  convertDTO(): any {
    return {
      id: this.id,
      name: this.name,
      children: JSON.stringify(this._children),
      props: JSON.stringify(this.props),
    }
  }

  static accordion = (children: Block[] | string[], props: AccordionBlockProps, id?: string) => new Block(BlockName.ACCORDION, children, props, id)
  static alert = (children: Block[] | string[], props: AlertBlockProps, id?: string) => new Block(BlockName.ALERT, children, props, id)
  static button = (children: Block[] | string[], props: ButtonBlockProps, id?: string) => new Block(BlockName.BUTTON, children, props, id)
  static callToAction = (children: Block[] | string[], props: CallToActionBlockProps, id?: string) => new Block(BlockName.CALL_TO_ACTION, children, props, id)
  static card = (children: Block[] | string[], props: CardBlockProps, id?: string) => new Block(BlockName.CARD, children, props, id)
  static cardContent = (children: Block[] | string[], props: CardContentBlockProps, id?: string) => new Block(BlockName.CARD_CONTENT, children, props, id)
  static cardHeader = (children: Block[] | string[], props: CardHeaderBlockProps, id?: string) => new Block(BlockName.CARD_HEADER, children, props, id)
  static cardFooter = (children: Block[] | string[], props: CardFooterBlockProps, id?: string) => new Block(BlockName.CARD_FOOTER, children, props, id)
  static container = (children: Block[] | string[], props: ContainerBlockProps, id?: string) => new Block(BlockName.CONTAINER, children, props, id)
  static divider = (children: Block[] | string[], props: DividerBlockProps, id?: string) => new Block(BlockName.DIVIDER, children, props, id)
  static form = (children: Block[] | string[], props: FormBlockProps, id?: string) => new Block(BlockName.FORM, children, props, id)
  static iframe = (children: Block[] | string[], props: IframeBlockProps, id?: string) => new Block(BlockName.IFRAME, children, props, id)
  static icon = (children: Block[] | string[], props: IconBlockProps, id?: string) => new Block(BlockName.ICON, children, props, id)
  static image = (children: Block[] | string[], props: ImageBlockProps, id?: string) => new Block(BlockName.IMAGE, children, props, id)
  static input = (children: Block[] | string[], props: InputBlockProps, id?: string) => new Block(BlockName.INPUT, children, props, id)
  static link = (children: Block[] | string[], props: LinkBlockProps, id?: string) => new Block(BlockName.LINK, children, props, id)
  static markdown = (children: Block[] | string[], props: MarkdownBlockProps, id?: string) => new Block(BlockName.MARKDOWN, children, props, id)
  static richText = (children: Block[] | string[], props: RichTextBlockProps, id?: string) => new Block(BlockName.RICH_TEXT, children, props, id)
  static select = (children: Block[] | string[], props: SelectBlockProps, id?: string) => new Block(BlockName.SELECT, children, props, id)
  static text = (children: Block[] | string[], props: TextBlockProps, id?: string) => new Block(BlockName.TEXT, children, props, id)
  static textarea = (children: Block[] | string[], props: TextareaBlockProps, id?: string) => new Block(BlockName.TEXTAREA, children, props, id)
  static toggle = (children: Block[] | string[], props: ToggleBlockProps, id?: string) => new Block(BlockName.TOGGLE, children, props, id)
  /**
   * @deprecated
   */
  static addToCalendarButtonProps = (children: Block[] | string[], props: AddToCalendarButtonProps, id?: string) => new Block(BlockName.ADD_TO_CALENDAR_BUTTON, children, props, id)
  /**
   * @deprecated
   */
  static announcement = (children: Block[] | string[], props: AnnouncementBlockProps, id?: string) => new Block(BlockName.ANNOUNCEMENT, children, props, id)
  /**
   * @deprecated
   */
  static announcementBanner = (children: Block[] | string[], props: AnnouncementBannerBlockProps, id?: string) => new Block(BlockName.ANNOUNCEMENT_BANNER, children, props, id)
  /**
   * @deprecated
   */
  static heroBanner = (children: Block[] | string[], props: HeroBannerBlockProps, id?: string) => new Block(BlockName.HERO_BANNER, children, props, id)
  /**
   * @deprecated
   */
  static linkMenu = (children: Block[] | string[], props: LinkMenuBlockProps, id?: string) => new Block(BlockName.LINK_MENU, children, props, id)
}

export function generateSlates(block: Block): Block[] {

  const processBlock = (block: Block) => {
    flatArray.push(block)
    _.forEach(block.children, child => {
      if (typeof child === 'string') {
        block._children.push(child)
      } else {
        block._children.push((child as Block).id)
        processBlock(child as Block)
      }
    })
    block.children = []
  }
  let flatArray: Block[] = []
  block.id = 'root'
  processBlock(block)
  return _.map(flatArray, block => block.convertDTO())
}