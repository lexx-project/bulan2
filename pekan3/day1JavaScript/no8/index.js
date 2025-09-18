import { getPosts } from "./postService.js";

async function tampilkanPosts(many) {
  const posts = await getPosts();
  for (let i = 0; i < many; i++) {
    console.log(posts[i]);
  }
}

tampilkanPosts(5);
