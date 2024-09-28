import MainForm from "./_components/MainForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-16 mx-16">
      <h5 className="text-2xl text-neutral-600">AI-Powered Grammar Checker</h5>
      <MainForm />
    </main>
  );
}
