class GitHub {
  constructor() {
    this.client_id = "8245ab14cac8d09f6fcf";
    this.client_secret = "25bd7fdff2fe3e56a7b8ca5882b1e1f0ae40b5a6";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  //Get User
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
