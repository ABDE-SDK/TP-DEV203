import React, { useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";
export default function App() {
  const posts = usePosts()
  return (
    <div>
      <h1>liste des posts à partir d'un API
      </h1>
      <ul> {
        posts.map(post => {
          return (
            <li key={post.id}>{post.title}</li>
          )
        }
        )
      }

      </ul>
    </div>)
}