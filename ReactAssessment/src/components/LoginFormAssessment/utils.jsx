export const login = ({ email, password })=> {
    // Mock login function for demonstration purposes
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password123") {
          resolve({ message: "Login successful" });
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000);
    });
  }
  