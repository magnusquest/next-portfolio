//send email using server actions
export async function sendEmail(
  to: string,
  from: string,
  subject: string,
  body: string
) {
  const response = await fetch("/.netlify/functions/send-email", {
    method: "POST",
    body: JSON.stringify({ to, from, subject, body }),
  });
  return response.json();
}