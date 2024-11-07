const UPGRADES_URL = "https://api.jsonbin.io/v3/qs/672b3c19acd3cb34a8a39af3"

document.addEventListener("DOMContentLoaded", () => {
  window.Stimulus.register("upgrades", class extends Controller {
    static targets = ["hello"]

    connect() {
      this.helloTarget.textContent = "Hello! 😃"
    }
  })
})
