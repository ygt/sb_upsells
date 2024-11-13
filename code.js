const UPGRADES_URL = "https://api.jsonbin.io/v3/qs/6734938facd3cb34a8a7e8a5"

document.addEventListener("DOMContentLoaded", () => {
  window.Stimulus.register("upgrades", class extends Controller {
    static targets = ["hello"]

    connect() {
      this.helloTarget.textContent = "Hello! 😃"
    }
  })
})
