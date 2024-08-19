import Link from "next/link";

export default function Home() {
  return (
    <>
        <header>
          <nav>
            <Link href={"/admin"}>Ingresar</Link>
          </nav>
        </header>
        <main>
          <h1>Reserva tu cancha</h1>

        </main>
    </>

  );
}
