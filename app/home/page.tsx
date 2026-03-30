import Link from "next/link";
import Review2 from "../components/Review2";

// Review Type (matches your Review2 component)
interface Review {
  image?: string;
  user_name?: string;
  review_text?: string;
}

async function getReviews(): Promise<Review[]> {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_SITE_URL
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/comments.json`
        : "http://localhost:3000/comments.json",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data = await res.json();
    return data.reviews ?? [];
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return [];
  }
}

export default async function Home() {
  const reviews = await getReviews();

  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/heroVideo.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <br />
            <br />
            <span className="text-8xl text-amber-400 bg-white rounded-4xl px-7 font-bold">
              KureGhar
            </span>
          </h1>
          <br />
          <p className="text-lg font-bold">Pure organic products straight from nature 🌿</p>
          <br />
          <br />
          <Link href="/signup">
            <button className="btn bg-amber-400 text-white px-6 py-2 rounded-xl hover:bg-amber-500 text-xl font-bold">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* ── Rooms ── */}
      <div>
        <div className="text-8xl text-amber-400 bg-white rounded-4xl px-7 font-bold text-center my-10">
          Our Rooms
        </div>
        <div className="flex flex-col border border-amber-50">
          <div className="flex justify-between">
            <div className="bg-amber-100 px-20 text-amber-100 rounded-t-full">k</div>
            <div className="my-10 flex gap-5">
              <img 
                src="/single Room-Picsart-AiImageEnhancer.jpg" 
                alt="Single Room" 
                className="w-60 rounded-4xl" 
              />
              <div className="flex justify-center flex-col">
                <p className="text-5xl font-extrabold mb-5">Single Room</p>
                <p className="my-2"><span className="font-bold">People :</span> 2</p>
                <p className="my-2">
                  <span className="font-bold">About :</span> Our Single Room offers a cozy space for one guest,
                  <br /> featuring a comfortable bed, private bathroom,
                  <br /> free Wi-Fi, and air conditioning — perfect
                  <br /> for solo travelers seeking comfort and privacy.
                </p>
                <p className="my-2"><span className="font-bold">Price : </span>350tk</p>
              </div>
            </div>
            <div className="bg-amber-100 px-20 text-amber-100 rounded-t-full">k</div>
          </div>

          <div className="flex justify-between">
            <div className="bg-amber-100 px-20 text-amber-100">k</div>
            <div className="my-10 flex gap-5">
              <div className="flex justify-center flex-col">
                <p className="text-5xl font-extrabold mb-5 text-end">Small Family</p>
                <p className="my-2 text-end"><span className="font-bold">People :</span> 4</p>
                <p className="my-2 text-end">
                  <span className="font-bold">About :</span> Our Small Family Room is perfect for a small
                  <br /> family, offering a spacious setup with comfortable beds, a private
                  <br /> bathroom, free Wi-Fi, and modern amenities for
                  <br /> a relaxing stay together.
                </p>
                <p className="my-2 text-end"><span className="font-bold">Price : </span>750tk</p>
              </div>
              <img 
                src="/family Room-Picsart-AiImageEnhancer.jpg" 
                alt="Family Room" 
                className="w-60 rounded-4xl" 
              />
            </div>
            <div className="bg-amber-100 px-20 text-amber-100">k</div>
          </div>

          <div className="flex justify-between">
            <div className="bg-amber-100 px-20 text-amber-100">k</div>
            <div className="my-10 flex gap-5">
              <Link href="/rooms">
                <button className="btn bg-amber-400 text-white px-6 py-2 rounded-xl hover:bg-amber-500">
                  More Rooms
                </button>
              </Link>
            </div>
            <div className="bg-amber-100 px-20 text-amber-100">k</div>
          </div>
        </div>
      </div>

      {/* ── Foods ── */}
      <div>
        <div className="flex justify-between">
          <div className="bg-amber-100 px-20 text-amber-100">k</div>
          <div className="my-10 flex gap-5">
            <div>
              <div className="text-8xl text-amber-400 bg-white rounded-4xl px-7 font-bold text-center my-10">
                Our Foods
              </div>
              <div className="bg-yellow-200 flex justify-center items-center flex-col rounded-4xl m-20">
                <img src="/food_menu.gif" alt="Food Menu" className="pt-10" />
                <img src="/morning food manu.gif" alt="Morning Menu" />
                <img src="/day food manu.gif" alt="Day Menu" />
                <img src="/night food manu.gif" alt="Night Menu" className="pb-10" />
              </div>
            </div>
          </div>
          <div className="bg-amber-100 px-20 text-amber-100">k</div>
        </div>
      </div>

      {/* ── Gallery ── */}
      <div>
        <div className="flex justify-between">
          <div className="bg-amber-100 px-20 text-amber-100">k</div>
          <div className="my-10 flex gap-5">
            <div>
              <div className="text-8xl text-amber-400 bg-white rounded-4xl font-bold text-center my-10 px-130">
                Our Gallery
              </div>
              <div>
                <div>
  <div className="flex justify-between">
    <div className="bg-amber-100 px-20 text-amber-100">k</div>
    <div className="my-10 flex gap-5">
      <div>
        <div className="text-8xl text-amber-400 bg-white rounded-4xl font-bold text-center my-10 px-130">
          Our Gallery
        </div>

        {/* Modern Infinite Scrolling Gallery - No TypeScript Error */}
        <div className="overflow-hidden py-6">
          <div className="flex gap-4 animate-gallery">
            {[
              21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
              1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
            ].map((n, i) => (
              <img
                key={i}
                src={`/unnamed${n <= 20 ? ` (${n})` : `-${n}`}.jpg`}
                alt={`Gallery image ${n}`}
                className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
              />
            ))}
            {/* Duplicate for seamless infinite loop */}
            {[
              21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
              1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
            ].map((n, i) => (
              <img
                key={`dup-${i}`}
                src={`/unnamed${n <= 20 ? ` (${n})` : `-${n}`}.jpg`}
                alt={`Gallery image ${n}`}
                className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="bg-amber-100 px-20 text-amber-100">k</div>
  </div>
</div>
              </div>
            </div>
          </div>
          <div className="bg-amber-100 px-20 text-amber-100">k</div>
        </div>
      </div>

      {/* ── Services ── */}
      <div>
        <div className="flex justify-between">
          <div className="bg-amber-100 px-20 text-amber-100">k</div>
          <div className="my-10 flex gap-5 w-full">
            <div className="w-full">
              <div className="text-8xl text-amber-400 bg-white rounded-4xl px-7 font-bold text-center my-15">
                Our Services
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { 
                    bg: "unnamed-39.jpg", 
                    title: "আম বাগান ও অন্যান্য", 
                    desc: "আশেপাশে প্রচুর আম বাগান, আমাদের ত আছেই । সারাদিন বাগানেই থাকা যাবে, রান্নাও করা যাবে । চাইলে আম গাছের যত্ন, আম বাগান নিয়ে ধারনা নিতে পারবেন। এছাড়া আমাদের কফি বাগান, ড্রাগন বাগান আখের খেত রয়েছে ।" 
                  },
                  { 
                    bg: "unnamed-35.jpg", 
                    title: "গরু, ৪০০/৫০০ গরু", 
                    desc: "এক সাথে সর্বোচ্চ কত গরু দেখেছেন ? এই এলাকার মাঠে এক সাথে হাজার গরুও চড়ে বেড়ায় । গলায় দড়ি না থাকা এইসব গরু যখন লেজ তুলে দৌড় দেয় সে এক দেখার মত দৃশ্য বটে ।" 
                  },
                  { 
                    bg: "unnamed-24.jpg", 
                    title: "শান্ত স্নিগ্ধ গ্রাম", 
                    desc: "এদিকের মাটির বাড়ির ঐতিহ্য, সাথে ৯০ দশকের শান্ত গ্রাম এই এলাকাকে করেছে অদ্বিতীয় । বিল, পাহাড়ী টিলা মত ঢেউ খেলানো ফসলের মাঠ আর ফল বাগানের সবুজ চোখ জুড়িয়ে দেয়ার মত বিষয় ।" 
                  },
                  { 
                    bg: "unnamed-16.jpg", 
                    title: "গ্রামের হাট", 
                    desc: "গ্রামের হাটে, গরম ভাতের সাথে হাসের মাংস দুর্দান্ত মজার । সাথে শনিবারের এই হাটে, মাটির পাতিলের দোকান, গরু, ছাগল, হাস মুরগি সহ সবকিছুই পাওয়া যায় ।" 
                  },
                  { 
                    bg: "unnamed-18.jpg", 
                    title: "বিল, হাওরের মতই সুন্দর", 
                    desc: "এখানে কয়েক কিলোমিটার ব্যাপি বিস্তৃত বিল দারুন সুন্দর । সাথে আছে নৌকায় চড়ে বেড়ানর সুবিধা, হরেক রকম পাখি, মাছরাঙ্গা, অতিথি পাখি সহ কালো আর সাদা বক আর অগুনতি ঘুঘু এই এলাকাকে করেছে অনন্য ।" 
                  },
                  { 
                    bg: "unnamed-17.jpg", 
                    title: "প্রজেক্ট বর্গা", 
                    desc: "আমাদের প্রজেক্ট বর্গার গরুর সাথে সময় কাটাতে চান ? অথবা আমাদের বাগানের টুকটাক কাজ – সময় ত এভাবেই বই পড়তে আর ঘুমিয়ে আর বেড়িয়ে চলে যাবে !" 
                  },
                ].map((s, i) => (
                  <div 
                    key={i} 
                    className="rounded-xl" 
                    style={{ 
                      backgroundImage: `url('/${s.bg}')`, 
                      backgroundSize: "cover", 
                      backgroundRepeat: "no-repeat" 
                    }}
                  >
                    <p className="text-3xl font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      {s.title}
                    </p>
                    <p className="font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-amber-100 px-20 text-amber-100">k</div>
        </div>
      </div>

      {/* ── Reviews ── (Fixed) */}
      <div className="flex justify-between">
        <div className="bg-amber-100 px-20 text-amber-100">k</div>
        <div>
          <div className="text-8xl text-amber-400 bg-white rounded-4xl font-bold text-center my-10">
            Customer Review
          </div>

          {/* Modern Marquee using CSS (No TypeScript error) */}
          <div className="overflow-hidden py-8">
            <div className="flex gap-6 animate-marquee">
              {reviews.length > 0 ? (
                [...reviews, ...reviews].map((item, i) => (
                  <Review2 key={i} data={item} />
                ))
              ) : (
                <p className="text-gray-500 text-center py-10 w-full">No customer reviews available yet.</p>
              )}
            </div>
          </div>
        </div>
        <div className="bg-amber-100 px-20 text-amber-100">k</div>
      </div>

      {/* ── Book Now CTA ── */}
      <div className="flex justify-between">
        <div className="bg-amber-100 px-20 text-amber-100">k</div>
        <div className="my-10 text-center">
          <div className="text-4xl font-bold mb-4">So, What Are You Waiting For?</div>
          <Link href="/signup">
            <div className="btn bg-amber-400 text-white px-6 py-2 rounded-xl hover:bg-amber-500">
              Book Now
            </div>
          </Link>
        </div>
        <div className="bg-amber-100 px-20 text-amber-100">k</div>
      </div>
    </div>
  );
}