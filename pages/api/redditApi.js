export default async function handler(req, res) {
  try {
    const { category } = req.query;
    const response = await fetch(
      `https://www.reddit.com/r/${category}/new.json?count=20`
    );
    const data = await response.json();

    res.status(200).json(data.data.children);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch and filter data from API" });
  }
}
