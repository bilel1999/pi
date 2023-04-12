login() {
    this.authService.login(this.credentials).subscribe(response => {
      console.log(response);
      // Handle successful login
    }, error => {
      console.log(error);
      // Handle login errors
    });
  }
  