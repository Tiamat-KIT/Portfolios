import { BlogDataResponse } from "@/libs/microcms";
import BlogCard from "../util/BlogCard";
import Flex from "../util/Flex";
import FractionBasisFlexItem from "../FlexItem/FractionBasisFlexItem";

export async function BlogPromiseProps({
    PromiseBlogResponse
}:{
    PromiseBlogResponse : Promise<BlogDataResponse/* ["contents"] */>
}){
    const {contents}  = await PromiseBlogResponse
    
    if(!contents/*   || contents.length  === 0 */){
        return(
          <p>BlogData NotFound</p>
        )
    }
    return(
        <>
          <div tabIndex={0} className="collapse collapse-arrow pb-10">
            <input type="checkbox" className="peer" /> 
            <h1 className="text-2xl collapse-title font-mediu">MyBlog</h1>
              <div tabIndex={0} className="flex collapse-content">
                {contents.map((post) => {
                  console.log(post)
                  return(
                      <>
                          <FractionBasisFlexItem Basis="1/3" Other="px-3" key={post.id}>
                              <BlogCard title={post.title} link={`/Blog/${post.id}`} img={post.img}/>
                          </FractionBasisFlexItem>
                      </>
                  )
                })}
              </div>
          </div>
        </>
    )
}