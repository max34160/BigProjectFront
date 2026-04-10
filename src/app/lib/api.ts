<<<<<<< HEAD
  export class ApiService {
    form: any;
apiRoot = 'http://localhost:5500/api';
    async register(): Promise<void> {
      const reponse = await fetch(`${this.apiRoot}/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nom: this.form.value.nom,
          prenom: this.form.value.prenom,
          age: this.form.value.age,
          email: this.form.value.email,
          motDePasse: this.form.value.motDePasse
        })
      });
      const data = await reponse.json();
      console.log('Utilisateur enregistré:',data);
    }
  }
=======



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

    return data ;

}
>>>>>>> 0276949736f9a9adc601b0dffd668883ac98d965
