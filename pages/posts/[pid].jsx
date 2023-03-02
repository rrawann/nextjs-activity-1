

export async function getStaticPath(){
    const req = await fetch('https://dummyjson.com/posts')

    const data = await req.json()
  const path = data.posts.map((item)=>{
    return {
        params:{
            pid:String(item.id)
        }

    }
  })
  return{
    path,
    fallback:false
  }
}


export async function getStaticProps({params}){
    const req = await fetch('https://dummyjson.com/posts'+params.pid)

    const data = await req.json()
    return {
        props:{data}
    }
}