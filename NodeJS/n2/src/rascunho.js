import { fastify } from 'fastify'

const server = fastify()

server.get('/',async(request,reply)=>{
    console.log(`
        Conexão identificada de ${request.ip}
        `)
    return reply.send('Olá Mundo')
})




server.listen({
    host:'0.0.0.0',
    port: 3333
})
    .then(adress=>{
            console.log(`Servidor rodando em ${adress}`)
        })
    .catch(e=>{
            console.log(`Erro ${e}`)
    })

