import { FormGroup } from "@angular/forms";

const apiRoot = "http://localhost:5500/api";

export async function login(email: string, password: string) {

    const reponse = await fetch(apiRoot + "/session", {
        method: "POST",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
    const data = await reponse.json();

    return data;
}

export async function register(nom: string, prenom: string , age : string , email: string, password: string) {
    const reponse = await fetch(`${apiRoot}/user/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom: nom,
            prenom: prenom,
            age: age,
            email: email,
            password: password
        })
    });
    const data = await reponse.json();
    console.log('Utilisateur enregistré:', data);
    return data;
    
}

export async function getAllMethodologie() {

    const reponse = await fetch(apiRoot + "/methodologie/all/", {
        method: "GET",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        }
    });
    const data = await reponse.json();

    return data;

}

export async function getOne(methodoId: string) {

    const reponse = await fetch(apiRoot + "/methodologie/" + methodoId, {
        method: "GET",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        }
    });
    const data = await reponse.json();

    return data;

}

export async function authByToken() {

    const reponse = await fetch(apiRoot + "/session/", {
        method: "GET",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        }
    });
    const data = await reponse.json();

    return data;

}

export async function getUser(id: string) {

    const reponse = await fetch(apiRoot + "/user/" + id, {
        method: "GET",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        }
    });
    const data = await reponse.json();

    return data;

}

export async function updateNameUser(update : string , id_user : string) {

    const reponse = await fetch(apiRoot + "/user/" + id_user, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            nom : update
        })
    });
    const data = await reponse.json();

    return data;

}
export async function updateFirstNameUser(update : string , id_user : string) {

    const reponse = await fetch(apiRoot + "/user/" + id_user, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            prenom : update
        })
    });
    const data = await reponse.json();

    return data;

}

export async function updateAgeUser(update : number , id_user : string) {

    const reponse = await fetch(apiRoot + "/user/" + id_user, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            age : update
        })
    });
    const data = await reponse.json();

    return data;

}

export async function updateEmailUser(update : string , id_user : string) {

    const reponse = await fetch(apiRoot + "/user/" + id_user, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            email : update
        })
    });
    const data = await reponse.json();

    return data;

    
}

export async function updatePasswordUser(update : string , id_user : string) {

    const reponse = await fetch(apiRoot + "/user/" + id_user, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            password : update
        })
    });
    const data = await reponse.json();

    return data;

}

export async function updateNameOffice(update : string , id_user : string) {

    const reponse = await fetch(apiRoot + "/user/" + id_user, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            nom_cabinet : update
        })
    });
    const data = await reponse.json();

    return data;

}
export async function updateAddressOffice(update : string , id_user : string) {

    const reponse = await fetch(apiRoot + "/user/" + id_user, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            adresse : update
        })
    });
    const data = await reponse.json();

    return data;

}

export async function updateCityOffice(update : string , id_user : string) {

    const reponse = await fetch(apiRoot + "/user/" + id_user, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            ville : update
        })
    });
    const data = await reponse.json();

    return data;

}

export async function updateDescriptionOffice(update : string , id_user : string) {

    const reponse = await fetch(apiRoot + "/user/" + id_user, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            description : update
        })
    });
    const data = await reponse.json();

    return data;

}

export async function updateOfficeHours(update : string , id_user : string) {

    const reponse = await fetch(apiRoot + "/user/" + id_user, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            horraire_cabinet : update
        })
    });
    const data = await reponse.json();

    return data;

}

export async function isPro(id_user: number) {

    const reponse = await fetch(apiRoot + "/pro/" + String(id_user), {
        method: "GET",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        }
    });
    const data = await reponse.json();

    return data;

}
