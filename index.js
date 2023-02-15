
const fastify=require('fastify')({logger:true})
//const PORT=3000

// Declare a route
fastify.get('/random/:n', (request, reply) => {
 const n=request.params.n;
 let N=[];
 if(n>=0&&n<=1000){
 for(var i=1;i<=n;i++){
  N.push(Math.floor((Math.random()*1000)+1));
 }
 reply.send(N);
}else{
  reply.send("Please enter a number between 0 to 1000")
}

})
fastify.get('/prime/:n',(req,res)=>{
  const n=req.params.n;
  let X=[]
  let i=2;
if(n>=0&&n<=1000){
while(X.length<n){
  if(isPrime(i)){
    X.push(i)
  }
  i=i===2?i+1:i+2;
}
 res.send(X);
}else{
  res.send("Please enter a number between 0 to 1000")
}
})
const isPrime=(n)=>{
  for(let i=2;i<=Math.floor(Math.sqrt(n));i++){
    if(n%i==0) return false;
  }
  return true;
}
fastify.get('/',(req,res)=>{
  res.send("Server is running")
})
// // Run the server!
fastify.listen({port:3000}, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})