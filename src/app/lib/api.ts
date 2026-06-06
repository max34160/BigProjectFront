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

export async function register(form: FormGroup): Promise<void> {
  const reponse = await fetch(`${apiRoot}/user/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nom: form.value.nom,
      prenom: form.value.prenom,
      age: form.value.age,
      email: form.value.email,
      motDePasse: form.value.motDePasse
    })
  });
  const data = await reponse.json();
  console.log('Utilisateur enregistré:', data);
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

    return data ;

}

export async function getOne(methodoId : string) {

    const reponse = await fetch(apiRoot + "/methodologie/"+methodoId, {
        method: "GET",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        }
    });
    const data = await reponse.json();

    return data ;

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

    return data ;

}

export async function isPro(id_user : number) {

    const reponse = await fetch(apiRoot + "/pro/"+String(id_user), {
        method: "GET",
        credentials: "include",
        headers: {
            'Content-Type': "application/json"
        }
    });
    const data = await reponse.json();

    return data ;

}
