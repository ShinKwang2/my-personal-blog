export function AuthorProfile() {
  return (
    <>
      <hr className="my-8 border-neutral-200 dark:border-neutral-700" />
      <div className="flex items-start gap-4">
        <img
          src="/profile.png"
          alt="작가 프로필 사진"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">
            My Portfolio
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            I'm a Vim enthusiast and tab advocate, finding unmatched efficiency
            in Vim's keystroke commands and tabs' flexibility for personal
            viewing preferences.
          </p>
        </div>
      </div>
    </>
  )
}
