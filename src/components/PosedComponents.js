import posed from 'react-pose'

const delay = 0
const duration = 400

export const FadeUp = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: duration
    }
  },
  exit: {
    opacity: 0,
    y: '100%'
  }
})