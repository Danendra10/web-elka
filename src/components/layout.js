import Head from "components/layout/head";
import Header from "components/layout/header";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <main className="text-white-text grid-flow-rows-3 grid-cols-12 gap-0  border-b-[1px] border-slate-600 bg-purple-main ">
        <Header />
      </main>
      {children}
    </>
  );
}
