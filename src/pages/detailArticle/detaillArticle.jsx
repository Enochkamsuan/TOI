import React, { useEffect, useState } from "react";
import { fetchDetailArticle } from "../../config/API/apiCalls";
import { useParams } from "react-router-dom";
import defaultImage from "../../assets/images/1.jpg";

const DetaillArticle = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true);
      try {
        const articles = await fetchDetailArticle(slug);
        setContent(articles);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    getArticle();
  }, [slug]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!content) {
    return <div className="text-center">Article not found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-3">
      <div>
        <div className="text-3xl font-bold font-georgia pb-5">
          '{content.article.title}'
        </div>
        <div>
          <img
            src={content.article.cover_image || defaultImage}
            alt="cover_image"
            className="w-full rounded-lg"
          />
          {console.log(
            "content.article.cover_image",
            content.article.cover_image
          )}
        </div>
      </div>
      <div className="text-md">{content.article.content}</div>
    </div>
  );
};

export default DetaillArticle;
