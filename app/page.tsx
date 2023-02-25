import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function IndexPage() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/foo">To Foo</Link>
        </li>
        <li>
          <Link href="/bar">To Bar</Link>
        </li>
      </ul>
    </div>
  );
}
