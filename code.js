const { createRoot } = ReactDOM

const UPGRADES_URL = "https://api.jsonbin.io/v3/qs/672dffa8e41b4d34e450cad7"

const Hello = (props) => {
  return <div>Hello {props.name}! 😃</div>
}

const root = createRoot(document.getElementById("root"))
root.render(<Hello name="World" />)
