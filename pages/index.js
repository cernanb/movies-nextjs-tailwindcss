import Head from "next/head";
import styles from "../styles/Home.module.css";

function Home(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Next.js TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div class="mt-10">
        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {props.movies.map((movie) => {
            return (
              <li class="col-span-1 bg-white rounded-lg shadow">
                <div class="w-full flex items-center justify-between p-6 space-x-6">
                  <div class="flex-1">
                    <div class="flex items-center space-x-3">
                      <h3 class="text-gray-900 text-sm leading-5 font-medium truncate">
                        {movie.title}
                      </h3>
                      <span class="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                        {movie.year}
                      </span>
                    </div>
                    <p class="mt-1 text-gray-500 text-sm leading-5 .break-words">
                      {movie.info.plot}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("http://127.0.0.1:3001/movies");

  const json = await res.json();
  console.log(json);
  return { movies: json.movies.Items };
};

export default Home;
