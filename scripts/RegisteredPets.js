import { getPets } from "./database.js"

document.addEventListener("click",
    e => {
        const itemClicked = e.target;

        if (itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                    window.alert(`${pet.name} barks at you!`)
                }
            }
        }
    }
)

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

