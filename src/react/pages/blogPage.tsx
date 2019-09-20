import React from "react";
import { BlogService } from "../../services/blogService";
import { BlogPostPreview } from "../components/blog/blogPostPreview";

export interface BlogPageState {
  
}

export function BlogPage() {

  return (
    <div className="blog-page">
      {BlogService.getPreviews().map(BlogPostPreview)}
    </div>
  )
}


