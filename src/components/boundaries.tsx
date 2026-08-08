interface Degree {
  action: string
  degree: 1 | 2 | 3 | 4
}

const colorMap: Record<Degree["degree"], string> = {
  1: "◎",
  2: "〇",
  3: "△",
  4: "×",
}

export function BoundariesPropCard(degree: Degree) {
  const degreeMap = colorMap[degree.degree]
  return (
    <div className="flex min-h-14 w-full flex-row items-center gap-1 rounded-lg border border-gray-400 px-3 sm:min-h-15 sm:px-4">
      <p className="text-base font-light text-white/80 sm:text-lg">
        {degree.action}: {degreeMap}
      </p>
    </div>
  )
}
