const UPGRADES_URL = "https://api.jsonbin.io/v3/qs/672dffa8e41b4d34e450cad7"

document.addEventListener("DOMContentLoaded", () => {
  window.Stimulus.register("upgrades", class extends Controller {
    static targets = ["hello"]

    connect() {
      this.helloTarget.textContent = "Hello! 😃"
    }
  })
})
