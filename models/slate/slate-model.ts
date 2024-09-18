import { Block } from './block-model.js'

export interface SlateModel {
  rootBlock: string;
  blocks: Block[]
}