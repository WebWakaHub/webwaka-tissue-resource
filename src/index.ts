/**
 * Resource — Tissue Layer
 * Composes cells per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: tissue → depends on → cell
 */

import { ResourceRegComposition } from "@webwaka/cell-resource-reg";
import { ExtAdapterComposition } from "@webwaka/cell-ext-adapter";

export { ResourceRegComposition } from '@webwaka/cell-resource-reg';
export { ExtAdapterComposition } from '@webwaka/cell-ext-adapter';

/**
 * Resource Composition
 * Assembles cell-layer components into a cohesive tissue-layer capability.
 */
export class ResourceComposition {
  private resourceRegComposition: ResourceRegComposition;
  private extAdapterComposition: ExtAdapterComposition;

  constructor() {
    this.resourceRegComposition = new ResourceRegComposition();
    this.extAdapterComposition = new ExtAdapterComposition();
  }
}

export * from "./types";
