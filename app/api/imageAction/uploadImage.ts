import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(image : string, path: string) {
  const file: File | null = image as unknown as File

  if (!file) {
    return NextResponse.json({ success: false, pathFile: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const pathFile = `${path}${file.name}`
  await writeFile(path, buffer)

  return NextResponse.json({ success: true, pathFile: pathFile })
}