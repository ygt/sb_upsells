document.addEventListener("DOMContentLoaded", () => {
  window.Stimulus.register("hello", class extends Controller {
    static targets = ["name"]

    connect() {
      this.nameTarget.value = "hiya!"
    }
  })
})
