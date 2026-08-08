interface State {
  color: "blue" | "green" | "yellow" | "red"
  comment: string
}

const colorMap: Record<State["color"], string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  red: "bg-red-500",
}

export function VrcState(state: State) {
  const color = colorMap[state.color]
  return (
    <div className="flex flex-row items-center gap-1">
      <div className={`h-4 w-4 shrink-0 rounded-full ${color}`} />
      <p className="text-sm font-light text-white/80">{state.comment}</p>
    </div>
  )
}
