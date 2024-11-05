import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.title}
        href={`/snippets/${snippet.id}`}
        className={"flex justify-between items-center p-2 border rounded"}
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });
  return (
    <div className={'flex flex-col gap-2'}>
        <div className={"flex justify-between items-center"}>
          <p className={"text-md font-bold"}> Snippets</p>
          <Link className={"border p-2 rounded"} href={"/snippets/new"}>
            New
          </Link>
        </div>

      <div className={"flex flex-col gap-2"}>{renderSnippets}</div>{" "}
    </div>
  );
}
