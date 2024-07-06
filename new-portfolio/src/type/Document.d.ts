/* export interface ViewTransition{
    ready: Promise<void>
    finished: Promise<void>
    updateCallbackDone: Promise<void>
    skipTransition: () => undefined
}

declare global {
    interface Document {
        startViewTransition?: (skipTransition) => ViewTransition
    }
} */

/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

type UpdateCallback = () => Promise<any> | void

declare global {
  export interface ViewTransition {
    readonly updateCallbackDone: Promise<undefined>
    readonly ready: Promise<undefined>
    readonly finished: Promise<undefined>
    skipTransition(): void
  }

  interface Document {
    startViewTransition?: (updateCallback?: UpdateCallback) => ViewTransition
  }
}