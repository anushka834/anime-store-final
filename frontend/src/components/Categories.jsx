function Categories() {

  const animeList = [
    "Naruto",
    "One Piece",
    "Dragon Ball",
    "Demon Slayer",
  ]

  return (
    <section className="bg-zinc-950 text-white py-16">

      <h2 className="text-4xl font-bold text-center mb-12">
        Categories
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">

        {animeList.map((anime, index) => (
          <div
            key={index}
            className="bg-zinc-900 px-10 py-8 rounded-2xl hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-2xl font-semibold">
              {anime}
            </h3>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Categories