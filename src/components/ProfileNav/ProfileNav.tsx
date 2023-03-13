import Link from "next/link";
import { useRouter } from "next/router";


export default function ProfileNav() {
  const router = useRouter()

  function handleClick(pathName: string) {
    const { hash } = window.location;
    router
      .push(
        {
          pathname: '/profile',
          query: {pathName}
        }).then(() => {
          if (hash)
          router.push(hash)
        })
  }
  return (
    <div>
        <Link href="#" onClick={() => handleClick("Characters")}>
          Characters
        </Link>
        <Link href="#" onClick={() => handleClick("Journal")}>
          Journal
        </Link>
    </div>
  );
}


