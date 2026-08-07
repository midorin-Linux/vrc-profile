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
    <div className="flex h-15 w-full flex-row items-center gap-1 rounded-lg border border-gray-400 pl-4">
      <p className="text-lg font-light text-white/80">
        {degree.action}: {degreeMap}
      </p>
    </div>
  )
}
