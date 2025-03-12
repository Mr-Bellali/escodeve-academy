"use client"

import Image from "next/image"

const FormModal = ({table, type, data, id}:{
    table: 
    "teacher" 
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "event"
    | "announcment" ,
    type: "create" | "update" | "delete",
    data?: any,
    id?: any
}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
    const bgColor = type === "create" ? "bg-esYellow" : type === "update" ? "bg-esSky" : "bg-esPurple"
    const img = type === "create" ? "/plus.png" : type === "update" ? "/edit.png" : "/delete.png" 
  return (

    <>
        <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
            <Image src={img} alt="" width={16} height={26}/>
        </button>
    </>
  )
}

export default FormModal