import posed from 'react-pose'

const StaggerChildrenPosed = posed.div({
  enter: {
    staggerChildren: 400,
  },
  exit: {
    staggerChildren: 400,
  }
})


export default StaggerChildrenPosed