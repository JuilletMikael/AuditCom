export async function duplicateTeams() {
    var copy = document.querySelector("#teamList").cloneNode(true);
    document.querySelector(".carousel").appendChild(copy);
}