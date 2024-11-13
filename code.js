const { createRoot } = ReactDOM

const UPGRADES_URL = "https://api.jsonbin.io/v3/qs/6734938facd3cb34a8a7e8a5"

const Hello = (props) => {
  return <div>Hello {props.name}! 😃</div>
}

const root = createRoot(document.getElementById("root"))
root.render(<Hello name="World" />)
