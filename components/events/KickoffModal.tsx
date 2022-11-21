import Link from 'next/link';
import CloseRoundedIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';

export default function KickoffModal() {
  const [buttonPopup, setButtonPopup] = useState(true);
  return buttonPopup ? (
    <div
      className="fixed inset-0 bg-ais-white bg-opacity-75 flex items-center justify-center"
      onClick={() => setButtonPopup(false)}
    >
      <div className="relative">
        <button className="absolute right-0 sm:-mr-10 -mt-10">
          <CloseRoundedIcon fontSize="large" />
        </button>
        <Link href="/events/kickoff-f21">
          <button>
            <img src="AISKickoff.gif" className="max-w-xs md:max-w-lg lg:max-w-2xl" />
          </button>
        </Link>
      </div>
    </div>
  ) : null;
}
