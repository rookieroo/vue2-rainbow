import Vue from 'vue'
import { RainbowComponent} from './component'

import { RainbowDialog } from './dialog'
import { RainbowBubble } from './bubble'
import { RainbowRenderlessDemo } from './renderlessDemo'


/** The version of rainbow */
export const version: string

/**
 * Install all rainbow components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(RainbowComponent)` to install.
 */
export function install (vue: typeof Vue): void

/** Rainbow component common definition */
export type Component = RainbowComponent

/** Dialog Component */
export class Dialog extends RainbowDialog {}

/** Bubble Component */
export class Bubble extends RainbowBubble {}

/** RenderlessDemo Component */
export class RenderlessDemo extends RainbowRenderlessDemo {}
