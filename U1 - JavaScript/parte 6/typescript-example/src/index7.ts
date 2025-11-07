class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.edad = edad;
    this.nombre = nombre;
  }

  saluda() {
    console.log("Soy una persona llamada " + this.nombre);
  }
}

class Usuario extends Persona {
  email: string;
  password: string;

  constructor(nombre: string, edad: number, email: string, password: string) {
    super(nombre, edad);
    this.email = email;
    this.password = password;
  }

  saluda(): void {
    console.log(
      `Soy un usuario. Email: ${this.email}, password: ${this.password}`
    );
  }
}

class Cliente extends Persona {
  vip: boolean;

  constructor(nombre: string, edad: number, vip: boolean) {
    super(nombre, edad);
    this.vip = vip;
  }
}

const p: Persona = new Usuario("Pepito", 43, "pepe@email.com", "1234");
p.saluda();
console.log((p as Usuario).email);
if (p instanceof Usuario) {
  console.log(p.email);
  console.log(p.password);
}
