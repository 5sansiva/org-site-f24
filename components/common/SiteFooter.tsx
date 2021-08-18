import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-ais-black text-white">
      <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl grid grid-cols-2 justify-between gap-4 p-4 ">
        <div>
          <div className="text-lg font-bold">Sitemap</div>
          <div>
            <div className="block">
              <Link href="/events">Events</Link>
            </div>
            <div className="block">
              <Link href="/team">Team</Link>
            </div>
            <div className="block">
              <Link href="/about">About</Link>
            </div>
            <div className="block">
              <Link href="/join">Join</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg font-bold">Socials</div>
          <ul>
            <div>
              <div className="">
                <Link href="/dc">Discord</Link>
              </div>
              <div className="">
                <Link href="/fb">Facebook</Link>
              </div>
              <div className="">
                <Link href="/ig">Instagram</Link>
              </div>
              <div className="">
                <Link href="/linkedin">LinkedIn</Link>
              </div>
              <div className="">
                <Link href="/yt">Youtube</Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
