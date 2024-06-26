// utils/instagramFetch.ts

export async function fetchInstagramPost(): Promise<InstagramPost> {
  const username = "sportinglagos"; // Replace with the desired Instagram username
  const response = await fetch(`https://www.instagram.com/${username}/?__a=1`);

  if (!response.ok) {
    throw new Error("Failed to fetch Instagram data");
  }

  const data = await response.json();
  return data.graphql.user.edge_owner_to_timeline_media.edges[0].node;
}
