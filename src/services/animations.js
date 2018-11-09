import {TweenMax} from 'gsap'
/**
 * fadeFromTop
 * @param {Object} props: state object
 *
 * Fades the view down from the top
 */
export const fadeFromTop = props => ({
  unmountOnExit: true,
  timeout: 1000,
  onEnter: node => TweenMax.set(node, { autoAlpha: 0, y: -50 }),
  addEndListener: (node, done) => {
    TweenMax.to(node, props.duration || 0.75, {
      autoAlpha: props.mounted ? 1 : 0,
      y: props.mounted ? 0 : 50,
      onComplete: done
    })
  },
  ...props
})

/**
 * fadeFromLeft
 * @param {props} props for setting state
 *
 * Fades in the view from the left
 */
export const fadeFromLeft = props => ({
  unmountOnExit: true,
  timeOut: 1000,
  onEnter: node => TweenMax.set(node, {autoAlpha: 0, x: -50}),
  addEndListener: (node, done) => {
    TweenMax.to(node, props.duration || 0.75, {
      autoAlpha: props.mounted ? 1 : 0,
      x: props.mounted ? 0 : 50,
      onComplete: done
    })
  },
  ...props
})
