import { supabase } from "@/lib/supabaseClient";

export default async function AppPage() {
  const { data, error } = await supabase
    .from("daily_cards")
    .select("slug, title, body_md, tags, published_at")
    .order("published_at", { ascending: true })
    .limit(1);

  if (error) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Today</h1>
        <p>Failed to load the daily card.</p>
        <pre style={{ whiteSpace: "pre-wrap" }}>{error.message}</pre>
      </div>
    );
  }

  const card = data?.[0];

  return (
    <div style={{ padding: 24, maxWidth: 720 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Today&apos;s Clarity Card</h1>
      {!card ? (
        <p>No card available.</p>
      ) : (
        <article>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{card.title}</h2>
          <p style={{ lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{card.body_md}</p>
          {Array.isArray(card.tags) && card.tags.length > 0 ? (
            <div style={{ marginTop: 12, opacity: 0.8 }}>Tags: {card.tags.join(", ")}</div>
          ) : null}
        </article>
      )}
    </div>
  );
}


