import { InteractionType } from '../../enums/interaction-type.js'
import { SlateModel } from '../slate/slate-model.js'
import { ToastStatus } from '../../enums/toast-status.js'

export interface InteractionProps {
  [InteractionType.SHOW]?: {}
  [InteractionType.CLOSE]?: {}
  [InteractionType.OPEN_TOAST]?: {
    title: string,
    status: ToastStatus,
    description: string,
    link?: {
      href: string,
      text: string,
      enableCopy?: boolean,
    },
  }
  [InteractionType.OPEN_MODAL]?: {
    size: 'sm' | 'md' | 'lg' | 'xl',
    title: string,
  }
  [InteractionType.DATA]?: {
    items: { 'text': string, 'value': string }[]
  }
  [InteractionType.RELOAD]?: {
    dynamicBlockKeys: string[]
  }
  [InteractionType.REDIRECT]?: {
    url: string,
    external?: boolean
  }
  any: {}
}

export class Interaction<T extends keyof InteractionProps = any> {
  id: string
  type: InteractionType
  slate?: SlateModel
  props: InteractionProps[T]

  constructor(id: string, type: InteractionType, props: InteractionProps[T], slate?: SlateModel) {
    this.id = id
    this.type = type
    this.props = props
    this.slate = slate
  }

  static show = (options: {
    id: string, props: InteractionProps[InteractionType.SHOW], slate?: SlateModel
  }) => new Interaction(options.id, InteractionType.SHOW, options.props, options.slate)
  static close = (options: {
    id: string, props: InteractionProps[InteractionType.CLOSE], slate?: SlateModel
  }) => new Interaction(options.id, InteractionType.CLOSE, options.props, options.slate)
  static openToast = (options: {
    id: string, props: InteractionProps[InteractionType.OPEN_TOAST], slate?: SlateModel
  }) => new Interaction(options.id, InteractionType.OPEN_TOAST, options.props, options.slate)
  static openModal = (options: {
    id: string, props: InteractionProps[InteractionType.OPEN_MODAL], slate?: SlateModel
  }) => new Interaction(options.id, InteractionType.OPEN_MODAL, options.props, options.slate)
  static data = (options: {
    id: string, props: InteractionProps[InteractionType.DATA], slate?: SlateModel
  }) => new Interaction(options.id, InteractionType.DATA, options.props, options.slate)
  static reload = (options: {
    id: string, props: InteractionProps[InteractionType.RELOAD], slate?: SlateModel
  }) => new Interaction(options.id, InteractionType.RELOAD, options.props, options.slate)
  static redirect = (options: {
    id: string, props: InteractionProps[InteractionType.REDIRECT], slate?: SlateModel
  }) => new Interaction(options.id, InteractionType.REDIRECT, options.props, options.slate)
}

export declare type InteractionResponse = {
  type: 'INTERACTION';
  status: 'SUCCEEDED' | 'FAILED';
  data: {
    appId: string;
    interactionId: string;
    interactions: Interaction<keyof InteractionProps>[]
  }
}