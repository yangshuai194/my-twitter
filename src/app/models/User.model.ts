export class User {
  constructor(
    public nom: string,
    public prenom: string,
    public dateNaissance: Date,
    public email: string,
    public password: string,
  ) {}
}
