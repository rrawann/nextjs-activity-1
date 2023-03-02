

const post = ({data})=>{
//console.log(data);
    return(
        <>
        
        {
            data.posts.map((item)=>{
                return (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                    </div>
                    )
            })
        }
        </>
    )
}

export const postPid = ({data})=>{
    //console.log(data);
        return(
            <>
            
            {
                data.posts.map((item)=>{
                    return (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                        </div>
                        )
                })
            }
            </>
        )
    }


export async function getStaticProps(){
    const req = await fetch('https://dummyjson.com/posts')

    const data = await req.json()
    return {
        props:{data}
    }
}
export default post;