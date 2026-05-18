/**
 * @amlplugins/zoom-webinars
 *
 * Thin namespaced re-export of the native @zoom/rest-api SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Zoom Webinars REST API — webinar creation, registrants, panelists, Q&A, recordings, branding.
 */

import * as _sdk from "@zoom/rest-api";
export * from "@zoom/rest-api";
export { _sdk as sdk };
export default _sdk;
