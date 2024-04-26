import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2><Link href="/count01">React_Count01</Link></h2>
      <h2><Link href="/count02">Modx_Count02(클래스)</Link></h2>
      <h2><Link href="/count03">Modx_Count03(함수)</Link></h2>
      <h2><Link href="/count04">Modx_Count04(함수)</Link></h2>
    </>
  );
}
