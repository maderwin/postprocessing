import { Pass } from "./pass.js";

/**
 * A clear mask pass.
 *
 * @class ClearMaskPass
 * @submodule passes
 * @extends Pass
 * @constructor
 */

export class ClearMaskPass extends Pass {

	constructor() {

		super(null, null, null);

		this.name = "ClearMaskPass";

	}

	/**
	 * This pass disables the stencil test.
	 *
	 * @method render
	 * @param {WebGLRenderer} renderer - The renderer.
	 */

	render(renderer) {

		renderer.context.disable(renderer.context.STENCIL_TEST);

	}

}
