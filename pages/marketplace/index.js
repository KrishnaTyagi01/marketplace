import { useWeb3 } from "@components/providers";
import { Hero } from "@components/ui/common";
import { CourseList, CourseCard } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { WalletBar } from "@components/ui/web3";
import { getAllCourses } from "@content/courses/fetcher";
import { useAccount, useNetwork } from "@components/hooks/web3";

export default function Marketplace({ courses }) {
  const { web3, isLoading } = useWeb3();
  // console.log("Data: ", data);
  const { account } = useAccount();
  const { network } = useNetwork();

  console.log("Network: ", network);
  return (
    <>
      <div className="py-4">
        <WalletBar
          address={account.data}
          network={{
            data: network.data,
            target: network.target,
            isSupported: network.isSupported,
            hasInitialResponse: network.hasInitialResponse,
          }}
        />
        "Current" {`${network.data}`}
        "Target" {`${network.target}`}
        "Is Supported" {`${network.isSupported}`}
      </div>
      <CourseList courses={courses}>
        {(course) => <CourseCard key={course.id} course={course} />}
      </CourseList>
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
