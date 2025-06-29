import Container from "@/components/Container";
import Head from "next/head";
import Link from "next/link";

const Declaimer = () => {
  return (
    <section title="consent" className="text-white h-lvh">
      <Container className="flex flex-col items-center justify-center h-[inherit]">
        <div className="contentBlock text-center max-w-3xl">
          <p className="text-fluid-body-5 leading-fluid-body-4">
            The content on this site is for mature adult individuals of 25 years
            and older. Please note that in no way does this site promote
            prostitution and any patronage is for companionship only and
            whatever is done beyond that is between two consenting adult.{" "}
          </p>
        </div>
        <Link
          href={"/introduction"}
          className="transition-all duration-300 border border-amber-50 mt-fluid-base hover:bg-white hover:text-black"
        >
          <p className="text-fluid-body-5 leading-fluid-body-5 py-3 px-12">
            Enter
          </p>
        </Link>
      </Container>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <main className="bg-[url(/images/background1.jpg)] h-lvh bg-center bg-no-repeat">
        <Declaimer />
      </main>
    </>
  );
}
