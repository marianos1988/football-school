import Link from "next/link";

export default function Home() {
  return (
    <>
        <header>
          <nav>
            <Link href={"/panel"}>Ingresar</Link>
          </nav>
        </header>
        <main>
          <h1>Reserva tu cancha</h1>

        </main>
    </>

  );
}
