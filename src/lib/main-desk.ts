export interface Desk {
  id: string
  subdesks: Desk[]
}

export function getMainDeskMap(desks: Desk[]): Map<string, string> {
  return new Map<string, string>(
    desks.flatMap((mainDesk) => {
      return [[mainDesk.id, mainDesk.id], ...mainDesk.subdesks.map((subDesk) => [subDesk.id, mainDesk.id] as const)]
    })
  )
}
