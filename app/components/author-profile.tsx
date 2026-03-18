type Author = {
  name: string
  bio: string
  avatarUrl: string
}

export function AuthorProfile({ author }: { author: Author }) {
  return (
    <>
      <hr className="my-8 border-neutral-200 dark:border-neutral-700" />
      <div className="flex items-start gap-4">
        <img
          src={author.avatarUrl}
          alt={`${author.name} 프로필 사진`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">
            {author.name}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            {author.bio}
          </p>
        </div>
      </div>
    </>
  )
}
