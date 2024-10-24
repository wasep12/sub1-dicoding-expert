export const GET_RESTAURANT_NEWS = async (query, totalResult) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&pageSize=${totalResult}&apiKey=${process.env.NEWS_API_KEY}`
    );

    if (!response.ok) {
      // Jika status tidak 200-299, lempar kesalahan
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch restaurant news:", error.message);
    throw new Error("Failed to fetch restaurant news. Please try again later.");
  }
};
