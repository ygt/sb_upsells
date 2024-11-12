const UPGRADES_URL = "https://api.jsonbin.io/v3/qs/6733454fe41b4d34e45321f9"

document.addEventListener("DOMContentLoaded", () => {
  window.Stimulus.register("upgrades", class extends Controller {
    static targets = ["hello"]

    connect() {
      this.helloTarget.textContent = "Hello! 😃"
    }
  })
})
