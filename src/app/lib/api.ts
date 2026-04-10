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