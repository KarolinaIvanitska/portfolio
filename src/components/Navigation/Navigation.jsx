import css from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div>
        <ul className={css.navigation}>
        <li>Home</li>
        <li>About me</li>
        <li>Project</li>
        <li>Contact</li>
    </ul>
    </div>
  )
}

export default Navigation;