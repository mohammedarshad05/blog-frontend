export default function Hero() {
  return (
    <section>
      <div className="lg:container mx-auto px-4">
        <div className="text-center mt-16">
          <h1 className="text-[56px] font-bold text-[#1c1c1c]">The Journal</h1>
          <p className="text-base text-[#6b6a65] ">Thoughtful essays and ideas from writers who care about craft.</p>
        </div>

        <div className="flex justify-center mt-[48px]">
          <div className="bg-white rounded-[4px] border border-[#e5e4df] py-3 px-4 max-w-md w-full">
            <p>Search articles...</p>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="flex gap-2 ">
            <p className="text-sm text-[#4a4a44] bg-[#f0efe9] rounded-[20px] py-2 px-3">All</p>
            <p className="text-sm text-[#4a4a44] bg-[#f0efe9] rounded-[20px] py-2 px-3">Culture</p>
            <p className="text-sm text-[#4a4a44] bg-[#f0efe9] rounded-[20px] py-2 px-3">Technology</p>
            <p className="text-sm text-[#4a4a44] bg-[#f0efe9] rounded-[20px] py-2 px-3">Design</p>
            <p className="text-sm text-[#4a4a44] bg-[#f0efe9] rounded-[20px] py-2 px-3">Travel</p>
            <p className="text-sm text-[#4a4a44] bg-[#f0efe9] rounded-[20px] py-2 px-3">Food</p>
          </div>
        </div>
      </div>
    </section>
  )
}