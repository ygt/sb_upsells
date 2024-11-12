const UPGRADES_URL = "https://api.jsonbin.io/v3/qs/67334534ad19ca34f8c8deac"

document.addEventListener("DOMContentLoaded", () => {
  window.Stimulus.register("upgrades", class extends Controller {
    static targets = ["hello"]

    connect() {
      this.helloTarget.textContent = "Hello! 😃"
    }
  })
})
