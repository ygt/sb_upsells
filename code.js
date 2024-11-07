const { createRoot } = ReactDOM

const UPGRADES_URL = "https://api.jsonbin.io/v3/qs/672b3c19acd3cb34a8a39af3"

const Hello = (props) => {
  return <div>Hello {props.name}! 😃</div>
}

const root = createRoot(document.getElementById("root"))
root.render(<Hello name="World"/>)
