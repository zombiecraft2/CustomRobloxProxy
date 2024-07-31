const Adress = window.location.href
const IsIndex = Adress.search("index.html")

if (IsIndex != -1) {
    window.location.href = Adress.substring(0, IsIndex)
}