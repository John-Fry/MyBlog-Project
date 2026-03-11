const rtf = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" })

export function timeAgo(date: Date): string {
  const diff = (date.getTime() - Date.now()) / 1000

  const intervals = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 }
  ] as const

  for (const interval of intervals) {
    const value = diff / interval.seconds

    if (Math.abs(value) >= 1) {
      return rtf.format(Math.round(value), interval.unit)
    }
  }

  return "agora mesmo"
}