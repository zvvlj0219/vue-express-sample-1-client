import axios from 'axios';

const url = 'api/posts/';

class PostService {
  //get posts
  static getPosts(){
    // return new Promise(async(resolve,reject)=>{
    //   try{
    //     const res = await axios.get(url);
    //     const data = res.data;
    //     resolve(
    //       data.map(post =>({
    //         ...post,
    //         createdAt:new Date(post.createdAt)
    //       }))
    //     )
    //   } catch(err){
    //     reject(err);
    //   }
    // })
    async function promiseExecutor(){
      const res = await axios.get(url);
      console.log(res)
      const data = await res.data;
      const result = await data.map(post =>({
        ...post,
        createdAt:new Date(post.createdAt)
      }));
      return result;
    }
    return promiseExecutor();
  }

  //create post
  static insertPost(text){
    return axios.post(url,{
      text:text
    })
  }

  //delete post
  static deletePost(id){
    console.log(url+id)
    return axios.delete(`${url}${id}`)
  }
}

export default PostService;