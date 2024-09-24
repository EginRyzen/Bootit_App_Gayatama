
export default function Home() {
  return (
    <>
      <main>
        {/* Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-12 gap-3 justify-between">
            <div className="flex flex-col w-[50%] my-10 px-10">
              <div className="text-3xl font-normal text-[#3a3f47]">
                Bangun Karirmu Sebagai Developer Profesional
              </div>
              <p className="text-sm font-light text-[#3a3f47] my-4">
                Mulai belajar terarah dengan learning path
              </p>
              <div className="mt-10">
                <button
                  type="button"
                  className="text-white bg-[#3a3f47] hover:text-white border border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#3a3f47] dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all duration-500 ease-in-out"
                >
                  Belajar Sekarang
                </button>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="w-full">
                <img src="homepage-hero.png" />
              </div>
            </div>
          </div>
        </div>

        {/* section */}
        <div className="w-full bg-[#e6e6e6] my-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center text-3xl font-normal text-[#3a3f47]">
              Learning Path
            </div>
            <p className="text-center text-sm font-light text-[#3a3f47] my-4 w-1/2 mx-auto">
              Learning path akan membantu Anda dalam belajar di Academy dengan kurikulum yang dibangun bersama pelaku industri ternama.
            </p>
          </div>
        </div>

        {/* SlideShow */}
        <div className="flex overflow-hidden space-x-16 group pt-10 pb-20">
          <div className="flex space-x-32 animate-loop-scroll group-hover:paused">
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-google.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-microsoft.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-aws.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-google.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-microsoft.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-aws.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
          </div>

          <div className="flex space-x-32 animate-loop-scroll group-hover:paused" aria-hidden="true">
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-google.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-microsoft.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-aws.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-google.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-microsoft.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-aws.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
          </div>
        </div>

        {/* About Boot.IT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/2 px-10">
              <div className="text-3xl font-normal text-[#3a3f47]">Event Bootcamp</div>
              <p className="my-5 text-start font-sm text-[#3a3f47] text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="w-1/2 px-10 me-10">
              <div className="w-full">
                <img src="https://d168wuuhrgvlrj.cloudfront.net/cloudfront/templates/v1/landing/free%202_11zon.png" className="float-end" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="w-1/2 px-10 ms-10">
              <div className="w-full">
                <img src="https://d168wuuhrgvlrj.cloudfront.net/cloudfront/templates/v1/landing/free%203_11zon.png" className="float-start" />
              </div>
            </div>
            <div className="w-1/2 px-10">
              <div className="text-3xl text-end font-normal text-[#3a3f47]">Event Meet Up</div>
              <p className="my-5 text-start font-sm text-[#3a3f47] text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="w-1/2 px-10">
              <div className="text-3xl font-normal text-[#3a3f47]">Event Competition</div>
              <p className="my-5 text-start font-sm text-[#3a3f47] text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,
              </p>
            </div>
            <div className="w-1/2 px-10 me-10">
              <div className="w-full">
                <img src="https://d168wuuhrgvlrj.cloudfront.net/cloudfront/templates/v1/landing/free%202_11zon.png" className="float-end" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
