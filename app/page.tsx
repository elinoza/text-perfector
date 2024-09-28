import MainForm from "./_components/MainForm";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-around py-8 mt-16 mx-16 ">
      <div className="flex flex-col items-center justify-center">
        <h5 className="text-2xl text-neutral-600 dark:text-neutral-200">
          AI-Powered Grammar Checker
        </h5>
        <MainForm />
      </div>
      <Footer />
    </main>
  );
}
