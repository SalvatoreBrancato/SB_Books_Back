const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function index(req, res){

    const data = await prisma.book.findMany();
    return res.json(data)
}

async function create(req,res){

    const datiInIngresso = req.body

    const newBookRead = await prisma.book.create({
        data:{
            title: datiInIngresso.title,
            author: datiInIngresso.author,
            description: datiInIngresso.description,
            image: datiInIngresso.image,
            published: datiInIngresso.published,
            pages:datiInIngresso.pages,
            language:datiInIngresso.language
        }
    })

    return res.json(newBookRead)
}

module.exports = {
    index,
    create
}