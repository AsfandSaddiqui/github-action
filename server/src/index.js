import {createServer} from "node:http"

const PORT = 4000

const app = createServer((request, response)=> {
  response.end("working!")
})

app.listen(PORT,()=>{
  console.log(`listening on Port: ${PORT}`)
})
