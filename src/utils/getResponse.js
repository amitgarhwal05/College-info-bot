import { rules } from "../data/rules";

// 🔤 Edit Distance
function getEditDistance(a, b) {
  const dp = Array(a.length + 1)
    .fill(null)
    .map(() => Array(b.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;

      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[a.length][b.length];
}

// 🎯 Fuzzy matching
function isSimilar(word, keyword) {
  if (word.length < 4) return false;
  if (Math.abs(word.length - keyword.length) > 1) return false;

  return getEditDistance(word, keyword) <= 1;
}

// ❌ Ignore weak/common words
const STOP_WORDS = ["club", "the", "about", "tell", "me", "is", "what"];

// 🤖 MAIN FUNCTION
export function getResponse(input) {
  const text = input.toLowerCase();
  const words = text.split(" ").filter(w => !STOP_WORDS.includes(w));

  let matchedResponses = [];

  // =========================
  // ✅ STEP 1: EXACT MATCH (STRONG)
  // =========================
  for (let rule of rules) {
    for (let keyword of rule.keywords) {
      if (text.includes(keyword)) {
        matchedResponses.push(rule.response);
        break;
      }
    }
  }

  // =========================
  // ✅ STEP 2: IMPORTANT WORD MATCH (NO GENERIC WORDS)
  // =========================
  for (let rule of rules) {
    for (let keyword of rule.keywords) {
      for (let word of words) {
        if (keyword === word) {
          matchedResponses.push(rule.response);
          break;
        }
      }
    }
  }

  // =========================
  // ✅ STEP 3: FUZZY MATCH (SAFE)
  // =========================
  for (let rule of rules) {
    for (let keyword of rule.keywords) {
      for (let word of words) {
        if (isSimilar(word, keyword)) {
          matchedResponses.push(rule.response);
          break;
        }
      }
    }
  }

  // =========================
  // ✅ CLEAN RESULTS
  // =========================
  matchedResponses = [...new Set(matchedResponses)];

  if (matchedResponses.length > 0) {
    return matchedResponses.join(" ");
  }

  return "Sorry, I couldn't understand. Try asking about campus facilities, exams, or clubs.";
}