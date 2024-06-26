export default async function handler(req, res) {
  const username = "sportinglagos"; // Replace with the desired Instagram username
  try {
    const response = await fetch(
      `https://www.instagram.com/${username}/?__a=1`
    );
    if (response.ok) {
      const data = await response.json();
      const latestPost =
        data.graphql.user.edge_owner_to_timeline_media.edges[0].node;
      res.status(200).json(latestPost);
    } else {
      throw new Error("Failed to fetch Instagram data");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
