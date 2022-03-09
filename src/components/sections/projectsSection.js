import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
// import * as styles from "../../styles/sections.module.scss"
import sun from "../../images/icons8-sun-128.png"

const ProjectSection = ({pageRefs}) => (
  <section id='#projectsSection' ref={el => pageRefs.current = { ...pageRefs.current, projectsSection: el}}>
    <h1><img src={sun} alt="sun"></img>{' '}Projects</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor vel nisl a hendrerit. Aenean a finibus sapien. Maecenas ut metus ac arcu pulvinar viverra. Quisque at pretium odio, vel maximus leo. Mauris vestibulum quam vel ex ultricies, eget porta erat mollis. Etiam nisl nisl, lacinia eleifend gravida at, consequat ac nisl. Sed in tempus nulla. Proin quis augue tincidunt lacus molestie tempor vitae tristique ante. Vestibulum finibus erat ex, et luctus nunc imperdiet eu. Ut iaculis non nibh sit amet venenatis. In neque felis, interdum eu mattis vel, tincidunt nec urna. Ut eu rhoncus odio. Vivamus sit amet imperdiet mi, sed sodales ex. Nunc erat augue, vestibulum eget tortor id, venenatis convallis tellus. Ut sit amet purus convallis, porta neque nec, porta lectus.</p>
    <p>Praesent ac neque a erat laoreet dignissim at eu ipsum. Integer vitae neque non est consequat malesuada. Morbi consequat metus ut dui bibendum, a feugiat lorem luctus. In gravida nulla nec ultricies consectetur. Donec felis lacus, maximus at tortor sit amet, tempus finibus sapien. Aliquam dapibus, mauris quis egestas scelerisque, quam lacus ultrices est, in tincidunt lacus ligula ac ante. Duis commodo consequat dolor, vel posuere nisi pretium non. Donec a nisl justo. Integer consectetur semper ligula sed mollis. Integer porttitor tincidunt ante, ac vehicula dolor tincidunt ut. Proin ut accumsan magna. Mauris tempus venenatis nisi, quis mattis justo pretium id.</p>
  </section>
)

ProjectSection.propTypes = {
  pageRefs: PropTypes.object.isRequired
}

export default ProjectSection