if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./js/serviceWorker.js").then(
        reg => console.log("Registro exitoso!")
    ).catch(
        err => console.log(err)
    )
}