export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.reddit.com/r/delhi/hot.json?limit=50"
    );
    const data = await response.json();

    const filteredData = data.data.children.filter(
      (item) => item.data.link_flair_css_class === ""
    );

    res.status(200).json(filteredData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch and filter data from API" });
  }
}
