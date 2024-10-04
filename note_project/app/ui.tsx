'use client'
import Header from "@/components/header";
import NewNote from "@/components/new-note";
import Sidebar from "@/components/sidebar"

const notes = [
    {
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },{
        id: 1, 
        title: "노트 1",
        content: "노트 내용입니다 1",
    },
    {
        id: 2, 
        title: "노트 2",
        content: "노트 내용입니다 2",
    },
    {
        id: 3, 
        title: "노트 3",
        content: "노트 내용입니다 3",
    },
];

export default function UI() {
    return (
        <main className="w-full h-screen flex flex-col">
            <Header/>
            <div className="grow relative">
                <Sidebar notes={notes}/>
                <NewNote/>
            </div>
        </main>
    )
}