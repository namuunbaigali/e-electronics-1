import { IMovie } from "@/interface/movie";
import { GetStaticPropsContext } from "next";
// import Image from "next/image";
// import { useRouter } from "next/router";
import { FC, useState } from "react";

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:7070/api/movies/ids");
  const data = await response.json();
  const paths = data.map((_id: string) => ({
    params: {
      _id,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const response = await fetch(
    `http://localhost:7070/api/movies/${params?._id}`
  );
  const data = await response.json();
  return { props: { data } };
};

interface Props {
  data: IMovie;
}

const Index: FC<Props> = ({ data }) => {
  const [movie, setMovie] = useState<IMovie | undefined>(data);
  // const { query } = useRouter();

  // useEffect(() => {
  //   if (query._id) {
  //     fetch("http://localhost:7070/api/movies/" + query._id)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMovie(data);
  //       });
  //   }
  // }, [query._id]);

  if (!movie) return <h1>Movie not found</h1>;

  return (
    <>
      <div className="container m-auto">
        <img
          src={movie.poster}
          className="w-screen py-3 w-full aspect-[100/75] h-full object-cover rounded"
        />

        <div className="grid grid-cols-3 gap-4  h-8 ">
          <img src={movie.poster} className="col-span-1 h-64 w-full rounded " />

          <div className="col-span-2 border text-center bg-slate-200 rounded p-10 h-64 ">
            <h1 className="text-3xl font-bold py-2">{movie.title}</h1>
            <div className="flex m-auto justify-center">
              <p className="border rounded w-12">PG</p>
              <p>
                {movie.year} ,{movie.genres} ,{movie.runtime}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="w-24  m-auto flex grid grid-cols-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rotten_Tomatoes_rotten.svg/290px-Rotten_Tomatoes_rotten.svg.png?20200101020019"
                  className="grid grid-cols-2"
                />
                <p className="text-3xl">{movie.imdb.rating}</p>
                <h1>TOMATOMETER</h1>
              </div>
              <div className="w-24  m-auto flex grid grid-cols-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBW18NwiOZRtRbQP4gg2lPGpAVil5Xommzw&usqp=CAU" />
                <p className="text-3xl">{movie.imdb.rating}</p>
                <h1>AUDIENCE SCORE</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="pt-64">
          <div>
            <h1 className="py-3 font-bold ">MOVIE INFO</h1>
          </div>
          <p className="py-5">{movie.fullplot}</p>
        </section>

        <section className="font-bold">
          <h1>{` Rating: PG(${movie.imdb.rating})`}</h1>

          <h1>{` Language: ${movie.languages}`}</h1>
          <h1>{` Director: ${movie.directors}`}</h1>
          <h1>{` Producer: ${movie.cast}`}</h1>
          <h1>{` Writer: ${movie.writers}`}</h1>
          <h1>{` Runtime: ${movie.runtime}`}</h1>
        </section>
      </div>
    </>
  );
};

export default Index;
