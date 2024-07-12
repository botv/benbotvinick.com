import BasicInfo from "@/app/components/basic-info";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10 space-y-5 max-w-prose mx-auto">
      <h1 className="text-lg font-bold">Ben Botvinick</h1>
      <p className="text-sm">
        Welcome to my little slice of internet. If you came here for a reason,
        hopefully you find what you&apos;re looking for. If you came here by
        accident, maybe you&apos;ll find something interesting anyway.
      </p>
      <p className="text-sm">
        I am a human being. I was born in the year 2002 and will live for
        roughly 100 years, if I&apos;m lucky. I hope to spend the time I have
        figuring out how to be happy, and helping others do the same. Here are
        some basic facts about me:
      </p>
      <BasicInfo />
      <p className="text-sm">
        Thanks for stopping by :)
      </p>
    </main>
  );
}
