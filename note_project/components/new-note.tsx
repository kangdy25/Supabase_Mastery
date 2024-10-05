"use client"

import { supabase } from "@/utils/supabase";
import { useState } from "react"

export default function NewNote({setIsCreating, setActiveNoteId, fetchNotes}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onSave = async () => {
        if  (!title || !content) {
            alert("제목과 내용을 입력해주세요");
            return;
        }
        
        const {data, error} = await supabase.from('Note').insert({
            title,
            content,
        }).select();

        if (error) {
            alert(error.message);
            return;
        } 
        await fetchNotes();
        setActiveNoteId((data as any[])[0].id);
        setIsCreating(false);
    }

    return <div className="w-2/3 p-2 flex flex-col gap-2 absolute top-0 bottom-0 right-0">
        <input 
            type="text" 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)} 
            className="border rounded-md border-gray-400 text-xl p-2"
            placeholder="노트의 제목을 입력하세요"
        />

        <textarea
            name="" 
            id=""
            className="border rounded-md border-gray-400 text-lg p-2 grow"
            value={content}
            onChange={(e)=>{setContent(e.target.value)}}
            placeholder="노트의 내용을 입력하세요"
        />

        <div className="w-full flex justify-end">
            <button 
            onClick={()=>onSave()}
            className="py-1 px-3 rounded-full border-2 border-green-600 hover:bg-green-200 transition-all duration-300 ease-in-out">저장</button>
        </div>
    </div>
}