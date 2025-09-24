
import Link from "next/link";
import { appUrl } from "./services/config";

const baseUrl = appUrl;
console.log(baseUrl);
// const imageUrl = `https://twitter-og-beta.vercel.app/ETH_USD?side=BUY&leverage=1010&pnl=0&price=100`;

export default async function Home({ searchParams }: { searchParams: Promise<{ user_id?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const user_id = resolvedSearchParams?.user_id ?? "3758"; // fallback if missing

  const randomNumber = Math.floor(Math.random() * (3800 - 3100 + 1)) + 3200;
  // const userId = searchParams.get("user_id");
  console.log(user_id, '======================================');
  const imageUrl = `${baseUrl}/api/og?user_id=${user_id}`;
  // console.log(randomNumber, '======================================');
  const shareimageUrl = `${baseUrl}?user_id=${randomNumber}`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=Check out this image!&url=${encodeURIComponent(
    shareimageUrl
  )}`;
  // const shareToTwitter = () => {
   
  //   window.open(twitterUrl, "_blank");
  // };

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

        <Link
          href={twitterUrl}  target="_blank"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Share to Twitter
        </Link>
      </div>
    </div>
  );
}
