import { rules } from "../data/rules";

/* =========================
   🧠 CLEAN TEXT
========================= */
function cleanText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

/* =========================
   🔍 SIMILARITY (FUZZY)
========================= */
function similarity(a, b) {
  let matches = 0;

  a.split("").forEach((char) => {
    if (b.includes(char)) matches++;
  });

  return matches / Math.max(a.length, b.length);
}

/* =========================
   🎯 MAIN RESPONSE
========================= */
export function getResponse(input) {
  const msg = cleanText(input);

  /* =========================
     🔥 PRIORITY RULES
  ========================= */

  if (msg.includes("dance club")) {
    return "The Dance Club practices every evening in the auditorium 💃";
  }

  if (msg.includes("fees") && msg.includes("placement")) {
    return "Fees are approx ₹80k–₹1.2L per year 💰 and companies like TCS, Infosys visit campus 💼";
  }

  /* =========================
     🧠 SCORING SYSTEM
  ========================= */

  let bestMatches = [];

  rules.forEach((rule) => {
    let score = 0;

    rule.keywords.forEach((keyword) => {
      const cleanKeyword = cleanText(keyword);

      // exact match
      if (msg.includes(cleanKeyword)) {
        score += 2;
      }

      // fuzzy match
      if (similarity(msg, cleanKeyword) > 0.6) {
        score += 1;
      }
    });

    if (score > 0) {
      bestMatches.push({
        response: rule.response,
        score: score,
      });
    }
  });

  /* =========================
     🧠 SORT BEST MATCHES
  ========================= */

  bestMatches.sort((a, b) => b.score - a.score);

  /* =========================
     🎯 MULTI RESPONSE (TOP 2)
  ========================= */

  const finalResponses = bestMatches
    .slice(0, 2)
    .map((item) => item.response);

  if (finalResponses.length > 0) {
    return [...new Set(finalResponses)].join(" ");
  }

  /* =========================
     🤖 SMART FALLBACK
  ========================= */

  if (msg.includes("hi") || msg.includes("hello")) {
    return "Hey 👋 Ask me anything about Poornima University!";
  }

  return "I didn’t fully understand 🤔 Try asking about courses, fees, placements, hostel, events or timetable.";
}