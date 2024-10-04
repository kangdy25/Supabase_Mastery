"use client"

export default function Sidebar({
    notes, 
    setIsCreating, 
    activeNoteId, 
    setActiveNoteId,
}) {
    return (
        <aside className="absolute top-0 left-0 bottom-0 border-r border-gray-300 w-1/3  overflow-y-scroll p-2">
            <button 
            onClick={()=>{setIsCreating(true)}}
            className="p-2 text-lg font-bold border border-gray-600 rounded-lg w-full">새로운 노트</button>
            <ul className="mt-2 flex flex-col gap-2">
                {notes.map((note)=>(
                    <li>
                        <button 
                        className={`${activeNoteId === note.id ? "font-bold" : ""}`}
                        onClick={()=>{
                            setActiveNoteId(note.id);
                            setIsCreating(false);

                        }}>
                            {note.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}