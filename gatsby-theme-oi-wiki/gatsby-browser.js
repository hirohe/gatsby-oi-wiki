import './static/extra.css'

export const onRouteUpdate = () => {
  if (process.env.GATSBY_IS_DEV) {
    // eslint-disable-next-line no-undef
    requestIdleCallback(() => MathJax.typeset())
  }
  try {
    window.cfga()
  } catch (e) {
    console.error(e)
  }
}
