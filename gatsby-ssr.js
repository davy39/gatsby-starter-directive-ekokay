/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
<script src="https://www.google.com/recaptcha/api.js?render=6Lf7UsoUAAAAACT2Z6gLyh7RTDfyYGxfZ-M4D0ph"></script>
<script src="https://www.flexyform.com/js/recaptcha.js"></script>
 ])
}
