import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Posts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=8`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);
  return (
    <div className="flex">
      <div className="w-52 sm:w-80 flex justify-center items-center">
        {loading && <div className="text-xl font-medium">Loading posts...</div>}
        {error && <div className="text-red-700">{error}</div>}
        <div className="brand-list">
          {/* {data &&
            data.map((brand) => (
              <div key={brand.id} className="brand-item">
                <h3>{brand.title}</h3>
                <p>Brand ID: {brand.body}</p>
                {/* You can add more details or customize the layout as needed}
              </div>
            ))} */}
          {data &&
            data.map(({ id, title, body }) => (
              <li
                key={id}
                className="border-b border-white-100 text-sm sm:text-base   "
              >
                <NavLink
                  className={({ isActive }) => {
                    const baseClasses = "p-4 block hover:bg-gray-100";
                    return isActive
                      ? `${baseClasses} bg-gray-100`
                      : baseClasses;
                  }}
                  to={`/posts/${id}`}
                >
                  {title}
                </NavLink>
                <p>{body}</p>
              </li>
            ))}
        </div>
        <ul>
          {data &&
            data.map(({ id, title, body }) => (
              <li
                key={id}
                className="border-b border-white-100 text-sm sm:text-base   "
              >
                <NavLink
                  className={({ isActive }) => {
                    const baseClasses = "p-4 block hover:bg-gray-100";
                    return isActive
                      ? `${baseClasses} bg-gray-100`
                      : baseClasses;
                  }}
                  to={`/posts/${id}`}
                >
                  {title}
                </NavLink>
                <p>{body}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
