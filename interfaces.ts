interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'John',
        email: '....@gmail.com'
    }
}

function setUser(usuario: Usuario) {
    // ....
}