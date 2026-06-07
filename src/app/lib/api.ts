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

export async function updateUser(id: string, nom: string, prenom: string, age: string, email: string) {

    const reponse = await fetch(apiRoot + "/user/" + id, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ nom, prenom, age, email })
    });
    const data = await reponse.json();

    return data;

}

export async function verifyPro(identificationNationale: string) {

    const reponse = await fetch(apiRoot + "/pro/verify", {
        method: "POST",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ identificationNationale })
    });
    const data = await reponse.json();

    return data;

}

export async function registerPro(identificationNationale: string, id_user: number, nom_cabinet: string, description: string, horaire_cabinet: string) {

    const reponse = await fetch(apiRoot + "/pro/register", {
        method: "POST",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ identificationNationale, id_user, nom_cabinet, description, horaire_cabinet })
    });
    const data = await reponse.json();

    return data;

}
