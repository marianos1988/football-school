import Link from "next/link";

export default function Home() {
  return (
    <>
        <header>
          <nav>
            <span>Soy Complejo deportivo</span>
            <br />
            <Link href={"/auth/login"}>Ingresar</Link>
            <br />
            <Link href={"/auth/register"}>Crear Cuenta</Link>
          </nav>
        </header>
        <main>
          <h1>Bienvenidos a Sistemas de alquileres de canchas</h1>

        </main>
    </>

  );
}
