import { useWeb3 } from "@components/providers";
import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { WalletBar } from "@components/ui/web3";
import { getAllCourses } from "@content/courses/fetcher";
import { useAccount } from "@components/hooks/web3/useAccount";

export default function Marketplace({ courses }) {
  const { web3, isLoading } = useWeb3();
  // console.log("Data: ", data);
  const { account } = useAccount();
  return (
    <>
      <div className="py-4">
        <WalletBar address={account.data} />
      </div>
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
