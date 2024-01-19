const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


//###INDEX###
async function index(req, res){

    const data = await prisma.book.findMany();
    return res.json(data)
}

//###CREATE###
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

//###DESTROY###
async function destroy(req, res){
    const id = req.params.id
    await prisma.book.delete({
        where:{
            id: parseInt(id)
        }
    })
    return res.json({message: 'Libro eliminato'})
}

module.exports = {
    index,
    create,
    destroy
}