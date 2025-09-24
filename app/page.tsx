"use client"; // 👈 this makes it a Client Component

import { appUrl } from "./services/config";
import { useSearchParams } from "next/navigation";

// const userId = "3758";
const baseUrl = appUrl;
console.log(baseUrl);
// const imageUrl = `https://twitter-og-beta.vercel.app/ETH_USD?side=BUY&leverage=1010&pnl=0&price=100`;


export default function Home() {
  const randomNumber = Math.floor(Math.random() * (3800 - 3400 + 1)) + 3400;
  const searchParams = useSearchParams();
  const userId = searchParams.get("user_id");
  console.log(userId, '======================================');
  const imageUrl = `${baseUrl}/api/og?user_id=${userId}`;
  console.log(randomNumber, '======================================');
  const shareimageUrl = `${baseUrl}?user_id=${randomNumber}`;

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=Check out this image!&url=${encodeURIComponent(
      shareimageUrl
    )}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-8">Twitter Image Share Demo</h1>

        <div className="mb-8">
          <img
            src={imageUrl}
            alt="Shareable image"
            width={400}
            height={200}
            className="mx-auto border rounded"
          />
        </div>

        <button
          onClick={shareToTwitter}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Share to Twitter
        </button>
      </div>
    </div>
  );
}
