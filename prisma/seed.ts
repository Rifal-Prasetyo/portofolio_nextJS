import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    try {
    // seeding user
    const saya =  await prisma.user.create({
        data : {
            email: 'hrdsdms765@gmail.com',
            name: 'Muhammad Rifal Prasetyo',
            password: 'indonesia',
        }
    });
    const saya1 = await prisma.user.create({
        data : {
            email: 'anggun@gmail.com',
            name: 'Anggun Rasya Evaldo',
            password: 'indonesia',
        }
    });
    const saya2 = await prisma.user.create({
        data : {
            email: 'rully@gmail.com',
            name: 'Diandra RullyAditya',
            password: 'indonesia',
        }
    });

    // seeding category
    const category1 = await prisma.category.create({
        data: {
            name: 'progamming',
        }
    })
    const category2 = await prisma.category.create({
        data: {
            name: 'fotografi',
        }
    })

    // seeding music
    const music1 = await prisma.music.create({
        data : {
            name: 'Goyang Dumang', 
            link: '/anngger'
        }
    })
    const music2 = await prisma.music.create({
        data : {
            name: 'Goyang Helikopter', 
            link: '/helikopter'
        }
    })

    // seeding  blog
    const blog1 = await prisma.blog.create({
        data: {
            title: 'lorem Ipsum',
            image: '/opop',
            excerpt: 'lorem-ipsum',
            content: 'indonesia',
            slug: 'lorem-ipsum-dolor',
            link: '/lorem_ipsum',
            views: 11,
            categoryId: 1,
            authorId: 1
        }   
    });
    const blog2 = await prisma.blog.create({
        data: {
            title: 'lorem Ipsum',
            image: '/opop',
            excerpt: 'lorem-ipsum',
            content: 'indonesia',
            slug: 'lorem-ipsum-dolor',
            link: '/lorem_ipsum',
            views: 11,
            categoryId: 2,
            authorId: 2
        }
    })

    // seeding project 
    const project1 = await prisma.project.create({
        data: {
            title: 'lorem Ipsum',
            image: '/opop',
            excerpt: 'lorem-ipsum',
            content: 'indonesia',
            slug: 'lorem-ipsum-dolor',
            views: 11,
            authorId: 2
        }
    })
    const project2 = await prisma.project.create({
        data: {
            title: 'lorem Ipsum',
            image: '/opop',
            excerpt: 'lorem-ipsum',
            content: 'indonesia',
            slug: 'lorem-ipsum-dolor',
            views: 11,
            authorId: 2
        }
    })
    console.log(saya);
    console.log('succesfully seeding Succes');
    } catch (error) {
        console.log('error, Seeding Failed');
    } finally {
        await prisma.$disconnect()
    }
    
}

main();

// try {
//     main();
//     console.log('seeding Succesfully');
// } catch (error) {
//     console.log('seeding failed');
// } finally {
//     prisma.$disconnect()
// }
