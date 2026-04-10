import { FormGroup } from "@angular/forms";

const apiRoot = "http://localhost:5500/api";

export async function login(email: string, password: string) {

  const reponse = await fetch(apiRoot + "session", {
    method: "GET",
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
