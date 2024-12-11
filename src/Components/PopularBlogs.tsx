import { MessageCircle, ThumbsUp } from "lucide-react";

const blogs = [
  {
    title: "My Amazing blog",
    author: "Mukshith",
    likes: 142,
    comments: 44,
  },
  {
    title: "Tech stack share",
    author: "Ahamed",
    likes: 183,
    comments: 33,
  },
  {
    title: "Dynamnite AI",
    author: "Justin",
    likes: 200,
    comments: 55,
  },
  {
    title: "Holographic 3D effect",
    author: "rolex",
    likes: 183,
    comments: 78,
  },
];

const PopularBlogs = () => {
  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Poular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">{blog.title}</span>
            </div>
            <span className="text-gray-600">Publish By {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle />
              <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>
              <ThumbsUp size={16} />
              <span className="text-gray-500 mr-2 mt-2">{blog.comments}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
