signUp() {
    this.authService.signUp(this.user).subscribe(response => {
      console.log(response);
      // Handle successful signup
    }, error => {
      console.log(error);
      // Handle signup errors
    });
  }
  