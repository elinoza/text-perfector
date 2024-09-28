import MainForm from "./_components/MainForm";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-around py-8 mt-16 mx-16 ">
      <div className="flex flex-col items-center justify-center mb-5">
        <h1 className="text-5xl text-neutral-700 dark:text-neutral-200 font-extrabold drop-shadow-lg">
          Text Perfector{"🪄"}
        </h1>
        <h2 className="text-md text-neutral-500 dark:text-neutral-200 mb-16 ">
          AI-Powered Grammar Checker
        </h2>
        <MainForm />
      </div>
      <Footer />
    </main>
  );
}
