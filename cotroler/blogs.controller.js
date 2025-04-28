let blogsData = [
  {
    id: 1,
    title: "Blog 1",
    description: "This is blog 1",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "This is blog 2",
  },
  {
    id: 3,
    title: "Blog 3",
    description: "This is blog 3",
  },
  {
    id: 4,
    title: "Blog 4",
    descriptions: "This is blog 4",
  },
  {
    id: 5,
    title: "Blog 5",
    description: "This is blog 5",
  },
];

const getAllBlogs = (req, res) => {
  res.status(200).json(blogsData);
};

const getSingleBlog = (req, res) => {
  const singleBlogData = blogsData.find(
    (item) => item.id === Number(req.params.id)
  );

  if (singleBlogData) {
    res.status(200).json(singleBlogData);
    res.send();
  } else {
    res
      .status(404)
      .json({ msg: `there is not a blog with id ${req.params.id}` });
  }
};

const createBlog = (req, res) => {
  const { title, description } = req.body;

  console.log(title, description);

  const newBlog = {
    id: blogsData.length + 1,
    title,
    description,
  };

  blogsData.push(newBlog);

  //   res.send("created the blog");
  res.status(201).json(newBlog);
};

const updateBlog = (req, res) => {
  const { id } = req.params;

  console.log("id", id);
  console.log("body", req.body);

  const updatedBlogs = blogsData.map((blog) => {
    if (Number(id) === blog.id) {
      return {
        ...blog,
        ...req.body,
      };
    }

    return blog;
  });

  blogsData = updatedBlogs;

  res.send("updated");
};

const deleteSingleBlog = (req, res) => {
  const { id } = req.params;

  const newBlogsData = blogsData.filter((blog) => {
    if (blog.id === Number(id)) {
      return false;
    } else {
      return true;
    }
  });

  blogsData = newBlogsData;

  res.status(204).json({ message: "blog deleted successfully" });
};

module.exports = {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteSingleBlog,
};
