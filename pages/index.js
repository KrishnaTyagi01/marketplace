import { useWeb3 } from "@components/providers";
import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";

export default function Home({ courses }) {
  const { web3, isLoading } = useWeb3();
  // console.log("Data: ", data);

  return (
    <>
      {isLoading
        ? "Web3 loading"
        : web3
        ? "web3 Ready"
        : "Please Install metamask"}

      <Hero />

      <CourseList courses={courses} />
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}
