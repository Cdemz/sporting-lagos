"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchInstagramPost } from "../api/instagram";

interface InstagramPost {
  id: string;
  display_url: string;
  edge_media_to_caption: {
    edges: Array<{
      node: {
        text: string;
      };
    }>;
  };
  edge_liked_by: {
    count: number;
  };
  edge_media_to_comment: {
    count: number;
  };
}

export default function InstagramLatestPost(): JSX.Element {
  const [post, setPost] = useState<InstagramPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getLatestPost() {
      try {
        const data = await fetchInstagramPost();
        setPost(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    }

    getLatestPost();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!post) return <div className="text-center">No post found</div>;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-48"
            src={post.display_url}
            alt="Instagram post"
            width={300}
            height={300}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Latest Instagram Post
          </div>
          <p className="mt-2 text-gray-500">
            {post.edge_media_to_caption.edges[0]?.node.text || "No caption"}
          </p>
          <div className="mt-4">
            <span className="text-gray-500">
              ❤️ {post.edge_liked_by.count} likes
            </span>
            <span className="ml-4 text-gray-500">
              💬 {post.edge_media_to_comment.count} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
