// Tiny markdown renderer — handles ## H2, paragraphs, - lists, | tables, > blockquotes.
// Good enough for our blog post bodies; no external dependency needed.

export function renderMarkdown(src: string): string {
  const lines = src.split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    // Heading
    if (line.startsWith("### ")) { out.push(`<h3 class="h3 mt-8">${esc(line.slice(4))}</h3>`); i++; continue; }
    if (line.startsWith("## ")) { out.push(`<h2 class="h2 mt-10">${esc(line.slice(3))}</h2>`); i++; continue; }

    // Table
    if (line.includes("|") && lines[i + 1]?.match(/^\s*\|?\s*-+/)) {
      const header = splitRow(line);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      out.push(
        `<div class="my-6 overflow-x-auto rounded-2xl border border-slate-100"><table class="min-w-full divide-y divide-slate-100 text-sm"><thead class="bg-brand/5 text-left"><tr>${header.map((h) => `<th class="px-4 py-3 font-semibold">${inline(h)}</th>`).join("")}</tr></thead><tbody class="divide-y divide-slate-100 bg-white">${rows.map((r) => `<tr>${r.map((c) => `<td class="px-4 py-3">${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`,
      );
      continue;
    }

    // List
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      out.push(`<ul class="my-4 ml-5 list-disc space-y-2">${items.map((it) => `<li>${inline(it)}</li>`).join("")}</ul>`);
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quote.push(lines[i].slice(2));
        i++;
      }
      out.push(`<blockquote class="my-4 border-l-4 border-brand bg-brand/5 px-4 py-3 italic text-slate-700">${inline(quote.join(" "))}</blockquote>`);
      continue;
    }

    // Paragraph
    out.push(`<p class="my-4 leading-relaxed text-slate-700">${inline(line)}</p>`);
    i++;
  }

  return out.join("\n");
}

function splitRow(line: string): string[] {
  return line.split("|").map((c) => c.trim()).filter((_, idx, arr) => !(idx === 0 && arr[0] === "") && !(idx === arr.length - 1 && arr[arr.length - 1] === ""));
}

function inline(text: string): string {
  let t = esc(text);
  t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*(.+?)\*/g, "<em>$1</em>");
  t = t.replace(/`([^`]+)`/g, '<code class="rounded bg-slate-100 px-1 py-0.5 text-xs">$1</code>');
  t = t.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-brand underline">$1</a>');
  return t;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
