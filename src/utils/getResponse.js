import { rules } from "../data/rules";

/* =========================
   🧠 AI SPELL CORRECTION
========================= */

// Levenshtein Distance
function getDistance(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/* =========================
   🔍 FIND BEST MATCH WORD
========================= */
function correctWord(word, rules) {
  let allKeywords = [];

  rules.forEach((rule) => {
    allKeywords.push(...rule.keywords);
  });

  let bestMatch = word;
  let minDistance = Infinity;

  allKeywords.forEach((keyword) => {
    const distance = getDistance(word, keyword);

    if (distance < minDistance && distance <= 2) {
      minDistance = distance;
      bestMatch = keyword;
    }
  });

  return bestMatch;
}

/* =========================
   ✨ CORRECT FULL SENTENCE
========================= */
function autoCorrect(input, rules) {
  return input
    .toLowerCase()
    .split(" ")
    .map((word) => correctWord(word, rules))
    .join(" ");
}

/* =========================
   🤖 MAIN RESPONSE FUNCTION
========================= */
export function getResponse(input) {

  // 🔥 STEP 1: AUTO CORRECT
  const correctedInput = autoCorrect(input, rules);
  const msg = correctedInput.toLowerCase();

  let responses = [];

  /* =========================
     ⚡ PRIORITY RULES
  ========================= */

  if (msg.includes("btech fees")) {
    return "B.Tech fees is approximately ₹1.96 lakh per year.";
  }

  if (msg.includes("mba fees")) {
    return "MBA fees range from ₹2.30 lakh to ₹4 lakh.";
  }

  if (msg.includes("placement")) {
    return "Average placement for B.Tech is around ₹4–5 lakh per year.";
  }

  /* =========================
     📚 RULE MATCHING
  ========================= */

  rules.forEach((rule) => {
    rule.keywords.forEach((keyword) => {
      if (msg.includes(keyword)) {
        responses.push(rule.response);
      }
    });
  });

  // remove duplicates
  responses = [...new Set(responses)];

  /* =========================
     💡 SHOW CORRECTION (OPTIONAL)
  ========================= */

  if (input.toLowerCase() !== correctedInput && responses.length > 0) {
    return `Showing results for "${correctedInput}"\n\n${responses.join(" ")}`;
  }

  /* =========================
     ✅ FINAL RESPONSE
  ========================= */

  if (responses.length > 0) {
    return responses.join(" ");
  }

  return "I didn’t understand. Try asking about courses, fees, placement, hostel or facilities.";
}