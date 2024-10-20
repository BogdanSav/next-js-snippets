import {db} from "@/db"
import {redirect} from "next/navigation";
const SnippetCreatePage =  () =>{
    async function createSnippet(formData:FormData) {
        'use server';
        const title   =formData.get("title") as string;
        const code  =formData.get("code") as string;

       const snippet =  await db.snippet.create({
            data:{
                title,
                code
            }
        })
        console.log(snippet)
        redirect("/")
    }
    //@ts-expect-error
    return <form action={createSnippet}>
        <h3 className={"font-bold m-3"}>Create a snippet</h3>
        <div className={"flex flex-col gap-4"}>
            <div className={"flex gap-4"}>
                <label className={"w-12"} htmlFor={"title"}>Title</label>
                <input type="text" name={"title"} className={"border rounded p-2 w-full"}/>
            </div>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex gap-4"}>
                    <label className={"w-12"} htmlFor={"code"}>Code</label>
                    <textarea type="text" name={"code"} className={"border rounded p-2 w-full"} cols={7}/>
                </div>
            </div>
            <button type={"submit"} className={"rounded p-2 bg-blue-200"}>
                Create
            </button>
        </div>
    </form>
}

export default SnippetCreatePage;