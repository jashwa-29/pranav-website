import React from 'react';

const Blogs = () => {
  // Array of blog data
  const blogs = [
    {
      title: 'The latest news with Flowspark',
      category: 'Lifestyle',
      description:
        'Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis.',
      imgSrc:
        'https://i.pinimg.com/736x/f1/c7/1e/f1c71ed1586390fe809406f5b31038d7.jpg',
      author: 'Laila Bahar',
      date: 'Sept 28, 2022',
      readTime: '6 mins read',
    },
    {
      title: 'The latest news with Flowspark',
      category: 'Lifestyle',
      description:
        'Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis.',
      imgSrc:
        'https://i.pinimg.com/736x/9a/d9/89/9ad98925c9f403f99e8d471c7e0de430.jpg',
      author: 'Laila Bahar',
      date: 'Sept 28, 2022',
      readTime: '6 mins read',
    },
    {
      title: 'The latest news with Flowspark',
      category: 'Lifestyle',
      description:
        'Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis.',
      imgSrc:
        'https://i.pinimg.com/564x/df/81/ff/df81ff756d7b232bf5e54a82e9fb3243.jpg',
      author: 'Laila Bahar',
      date: 'Sept 28, 2022',
      readTime: '6 mins read',
    },
  ];

  return (
    <section>
      {/* Container */}
      <div className="lg:w-11/12 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            The latest and greatest news
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          {/* Content */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 hover:shadow-md transition ease-in-out overflow-hidden hover:scale-105 px-4 py-8 md:p-0"
              >
                <img
                  src={blog.imgSrc}
                  alt=""
                  className="h-60 object-cover" // Add border radius to the image
                />
                <div className="px-6 py-4">
                  <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                    {blog.category}
                  </p>
                  <p className="mb-4 text-xl font-semibold">{blog.title}</p>
                  <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                    {blog.description}
                  </p>
                  <div className="flex">
                    <div className="flex flex-col">
                      <div className="flex flex-col lg:flex-row">
                        <p className="text-sm text-gray-500">{blog.date}</p>
                        <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                          -
                        </p>
                        <p className="text-sm text-gray-500">{blog.readTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {/* Button */}
          <a
            href="#"
            className="rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
