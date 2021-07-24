import React, { Component } from 'react'

class Welcome extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const endereco = e.target.elements.endereco.value;
    localStorage.setItem('@welcome-app/username', username);
    localStorage.setItem('@welcome-app/email', email);
    localStorage.setItem('@welcome-app/endereco', endereco);
    window.location.reload();
  }

  handleLogout = () => {
    localStorage.removeItem('@welcome-app/username');
    localStorage.removeItem('@welcome-app/email');
    localStorage.removeItem('@welcome-app/endereco');
    window.location.reload();
  }

  render() {
    const username = localStorage.getItem('@welcome-app/username');
    if (username !== null) {
      return (
        <div style={styles.container}>
          <p>Bem vindo !  {username}   Aproveite nossas ofertas!</p>
          <button onClick={this.handleLogout} style={styles.submitButton}>Sair</button>
        </div>
      );
    }
    return (
      <form style={styles.container} onSubmit={this.handleSubmit}>
        <input style={styles.username} type="text" name="username" placeholder="Nome de usuário" required />
        <input style={styles.username} type="text" name="email" placeholder="E-mail" required />
        <input style={styles.username} type="text" name="endereco" placeholder="Endereco" required />
        <button type="submit" style={styles.submitButton}>Entrar</button>
      </form>
    );
  }

}

const styles = {
  container: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    width: '80%',
    margin: 'auto',
    minWidth: '300px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px',
    background: 'black',
    borderRadius: '4px',
    padding: '30px 20px'
  },
  submitButton: {
    height: '20px',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '14px',
    border: 0,
    color: 'lightgreen',
    background: 'black',
    marginTop: '5px',
  },
  username: {
    height: '20px',
    padding: '0 15px',
    border: '1px solid #eee',
    background: 'white',
    borderRadius: '4px',
    marginBottom: '10px',
    color: '#444'
  }
}

export default Welcome;