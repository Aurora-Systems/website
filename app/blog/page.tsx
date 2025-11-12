"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import Link from "next/link";


interface Post {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  link: string;
}

const fetchSubstackFeed = async (substackName: string): Promise<Post[]> => {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://aurorasystems.substack.com/feed`
    );
    
    if (!response.ok) throw new Error("Failed to fetch blog feed.");
    
    const data = await response.json();
    
    return data.items.map((item: any) => {
      const imageMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
      const extractedImage = imageMatch ? imageMatch[1] : null;
      
      const cleanExcerpt = item.description
        .replace(/(<([^>]+)>)/gi, "")
        .substring(0, 150) + "...";
      
      return {
        title: item.title,
        excerpt: cleanExcerpt,
        // Set default image immediately if no image found
        image: item.thumbnail || extractedImage || "/default.jpg",
        category: item.categories?.[0] || "Newsletter",
        date: item.pubDate,
        author: item.author || "Substack Author",
        link: item.link,
      };
    });
  } catch (error) {
    console.error("Error fetching Substack feed:", error);
    throw error;
  }
};

// Separate component for the image with error handling
const BlogImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    // Only update state once to prevent infinite loop
    if (!hasError) {
      setHasError(true);
      setImgSrc("/default.jpg");
    }
  };

  return (
    <div
    className="rounded"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '150px !important',
        height: '25vh',
      }}
    ></div>
  );
};

const SubstackBlogGrid = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const SUBSTACK_NAME = "YOUR_SUBSTACK";

  useEffect(() => {
    fetchSubstackFeed(SUBSTACK_NAME)
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      })
      .catch((e) => {
        setError("Unable to load blog posts. Please try again later.");
        setLoading(false);
      });
  }, []); // Empty dependency array prevents infinite loop



  return (
    <div>
    <section >
        <div className="mb-12 text-center mt-5">
          <h1 className="text-4xl font-bold mb-4">Latest from Our Blog</h1>
          <p className="text-muted-foreground">
            Insights, stories, and updates from our Substack newsletter
          </p>
        </div>

        <div className="row gap-3  justify-content-center mb-5 mt-5">
          {posts.map((post, idx) => (
            <div
              key={idx}  className="col-sm col-md-3  W-100"
            >
                <BlogImage src={post.image} alt={post.title} />
                <br />
                

              
                <div >
                <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                  <span className="fw-bold ">
                   
                      {post.title}
                    
                  </span>
                  </Link>
                </div>
              

                

               
              <br/>
               
              </div>
            
          ))}
        </div>
    </section>
    </div>
  );
};

export default SubstackBlogGrid;
