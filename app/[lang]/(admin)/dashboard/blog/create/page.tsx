'use client'
import Divider from "@/app/[lang]/components/Divider";
import { Button, Label, TextInput, Select, FileInput } from 'flowbite-react';
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { InsertBlog } from "@/app/api/blog/uploadBlog";
export default function CreateBlog() {
    const Editor = dynamic(() => import("@/app/[lang]/components/myEditor"), { ssr: false });
    let dataRaw: any = null;
    async function insertBlogRaw(formData: FormData) {
        formData.append('content', dataRaw);
        InsertBlog(formData);
    }
    return (
        <>
            <h1 className="font-bold text-slate-800 text-2xl md:text-4xl mb-2">Blog</h1>
            <h2 className="font-light text-lg text-slate-600 mb-4">Lihat semua blog yang kamu buat</h2>
            <Divider />
            <form className="flex  flex-col gap-4" action={insertBlogRaw} >
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="title" value="Judul" />
                    </div>
                    <TextInput id="title" type="text" name="title" placeholder="Kehidupan Sosial" required />
                </div>
                <div>

                    <div className="mb-2 block">
                        <Label htmlFor="file-upload" value="Upload Gambar" />
                    </div>
                    <FileInput id="file-upload" name="file" />

                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Pilih Kategori" />
                        </div>
                        <Select id="category" name="category" required>
                            <option value={"1"}>United States</option>
                            <option value={"2"}>Canada</option>
                        </Select>
                    </div>
                </div>
                <div className="mb-10">
                    <Editor
                        value={"Foo"}
                        data={(v: any) => {
                            console.log(v);
                            dataRaw = v;
                        }}
                    />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </>
    )
}