import { PrismaClient } from "@prisma/client";
// import { POST } from "../imageAction/uploadImage";
import {z} from  'zod';

export async function InsertBlog(formData : FormData | any)   {
    const rawFormData = Object.fromEntries(formData.entries());
    console.log({rawFormData});

    const schema = z.object({
        title: z.string({
            invalid_type_error: "title not Valid"
        }),
        image: z.any({
            invalid_type_error: "Image not Vald"
        }),
        excerpt: z.string({
            invalid_type_error: "excerpt not Valid"
        }),
        slug: z.string(),
        category: z.string(),
        content: z.string()
    })


    
    // const pathFile : any  = POST(formData.get('file'), "/img/blog/");
    const pathFile : any  = {pathFile : ''};
    const excerpt = formData.get('content').substring(0, 40);
    let slugraw = formData.get('title');
    let slug = slugraw.replace(' ', '-');

    const validate = schema.safeParse({
        title: formData.get('title'),
        image: pathFile.pathFile,
        excerpt: excerpt,
        slug: slug,
        category: formData.get('category'),
        content: formData.get('content')
    })
    if(!validate.success) {
        return {
            errors: validate.error.flatten().fieldErrors
        }
    }
    const prisma =new PrismaClient();
    await  prisma.blog.create({
        data: {
            title: formData.get('title'),
            image: pathFile.pathFile,
            excerpt: excerpt,
            slug: slug,
            category: formData.get('category'),
            content: formData.get('content')
        }
    })
    return {
        message: "please check your Field again"
    }


}