// Waitlist API service for SaveApp

const WAITLIST_API_URL = "https://api.getwaitlist.com/api/v1/signup"
const WAITLIST_ID = 29910

export async function joinWaitlist(email: string) {
  const response = await fetch(WAITLIST_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      waitlist_id: WAITLIST_ID,
    }),
  })
  if (!response.ok) throw new Error("API error")
  return response.json()
}

export async function submitWaitlistSurvey(email: string, answers: any[]) {
  const response = await fetch(WAITLIST_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      waitlist_id: WAITLIST_ID,
      answers,
    }),
  })
  if (!response.ok) throw new Error("API error")
  return response.json()
}

export async function getWaitlistQuestions() {
  const WAITLIST_CONFIG_URL = `https://api.getwaitlist.com/api/v1/waitlist/${WAITLIST_ID}`
  const response = await fetch(WAITLIST_CONFIG_URL)
  if (!response.ok) throw new Error("API error")
  const data = await response.json()
  return data.questions
} 