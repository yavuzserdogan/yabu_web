"use client";

import { ReactNode, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const noop = () => () => {};

/**
 * Renders into <body>. Needed for position:fixed layers (modal, floating preview, menu)
 * whose design parents use container-type or transforms, which would otherwise trap them.
 */
export function Portal({ children }: { children: ReactNode }) {
  const isClient = useSyncExternalStore(noop, () => true, () => false);
  return isClient ? createPortal(children, document.body) : null;
}
