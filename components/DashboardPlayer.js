// "use client";

// import { useState } from "react";
// import ReactPlayer from "react-player";
// import { signOut } from "next-auth/react";
// import Logo from "./Logo";

// export default function DashboardPlayer({ session }) {
//   const [url, setUrl] = useState("");
//   const [playUrl, setPlayUrl] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePlay = () => {
//     if (!url.trim()) {
//       setError("Please enter a video URL");
//       return;
//     }

//     setError("");
//     setIsLoading(true);
//     setPlayUrl(url.trim());
//   };

//   return (
//     <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_30%),#050816] text-white">

//       {/* HEADER */}
//       <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
//         <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

//           <div className="flex items-center gap-4">
//             <Logo compact />

//             <div>
//               <h1 className="text-2xl font-bold">
//                 StreamVault
//               </h1>

//               <p className="text-slate-400 text-sm">
//                 Welcome back, {session.user.name}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             {session.user.image && (
//               <img
//                 src={session.user.image}
//                 alt="Profile"
//                 className="h-11 w-11 rounded-full border border-white/10"
//               />
//             )}

//             <button
//               onClick={() =>
//                 signOut({
//                   callbackUrl: "/",
//                 })
//               }
//               className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 font-semibold shadow-lg hover:scale-105 transition"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* MAIN */}
//       <main className="mx-auto max-w-7xl px-6 py-8">

//         {/* INPUT CARD */}
//         <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 backdrop-blur-xl p-8 shadow-2xl">

//           <p className="uppercase tracking-[0.25em] text-sky-300 text-sm">
//             Universal Video Player
//           </p>

//           <h2 className="mt-3 text-4xl font-bold">
//             Play Any Video URL Instantly
//           </h2>

//           <p className="mt-4 text-slate-400 max-w-2xl">
//             Paste a YouTube or direct video URL and start watching instantly.
//           </p>

//           <div className="mt-8 flex flex-col lg:flex-row gap-4">

//             <input
//               type="text"
//               placeholder="https://youtube.com/watch?v=..."
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               className="flex-1 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 outline-none focus:border-sky-500"
//             />

//             <button
//               onClick={handlePlay}
//               className="rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-8 py-4 font-semibold shadow-lg hover:scale-105 transition"
//             >
//               Play Video
//             </button>
//           </div>

//           <div className="mt-4 text-sm text-slate-400">
//             Supported URLs: YouTube, Vimeo, MP4
//           </div>

//           {error && (
//             <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-300">
//               {error}
//             </div>
//           )}
//         </div>

//         {/* PLAYER CARD */}
//         <div className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/80 backdrop-blur-xl p-6 shadow-2xl">

//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <p className="uppercase tracking-[0.25em] text-sky-300 text-sm">
//                 Video Player
//               </p>

//               <h3 className="text-2xl font-bold mt-2">
//                 Preview
//               </h3>
//             </div>

//             <div className="text-sm text-slate-400">
//               Responsive Player
//             </div>
//           </div>

//           <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

//             <div className="aspect-video">

//               {!playUrl ? (
//                 <div className="flex h-full items-center justify-center text-slate-500 text-center px-4">
//                   Paste a video URL above and click Play Video.
//                 </div>
//               ) : (
//                 <ReactPlayer
//                   src={playUrl}
//                   controls
//                   width="100%"
//                   height="100%"
//                   onReady={() => setIsLoading(false)}
//                 />
//               )}

// {isLoading && playUrl && (
//   <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur">
    
//     <div className="h-14 w-14 animate-spin rounded-full border-4 border-sky-500 border-t-transparent" />

//     <p className="mt-5 text-slate-300 font-medium">
//       Preparing your video...
//     </p>

//   </div>
// )}
//             </div>
//           </div>
//         </div>

//       </main>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Logo from "./Logo";
import VideoPlayer from "./VideoPlayer";

export default function DashboardPlayer({ session }) {
  const [url, setUrl] = useState("");
  const [playUrl, setPlayUrl] = useState("");
  const [error, setError] = useState("");

  const handlePlay = () => {
    if (!url.trim()) {
      setError("Please enter a video URL");
      return;
    }

    setError("");
    setPlayUrl(url.trim());
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_30%),#050816] text-white">
      
      {/* HEADER */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <Logo compact />

            <div>
              <h1 className="text-2xl font-bold">
                StreamVault
              </h1>

              <p className="text-slate-400 text-sm">
                Welcome back, {session.user.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {session.user.image && (
              <img
                src={session.user.image}
                alt="Profile"
                className="h-11 w-11 rounded-full border border-white/10"
              />
            )}

            <button
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
              className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 font-semibold shadow-lg hover:scale-105 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* INPUT CARD */}
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 backdrop-blur-xl p-8 shadow-2xl">

          <p className="uppercase tracking-[0.25em] text-sky-300 text-sm">
            Universal Video Player
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Play Any Video URL Instantly
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl">
            Paste a YouTube, MP4, HLS (.m3u8) or cloud video URL and start watching instantly.
          </p>

          <div className="mt-8 flex flex-col lg:flex-row gap-4">

            <input
              type="text"
              placeholder="https://youtube.com/watch?v=..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlePlay();
                }
              }}
              className="flex-1 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 outline-none focus:border-sky-500"
            />

            <button
              onClick={handlePlay}
              className="rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-8 py-4 font-semibold shadow-lg hover:scale-105 transition"
            >
              Play Video
            </button>
          </div>

          <div className="mt-4 text-sm text-slate-400">
            Supported URLs: YouTube, Vimeo, MP4, HLS (.m3u8)
          </div>

          {error && (
            <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-300">
              {error}
            </div>
          )}
        </div>

        {/* PLAYER CARD */}
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/80 backdrop-blur-xl p-6 shadow-2xl">

          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="uppercase tracking-[0.25em] text-sky-300 text-sm">
                Video Player
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Preview
              </h3>
            </div>

            <div className="text-sm text-slate-400">
              Responsive Player
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

            <div className="aspect-video">
              {!playUrl ? (
                <div className="flex h-full items-center justify-center text-slate-500 text-center px-4">
                  Paste a video URL above and click Play Video.
                </div>
              ) : (
                <VideoPlayer url={playUrl} />
              )}
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}