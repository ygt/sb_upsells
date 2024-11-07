const UPGRADES_URL = "https://api.jsonbin.io/v3/qs/672ca552e41b4d34e45018b4"

document.addEventListener("DOMContentLoaded", () => {
  window.Stimulus.register("upgrades", class extends Controller {
    static targets = ["hello"]

    connect() {
      this.helloTarget.textContent = "Hello! 😃"
    }
  })
})
