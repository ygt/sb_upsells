const UPGRADES_URL = "https://api.jsonbin.io/v3/qs/6734937bad19ca34f8c96b8d"

document.addEventListener("DOMContentLoaded", () => {
  window.Stimulus.register("upgrades", class extends Controller {
    static targets = ["hello"]

    connect() {
      this.helloTarget.textContent = "Hello! 😃"
    }
  })
})
