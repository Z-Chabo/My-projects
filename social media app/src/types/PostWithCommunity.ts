import type { Post } from "../components/PostList"
export interface PostWithCommunity extends Post{
    communities:{
        name:string
    }
}